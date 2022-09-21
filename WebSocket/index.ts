import {WebSocket} from "ws"
import {EventEmitter} from "node:events"
import {Events, GatewayOpcodes, gatewayConnectCodes} from "./GatewayTypes"
import zlib from "node:zlib"
import { CacheManager, cacheTypes } from "../index"
import { defaults } from "../REST/classes/APITypes"

export interface WebSocketOptions {
    version?: Number,
    encoding?: "json" | "etf",
    url?: String,
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
    public resume_gateway_url!: String
    version: Number;
    private dataTwo!: Record<any, any>;
    private gunzip: zlib.Inflate  = zlib.createInflate({finishFlush: zlib.constants.Z_SYNC_FLUSH});
    private interval: number = 0;
    private sessionid: string = "";
    encoding: "etf" | "json";
    discord_socket!: DiscordWebSocket;
    protected data: Record<any, any>
    private seq: number = 0
    public cache: CacheManager
    constructor(obj: WebSocketOptions) {
      let url = obj.url ?? `wss://gateway.discord.gg?v=${obj.version ?? defaults.gateway}&encoding=${obj.encoding ?? defaults.encoding}&compress=zlib-stream`
        super(url as any);
        this.version = obj.version ?? defaults.gateway
        this.data = obj.data
        this.encoding = obj.encoding ?? defaults.encoding
        this.cache = new CacheManager(obj.caches ?? [], obj.data, events)
    }
  public connect(): void {
      this.discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding, data: this.data})
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
        if(x.code == 4999) return
          this.eventEmitter.emit("OFFLINE", {
            id: this.data.d.shard?.[0] || 0,
            totalShards: this.data.d.shard?.[1] || 1,
            code: x.code
          })

        if(gatewayConnectCodes.includes(x.code)) {
          this.discord_socket.connect()
        } else {
            this.eventEmitter.emit("SHARD_ERROR", {
              id: this.data.d.shard?.[0] || 0,
              totalShards: this.data.d.shard?.[1] || 1,
              code: x.code,
              reason: x.reason
            })
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
    let concat: any[] = []
    let func = (data: any) => {
      concat.push(data)
      if(!data.slice(data.length-4).compare(Buffer.from("0000FFFF", "hex")) || data.length < 4) return
      try {
        this.dataTwo = JSON.parse(Buffer.concat(concat).toString())
          concat = []
      this.eventEmitter.emit("WEBSOCKET_MESSAGE", this.dataTwo)
      } catch(_) {
        return
      }
        let { t, op, d, s } = this.dataTwo;
        if(s) {
          this.seq = s
        }
        if (d?.heartbeat_interval) {
          this.interval = d.heartbeat_interval
        }
        switch(t) {
          case "READY":
            this.resume_gateway_url = d.resume_gateway_url + `?v=${this.version ?? defaults.gateway}&encoding=${this.encoding ?? defaults.encoding}&compress=zlib-stream`
            this.sessionid = d.session_id
            break;
        }
        switch (op) {
          case GatewayOpcodes.InvalidSession:
      
            if (d == true) {
                this.discord_socket.send(JSON.stringify({
                op: GatewayOpcodes.Resume,
                d: {
                  token: this.data.d.token,
                  session_id: this.sessionid,
                  seq: this.seq
                }
              }))
            } else {
              setTimeout(() => { }, 3000)
              this.discord_socket.send(JSON.stringify(data))
            }
            break;
          case GatewayOpcodes.Heartbeat:
            this.discord_socket.send(JSON.stringify({
              op: GatewayOpcodes.Heartbeat,
              d: this.seq || null
            }))
            break;
          case GatewayOpcodes.Reconnect:
            this.discord_socket.close(4999)
            this.discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding, data: this.data, url: this.resume_gateway_url})
            
              this.discord_socket.onclose =  (x) => {
                if(x.code == 4999) return
                this.eventEmitter.emit("OFFLINE", {
                  id: data.shard?.[0] || 0,
                  totalShards: data.shard?.[1] || 1,
                  code: x.code
                })
                if(gatewayConnectCodes.includes(x.code)) {
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
          this.discord_socket.onopen = () => {
              this.discord_socket.send(JSON.stringify({
                op: GatewayOpcodes.Resume,
                d: {
                  token: this.data.d.token,
                  session_id: this.sessionid,
                  seq: this.seq
                }
              }))
              this.discord_socket.onerror = (x) => {
                console.log(`DiscordWebSocket recieved an error. Message: ${x}`)
              }
              this.gunzip = zlib.createInflate({finishFlush: zlib.constants.Z_SYNC_FLUSH})
              this.gunzip.on("data", func)
              this.discord_socket.onmessage = (data) => {
                 this.gunzip.write(data.data)
              }
            }
      
            break;
          case GatewayOpcodes.Hello:
            this.discord_socket.send(JSON.stringify({
              "op": GatewayOpcodes.Heartbeat,
              "d": this.seq || null
            }));
            setInterval(() => {
              this.discord_socket.send(JSON.stringify({
                "op": GatewayOpcodes.Heartbeat,
                "d": this.seq || null
              }));
            }, this.interval);
      
            break;
        }
        this.eventEmitter.emit(t, d)
  }
    this.gunzip.on("data", func)
        // setTimeout(() => {}, 1 << 30)
    }
}

export * from "./GatewayTypes"