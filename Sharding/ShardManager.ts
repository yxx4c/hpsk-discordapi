import { DiscordWebSocket, GatewayConnection, GatewayConnectionTypes, REST, Routes, WebSocketOptions } from "../index";
import { defaults } from "../REST/classes/APITypes";

export class DiscordShards extends DiscordWebSocket {
   private rest: REST;
    public gatewayBot: any;
     public gatewayVersion: number;
     public gatewayEncoding: "json" | "etf";
     public readonly arrayOfSockets: Array<DiscordWebSocket> = []
    constructor(obj: WebSocketOptions) {
        super({version: obj.version, encoding: obj.encoding, data: obj.data, caches: obj.caches ?? []})
        this.gatewayVersion = obj.version as number ?? defaults.gateway
        this.gatewayEncoding = obj.encoding ?? defaults.encoding
        this.rest = new REST({}).setToken(obj.data.d.token as any)
    }
   public async createShards() {
        this.gatewayBot = await this.rest.get(Routes.gatewayBot());
        for(let i = 0; i < this.gatewayBot.shards; i++) {
            let rate_limit_key = i % this.gatewayBot.session_start_limit.max_concurrency
            this.data.d.shard = [i, this.gatewayBot.shards]
            let discord_socket = new DiscordWebSocket({version: this.gatewayVersion, encoding: this.gatewayEncoding, data: this.data})
            discord_socket.connect()
            this.arrayOfSockets.push(discord_socket)
            if(rate_limit_key == 0 && i != this.gatewayBot.shards-1) {
                let queueShard = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("")
                    }, 5000)
                })
                await queueShard
            }
        }
        this.eventEmitter.on("OFFLINE", () => {
            this.createShards()
        })
    }
}