import {WebSocket} from "ws"
import {EventEmitter} from "node:events"
import {Events, GatewayOpcodes} from "./GatewayTypes"
import zlib from "node:zlib"

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
export class DiscordWebSocket extends WebSocket {
    public eventEmitter: DiscordEventEmitter = new DiscordEventEmitter()
    version: Number;
    private gunzip: zlib.Inflate  = zlib.createInflate();
    private interval: number = 0;
    private sessionid: string = ""
    private gunzipJSON: string = "";
    encoding: "etf" | "json";
    discord_socket!: DiscordWebSocket;
    constructor(obj: WebSocketOptions) {
        super(`wss://gateway.discord.gg?v=${obj.version}&encoding=${obj.encoding}&compress=zlib-stream`);
        this.version = obj.version ?? 9
        this.encoding = obj.encoding ?? "json"
    }
   public connect(data: Record<string, string | Object>): void {
      this.discord_socket = new DiscordWebSocket({version: this.version, encoding: this.encoding})
    this.discord_socket.onopen =  async () => {
      this.discord_socket.send(JSON.stringify(data))
      this.discord_socket.onclose =  async (x) => {
        if([1000, 1006].includes(x.code)) {
          this.discord_socket.connect(data)
        }
      }
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
              discord_socket.send(data)
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
            discord_socket = new DiscordWebSocket({version: 9, encoding: "json"})
            discord_socket.once("open", () => {
              this.discord_socket.onclose =  async (x) => {
                if([1000, 1006].includes(x.code)) {
                  this.discord_socket.connect(data)
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