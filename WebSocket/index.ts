import {WebSocket} from "ws"
import {EventEmitter} from "node:events"
import {Events, GatewayOpcodes} from "./GatewayTypes"
import zlib from "node:zlib"
import { CacheManager, cacheTypes } from "../index"

export interface WebSocketOptions {
    version?: Number,
    encoding?: "json" | "etf",
    data: Record<any, any>,
    caches?: cacheTypes[]
}
interface VoiceOptions {
    "guildId": string,
    "channelId": string,
    "selfMute": boolean,
    "selfDeaf": boolean,
    group: string
}
export class DiscordEventEmitter extends  EventEmitter {
    constructor() {
        super()
    }
    on: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this) = this.on
    once: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this)  = this.once
    emit: (<K extends keyof Events>(event: K, ...args: Events[K]) => boolean) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, ...args: any[]) => boolean) = this.emit
    off: (<K extends keyof Events>(event: K, listener: (...args: Events[K]) => void) => this) & (<S extends string | symbol>(event: Exclude<S, keyof Events>, listener: (...args: any[]) => void) => this) = this.off
    removeAllListeners: (<K extends keyof Events>(event?: K) => this) & (<S extends string | symbol>(event?: Exclude<S, keyof Events>) => this) = this.removeAllListeners
  }
   export let events: DiscordEventEmitter = new DiscordEventEmitter()
