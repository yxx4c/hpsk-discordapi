"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordWebSocket = exports.events = exports.DiscordEventEmitter = void 0;
const ws_1 = require("ws");
const node_events_1 = require("node:events");
const GatewayTypes_1 = require("./GatewayTypes");
const node_zlib_1 = __importDefault(require("node:zlib"));
const index_1 = require("../index");
const APITypes_1 = require("../REST/classes/APITypes");
class DiscordEventEmitter extends node_events_1.EventEmitter {
    constructor() {
        super();
    }
    on = this.on;
    once = this.once;
    emit = this.emit;
    off = this.off;
    removeAllListeners = this.removeAllListeners;
}
exports.DiscordEventEmitter = DiscordEventEmitter;
exports.events = new DiscordEventEmitter();
class DiscordWebSocket extends ws_1.WebSocket {
    eventEmitter = exports.events;
    resume_gateway_url;
    version;
    dataTwo;
    gunzip = node_zlib_1.default.createInflate({ finishFlush: node_zlib_1.default.constants.Z_SYNC_FLUSH });
    interval = 0;
    sessionid = "";
    encoding;
    discord_socket;
    data;
    cache;
    constructor(obj) {
        let url = obj.url ?? `wss://gateway.discord.gg?v=${obj.version ?? APITypes_1.defaults.gateway}&encoding=${obj.encoding ?? APITypes_1.defaults.encoding}&compress=zlib-stream`;
        super(url);
        this.version = obj.version ?? APITypes_1.defaults.gateway;
        this.data = obj.data;
        this.encoding = obj.encoding ?? APITypes_1.defaults.encoding;
        this.cache = new index_1.CacheManager(obj.caches ?? [], obj.data, exports.events);
    }
    connect() {
        this.discord_socket = new DiscordWebSocket({ version: this.version, encoding: this.encoding, data: this.data });
        this.eventEmitter.emit("SHARD_CREATE", {
            id: this.data.d.shard?.[0] || 0,
            totalShards: this.data.d.shard?.[1] || 1
        });
        this.eventEmitter.on("READY", () => {
            this.eventEmitter.emit("SHARD_CREATED", {
                id: this.data.d.shard?.[0] || 0,
                totalShards: this.data.d.shard?.[1] || 1
            });
        });
        this.discord_socket.onclose = (x) => {
            if (x.code != 1011) {
                this.eventEmitter.emit("OFFLINE", {
                    id: this.data.d.shard?.[0] || 0,
                    totalShards: this.data.d.shard?.[1] || 1
                });
            }
            if ([1000, 1001].includes(x.code)) {
                this.discord_socket.connect();
            }
            else {
                if (x.code.toString().startsWith("40")) {
                    this.eventEmitter.emit("SHARD_ERROR", {
                        id: this.data.d.shard?.[0] || 0,
                        totalShards: this.data.d.shard?.[1] || 1,
                        code: x.code,
                        reason: x.reason
                    });
                }
            }
        };
        this.discord_socket.onopen = async () => {
            this.discord_socket.send(JSON.stringify(this.data));
            this.discord_socket.onerror = (x) => {
                console.log(`DiscordWebSocket recieved an error. Message: ${x}`);
            };
            this.discord_socket.onmessage = (data) => {
                this.gunzip.write(data.data);
            };
        };
        let concat = [];
        this.gunzip.on("data", data => {
            concat.push(data);
            if (!data.slice(data.length - 4).compare(Buffer.from("0000FFFF", "hex")) || data.length < 4)
                return;
            try {
                this.dataTwo = JSON.parse(Buffer.concat(concat).toString());
                concat = [];
                this.eventEmitter.emit("WEBSOCKET_MESSAGE", this.dataTwo);
            }
            catch (_) {
                return;
            }
            let { t, op, d, s } = this.dataTwo;
            if (d?.heartbeat_interval) {
                this.interval = d.heartbeat_interval;
            }
            switch (t) {
                case "READY":
                    this.resume_gateway_url = d.resume_gateway_url + `?v=${this.version ?? APITypes_1.defaults.gateway}&encoding=${this.encoding ?? APITypes_1.defaults.encoding}&compress=zlib-stream`;
                    this.sessionid = d.session_id;
                    break;
            }
            switch (op) {
                case GatewayTypes_1.GatewayOpcodes.InvalidSession:
                    if (d == true) {
                        this.discord_socket.send(JSON.stringify({
                            op: GatewayTypes_1.GatewayOpcodes.Resume,
                            d: {
                                token: this.data.d.token,
                                session_id: this.sessionid,
                                seq: s
                            }
                        }));
                    }
                    else {
                        setTimeout(() => { }, 3000);
                        this.discord_socket.send(JSON.stringify(data));
                    }
                    break;
                case GatewayTypes_1.GatewayOpcodes.Heartbeat:
                    this.discord_socket.send(JSON.stringify({
                        op: GatewayTypes_1.GatewayOpcodes.Heartbeat,
                        d: s
                    }));
                    break;
                case GatewayTypes_1.GatewayOpcodes.Reconnect:
                    this.discord_socket.close(1011);
                    this.discord_socket = new DiscordWebSocket({ version: this.version, encoding: this.encoding, data: this.data, url: this.resume_gateway_url });
                    this.discord_socket.once("open", () => {
                        this.discord_socket.onclose = (x) => {
                            if (x.code != 1011) {
                                this.eventEmitter.emit("OFFLINE", {
                                    id: data.shard?.[0] || 0,
                                    totalShards: data.shard?.[1] || 1
                                });
                            }
                            if ([1000, 1001].includes(x.code)) {
                                this.discord_socket.connect();
                            }
                            else {
                                if (x.code.toString().startsWith("40")) {
                                    this.eventEmitter.emit("SHARD_ERROR", {
                                        id: data.shard?.[0] || 0,
                                        totalShards: data.shard?.[1] || 1,
                                        code: x.code,
                                        reason: x.reason
                                    });
                                }
                            }
                        };
                        this.eventEmitter.emit("SHARD_CREATE", {
                            id: this.data.d.shard?.[0] || 0,
                            totalShards: this.data.d.shard?.[1] || 1
                        });
                        this.discord_socket.send(JSON.stringify({
                            op: GatewayTypes_1.GatewayOpcodes.Resume,
                            d: {
                                token: this.data.d.token,
                                session_id: this.sessionid,
                                seq: s
                            }
                        }));
                    });
                    break;
                case GatewayTypes_1.GatewayOpcodes.Hello:
                    this.discord_socket.send(JSON.stringify({
                        "op": GatewayTypes_1.GatewayOpcodes.Heartbeat,
                        "d": s
                    }));
                    setInterval(() => {
                        this.discord_socket.send(JSON.stringify({
                            "op": GatewayTypes_1.GatewayOpcodes.Heartbeat,
                            "d": s
                        }));
                    }, this.interval);
                    break;
            }
            this.eventEmitter.emit(t, d);
        });
        // setTimeout(() => {}, 1 << 30)
    }
}
exports.DiscordWebSocket = DiscordWebSocket;
__exportStar(require("./GatewayTypes"), exports);
