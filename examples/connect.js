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
let shards = new __1.DiscordShards({ data: data, version: 9, encoding: "json", caches: ["roles", "channels", "guilds", "users", "emojis"] });
shards.eventEmitter.on("SHARD_CREATED", async (payload) => {
    console.log(`[WS => Shard ${payload.id}] created!`);
});
shards.eventEmitter.on("SHARD_ERROR", payload => {
    throw console.log(`[WS => Shard ${payload.id}] Error:\ncode: ${payload.code}\nreason: ${payload.reason}`);
});
shards.eventEmitter.on("SHARD_CREATE", async (payload) => {
    console.log(`[WS => Shard ${payload.id}] starting...`);
});
shards.eventEmitter.on("OFFLINE", async (payload) => {
    console.log(`[WS => Shard ${payload.id}] offline`);
    shards.createShards();
});
shards.createShards().then(async () => {
    let wait = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("");
        }, 5000);
    });
    await wait;
    console.log(shards.cache.roles);
});
