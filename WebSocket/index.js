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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordWebSocket = void 0;
const ws_1 = require("ws");
const node_events_1 = require("node:events");
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
const events = new DiscordEventEmitter();
let discord_socket;
class DiscordWebSocket extends ws_1.WebSocket {
    eventEmitter = events;
    version;
    encoding;
    constructor(obj) {
        super(`wss://gateway.discord.gg?v=${obj.version}&encoding=${obj.encoding}`);
        this.version = obj.version;
        this.encoding = obj.encoding;
    }
    connect(data) {
        discord_socket = new DiscordWebSocket({ version: this.version, encoding: this.encoding });
        discord_socket.onopen = () => {
            discord_socket.send(JSON.stringify(data));
        };
        let sessionid = "";
        let interval = 0;
        discord_socket.onerror = function err(x) {
            console.log(`DiscordWebSocket recieved an error. Message: ${x}`);
        };
        discord_socket.addEventListener("message", async function incoming(data) {
            var x = data.data;
            let payload = JSON.parse(x);
            let { t, op, d, s } = payload;
            if (d?.heartbeat_interval) {
                interval = d.heartbeat_interval;
            }
            if (d?.session_id) {
                sessionid = d.session_id;
            }
            switch (op) {
                case 9:
                    if (d == true) {
                        discord_socket.send(JSON.stringify({
                            op: 6,
                            d: {
                                token: process.env.discord_token,
                                session_id: sessionid,
                                seq: s
                            }
                        }));
                    }
                    else {
                        setTimeout(() => { }, 3000);
                        discord_socket.send(JSON.stringify({
                            op: 2,
                            d: {
                                token: process.env.discord_token,
                                intents: 131071,
                                status: "online",
                                "presence": {
                                    "activities": [{
                                            "name": "gdhpsks server",
                                            "type": 2
                                        }]
                                },
                                "properties": {
                                    "$os": "windows",
                                    "$browser": "my_library",
                                    "$device": "my_library"
                                }
                            }
                        }));
                    }
                    break;
                case 1:
                    discord_socket.send(JSON.stringify({
                        op: 1,
                        d: s
                    }));
                    break;
                case 7:
                    discord_socket.close(1011);
                    discord_socket = new DiscordWebSocket({ version: 9, encoding: "json" });
                    discord_socket.once("open", () => {
                        discord_socket.addEventListener("message", incoming);
                        discord_socket.send(JSON.stringify({
                            op: 6,
                            d: {
                                token: process.env.discord_token,
                                session_id: sessionid,
                                seq: s
                            }
                        }));
                    });
                    break;
                case 10:
                    setInterval(() => {
                        discord_socket.send(JSON.stringify({
                            "op": 1,
                            "d": s
                        }));
                    }, interval);
                    break;
            }
            events.emit(t, d);
        });
        // setTimeout(() => {}, 1 << 30)
    }
}
exports.DiscordWebSocket = DiscordWebSocket;
__exportStar(require("./GatewayTypes"), exports);