export class DiscordWebSocket extends WebSocket {
    public eventEmitter: DiscordEventEmitter = events
    version: Number;
    private gunzip: zlib.Inflate  = zlib.createInflate({finishFlush: zlib.constants.Z_SYNC_FLUSH});
    private interval: number = 0;
    private sessionid: string = ""
    private gunzipJSON: string = "";
    encoding: "etf" | "json";
    discord_socket!: DiscordWebSocket;
    protected data: Record<any, any>
    public cache: CacheManager
    constructor(obj: WebSocketOptions) {
        super(`wss://gateway.discord.gg?v=${obj.version ?? 9}&encoding=${obj.encoding ?? "json"}&compress=zlib-stream`);
        this.version = obj.version ?? 9
        this.data = obj.data
        this.encoding = obj.encoding ?? "json"
        this.cache = new CacheManager(obj.caches ?? [], obj.data, events)
    }
  public connect(): void {
      this.discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding, data: this.data})
      this.eventEmitter.on("GUILD_ROLE_CREATE", payload => {
        console.log(payload)
    })
    this.eventEmitter.on("GUILD_ROLE_DELETE", payload => {
      console.log(payload)
  })
  this.eventEmitter.on("GUILD_ROLE_UPDATE", payload => {
    console.log(payload)
})
      this.eventEmitter.emit("SHARD_CREATE", {
        id: this.data.d.shard?.[0] || 0,
        totalShards: this.data.d.shard?.[1] || 1
    })
      this.eventEmitter.once("READY", () => {
        this.eventEmitter.emit("SHARD_CREATED", {
          id: this.data.d.shard?.[0] || 0,
          totalShards: this.data.d.shard?.[1] || 1
        })
      })
      this.discord_socket.onclose =  (x) => {
        this.eventEmitter.emit("OFFLINE", {
          id: this.data.d.shard?.[0] || 0,
          totalShards: this.data.d.shard?.[1] || 1
        })
        if([1000, 1001].includes(x.code)) {
          this.discord_socket.connect()
        } else {
          if(x.code.toString().startsWith("40")) {
            this.eventEmitter.emit("SHARD_ERROR", {
              id: this.data.d.shard?.[0] || 0,
              totalShards: this.data.d.shard?.[1] || 1,
              code: x.code,
              reason: x.reason
            })
          }
        }
    }

    this.discord_socket.onopen =  async () => {
      this.discord_socket.send(JSON.stringify(this.data))
      this.discord_socket.onerror = (x) => {
        console.log(`DiscordWebSocket recieved an error. Message: ${x}`)
      }
      this.discord_socket.onmessage = (data) => {
         this.gunzip.write(data.data)
      }

    }
    this.gunzip.on("data", data => {
      let discord_socket = this.discord_socket
      if(!data.slice(data.length-4).compare(Buffer.from([0x00, 0x00, 0xFF, 0xFF]))) {
        zlib.unzip(data, (err, buffer) => {
        if(err) return console.log(err)
        data = JSON.parse(buffer.toString("utf8"))
        this.eventEmitter.emit("WEBSOCKET_MESSAGE", data)
       })
      } else {
        try {
         let some = JSON.parse(!this.gunzipJSON.length ? data.toString("utf8") : this.gunzipJSON)
         data = some
         if(this.gunzipJSON.length) {
          this.gunzipJSON = ""
        }
       // console.log(data)
        this.eventEmitter.emit("WEBSOCKET_MESSAGE", data)
        } catch(_) {
          this.gunzipJSON += data.toString("utf8")
          try {
            let some = JSON.parse(!this.gunzipJSON.length ? Buffer.from(data).toString("utf8") : this.gunzipJSON)
            data = some
            if(this.gunzipJSON.length) {
              this.gunzipJSON = ""
            }
            this.eventEmitter.emit("WEBSOCKET_MESSAGE", data)
          } catch(_) {

          }
        }
      }
        let { t, op, d, s } = data;
        if (d?.heartbeat_interval) {
          this.interval = d.heartbeat_interval
        }
        if (d?.session_id) {
          this.sessionid = d.session_id
        }
        switch (op) {
          case GatewayOpcodes.InvalidSession:
      
            if (d == true) {
                discord_socket.send(JSON.stringify({
                op: GatewayOpcodes.Resume,
                d: {
                  token: data.d.token,
                  session_id: this.sessionid,
                  seq: s
                }
              }))
            } else {
              setTimeout(() => { }, 3000)
              discord_socket.send(JSON.stringify(data))
            }
            break;
          case GatewayOpcodes.Heartbeat:
            discord_socket.send(JSON.stringify({
              op: GatewayOpcodes.Heartbeat,
              d: s
            }))
            break;
          case GatewayOpcodes.Reconnect:
            discord_socket.close(1011)
            discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding, data: this.data})
            discord_socket.once("open", () => {
              this.discord_socket.onclose =  (x) => {
                this.eventEmitter.emit("OFFLINE", {
                  id: data.shard?.[0] || 0,
                  totalShards: data.shard?.[1] || 1
                })
                if([1000, 1001].includes(x.code)) {
                  this.discord_socket.connect()
                } else {
                  if(x.code.toString().startsWith("40")) {
                    this.eventEmitter.emit("SHARD_ERROR", {
                      id: data.shard?.[0] || 0,
                      totalShards: data.shard?.[1] || 1,
                      code: x.code,
                      reason: x.reason
                    })
                  }
                }
            }
              this.discord_socket.onerror = (x) => {
                console.log(`DiscordWebSocket recieved an error. Message: ${x}`)
              }
              this.discord_socket.onmessage = (data) => {
                 this.gunzip.write(data.data)
              }
              discord_socket.send(JSON.stringify({
                op: GatewayOpcodes.Resume,
                d: {
                  token: data.d.token,
                  session_id: this.sessionid,
                  seq: s
                }
              }))
            })
      
            break;
          case GatewayOpcodes.Hello:
            discord_socket.send(JSON.stringify({
              "op": GatewayOpcodes.Heartbeat,
              "d": s
            }));
            setInterval(() => {
              discord_socket.send(JSON.stringify({
                "op": GatewayOpcodes.Heartbeat,
                "d": s
              }));
            }, this.interval);
      
            break;
        }
        this.eventEmitter.emit(t, d)
  })
        // setTimeout(() => {}, 1 << 30)
    }
}

export * from "./GatewayTypes"