"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordShards = void 0;
const index_1 = require("../index");
class DiscordShards extends index_1.DiscordWebSocket {
    rest;
    gatewayVersion;
    gatewayEncoding;
    data;
    arrayOfSockets = [];
    constructor(data, gatewayVersion, gatewayEncoding) {
        super({ version: gatewayVersion, encoding: gatewayEncoding });
        this.gatewayVersion = gatewayVersion;
        this.gatewayEncoding = gatewayEncoding;
        this.data = data;
        this.rest = new index_1.REST({}).setToken(data.d.token);
    }
    async createShards() {
        let gatewayBot = await this.rest.get(index_1.Routes.gatewayBot());
        for (let i = 0; i < gatewayBot.shards; i++) {
            let rate_limit_key = i % gatewayBot.session_start_limit.max_concurrency;
            let discord_socket = new index_1.DiscordWebSocket({ version: this.gatewayVersion, encoding: this.gatewayEncoding });
            discord_socket.connect(this.data);
            this.eventEmitter.emit("SHARD_CREATE", {
                id: i,
                totalShards: gatewayBot.shards
            });
            this.arrayOfSockets.push(discord_socket);
            if (rate_limit_key == 0) {
                let queueShard = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("");
                    }, 5000);
                });
                await queueShard;
            }
        }
    }
}
exports.DiscordShards = DiscordShards;
