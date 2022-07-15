"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "../.env" });
const __1 = require("../");
let data = new __1.GatewayConnection({
    token: process.env.discord_token,
    intents: 3276799,
    "presence": {
        "activities": [{
                "name": "gdhpsks server",
                "type": 2
            }],
        status: "online",
    },
    "properties": {
        "os": "iOS",
        "browser": "Discord iOS",
        "device": "IPhone 13"
    }
});
let shards = new __1.DiscordShards(data, 9, "json");
shards.eventEmitter.once("SHARD_CREATE", async (payload) => {
    console.log(`[WS => Shard ${payload.id}] fired up!`);
});
shards.createShards();
