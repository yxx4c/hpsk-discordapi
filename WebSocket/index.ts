import {WebSocket} from "ws"
import {EventEmitter} from "node:events"
import {Events, GatewayOpcodes} from "./GatewayTypes"

interface WebSocketOptions {
    version: Number,
    encoding: "json" | "etf"
}
interface VoiceOptions {
    "guildId": string,
    "channelId": string,
    "selfMute": boolean,
    "selfDeaf": boolean,
    group: string
}

class DiscordEventEmitter extends  EventEmitter {
    constructor() {
        super()
    }
    on: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this) = this.on
    once: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this)  = this.once
    emit: (<K extends keyof Events>(event: K, ...args: Events[K]) => boolean) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, ...args: any[]) => boolean) = this.emit
    off: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this) = this.off
    removeAllListeners: (<K extends keyof Events>(event?: K) => this) & (<S extends string | symbol>(event?: Exclude<S, keyof Events>) => this) = this.removeAllListeners
  }

const events: DiscordEventEmitter = new DiscordEventEmitter()
let discord_socket: any;

export class DiscordWebSocket extends WebSocket {
    public eventEmitter: DiscordEventEmitter = events
    version: Number;
    encoding: "etf" | "json";
    constructor(obj: WebSocketOptions) {
        super(`wss://gateway.discord.gg?v=${obj.version}&encoding=${obj.encoding}`);
        this.version = obj.version
        this.encoding = obj.encoding
    }
    public connect(data: Record<string, string | Object>): void {
            discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding})
                discord_socket.onopen = () => {
                    discord_socket.send(JSON.stringify(data));
                }
            let sessionid: String = ""
            let interval: number= 0
          discord_socket.onerror = function err(x: any) {
            console.log(`DiscordWebSocket recieved an error. Message: ${x}`)
          }
          discord_socket.addEventListener("message", async function incoming(data: any) {
            var x = data.data;
            let payload = JSON.parse(x as string)
            let { t, op, d, s } = payload;
            if (d?.heartbeat_interval) {
              interval = d.heartbeat_interval
            }
            if (d?.session_id) {
              sessionid = d.session_id
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
                  }))
                } else {
                  setTimeout(() => { }, 3000)
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
                  }))
                }
                break;
              case 1:
                discord_socket.send(JSON.stringify({
                  op: 1,
                  d: s
                }))
                break;
              case 7:
                discord_socket.close(1011)
                discord_socket = new DiscordWebSocket({version: 9, encoding: "json"})
                discord_socket.once("open", () => {
                  discord_socket.addEventListener("message", incoming)
          
                  discord_socket.send(JSON.stringify({
                    op: 6,
                    d: {
                      token: process.env.discord_token,
                      session_id: sessionid,
                      seq: s
                    }
                  }))
                })
          
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
            events.emit(t, d)
          });
        // setTimeout(() => {}, 1 << 30)
    }
}

export * from "./GatewayTypes"