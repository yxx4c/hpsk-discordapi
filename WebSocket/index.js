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
    gunzip = node_zlib_1.default.createInflate({ finishFlush: node_zlib_1.default.constants.Z_SYNC_FLUSH });
    interval = 0;
    sessionid = "";
    gunzipJSON = "";
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
        this.eventEmitter.once("READY", () => {
            this.eventEmitter.emit("SHARD_CREATED", {
                id: this.data.d.shard?.[0] || 0,
                totalShards: this.data.d.shard?.[1] || 1
            });
        });
        this.discord_socket.onclose = (x) => {
            this.eventEmitter.emit("OFFLINE", {
                id: this.data.d.shard?.[0] || 0,
                totalShards: this.data.d.shard?.[1] || 1
            });
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
        this.gunzip.on("data", data => {
            let discord_socket = this.discord_socket;
            if (!data.slice(data.length - 4).compare(Buffer.from([0x00, 0x00, 0xFF, 0xFF]))) {
                node_zlib_1.default.unzip(data, (err, buffer) => {
                    if (err)
                        return console.log(err);
                    data = JSON.parse(buffer.toString("utf8"));
                    this.eventEmitter.emit("WEBSOCKET_MESSAGE", data);
                });
            }
            else {
                try {
                    let some = JSON.parse(!this.gunzipJSON.length ? data.toString("utf8") : this.gunzipJSON);
                    data = some;
                    if (this.gunzipJSON.length) {
                        this.gunzipJSON = "";
                    }
                    // console.log(data)
                    this.eventEmitter.emit("WEBSOCKET_MESSAGE", data);
                }
                catch (_) {
                    this.gunzipJSON += data.toString("utf8");
                    try {
                        let some = JSON.parse(!this.gunzipJSON.length ? Buffer.from(data).toString("utf8") : this.gunzipJSON);
                        data = some;
                        if (this.gunzipJSON.length) {
                            this.gunzipJSON = "";
                        }
                        this.eventEmitter.emit("WEBSOCKET_MESSAGE", data);
                    }
                    catch (_) {
                    }
                }
            }
            let { t, op, d, s } = data;
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
                        discord_socket.send(JSON.stringify({
                            op: GatewayTypes_1.GatewayOpcodes.Resume,
                            d: {
                                token: data.d.token,
                                session_id: this.sessionid,
                                seq: s
                            }
                        }));
                    }
                    else {
                        setTimeout(() => { }, 3000);
                        discord_socket.send(JSON.stringify(data));
                    }
                    break;
                case GatewayTypes_1.GatewayOpcodes.Heartbeat:
                    discord_socket.send(JSON.stringify({
                        op: GatewayTypes_1.GatewayOpcodes.Heartbeat,
                        d: s
                    }));
                    break;
                case GatewayTypes_1.GatewayOpcodes.Reconnect:
                    discord_socket.close(1011);
                    discord_socket = new DiscordWebSocket({ version: this.version, encoding: this.encoding, data: this.data, url: this.resume_gateway_url });
                    discord_socket.once("open", () => {
                        this.discord_socket.onclose = (x) => {
                            this.eventEmitter.emit("OFFLINE", {
                                id: data.shard?.[0] || 0,
                                totalShards: data.shard?.[1] || 1
                            });
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
                        this.discord_socket.onerror = (x) => {
                            console.log(`DiscordWebSocket recieved an error. Message: ${x}`);
                        };
                        this.discord_socket.onmessage = (data) => {
                            this.gunzip.write(data.data);
                        };
                        discord_socket.send(JSON.stringify({
                            op: GatewayTypes_1.GatewayOpcodes.Resume,
                            d: {
                                token: data.d.token,
                                session_id: this.sessionid,
                                seq: s
                            }
                        }));
                    });
                    break;
                case GatewayTypes_1.GatewayOpcodes.Hello:
                    discord_socket.send(JSON.stringify({
                        "op": GatewayTypes_1.GatewayOpcodes.Heartbeat,
                        "d": s
                    }));
                    setInterval(() => {
                        discord_socket.send(JSON.stringify({
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
