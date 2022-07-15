import { EventEmitter } from "stream";
import { DiscordWebSocket, GatewayConnection, GatewayConnectionTypes, REST, Routes } from "../index";

export class DiscordShards extends DiscordWebSocket {
   private rest: REST;
    public gatewayBot: any;
     public gatewayVersion: number;
     public gatewayEncoding: "json" | "etf";
     public data: Record<any, any>;
     public readonly arrayOfSockets: Array<DiscordWebSocket> = []
    constructor(data: Record<any, any>, gatewayVersion: number, gatewayEncoding: "json" | "etf") {
        super({version: gatewayVersion, encoding: gatewayEncoding})
        this.gatewayVersion = gatewayVersion
        this.gatewayEncoding = gatewayEncoding
        this.data = data
        this.rest = new REST({}).setToken(data.d.token as any)
    }
   public async createShards() {
        this.gatewayBot = await this.rest.get(Routes.gatewayBot());
        for(let i = 0; i < this.gatewayBot.shards; i++) {
            let rate_limit_key = i % this.gatewayBot.session_start_limit.max_concurrency
            let discord_socket = new DiscordWebSocket({version: this.gatewayVersion, encoding: this.gatewayEncoding})
           await discord_socket.connect(this.data as any)
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