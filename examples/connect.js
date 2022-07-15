"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: "../.env" });
const __1 = require("../");
let data = new __1.GatewayConnection({
    token: process.env.discord_token,
    intents: 4276799,
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
shards.eventEmitter.on("SHARD_CREATED", payload => {
    console.log(`[WS => Shard ${payload.id}] created!${payload.id + 1 == payload.totalShards ? " All shards have been activated." : ""}`);
});
shards.eventEmitter.on("SHARD_ERROR", payload => {
    throw console.log(`[WS => Shard ${payload.id}] Error:\ncode: ${payload.code}\nreason: ${payload.reason}`);
});
shards.eventEmitter.on("SHARD_CREATE", async (payload) => {
    console.log(`[WS => Shard ${payload.id}] starting...`);
});
shards.createShards();
