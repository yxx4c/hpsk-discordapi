require("dotenv").config({path: "../.env"})

import {DiscordShards, GatewayConnection } from "../"

let data = new GatewayConnection({
    token: process.env.discord_token as string,
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
})
let shards = new DiscordShards(data, 9, "json")

shards.eventEmitter.on("SHARD_CREATED", payload => {
    console.log(`[WS => Shard ${payload.id}] created!${payload.id+1 == payload.totalShards ? " All shards have been activated." : ""}`)
})

shards.eventEmitter.on("SHARD_ERROR", payload => {
   throw console.log(`[WS => Shard ${payload.id}] Error:\ncode: ${payload.code}\nreason: ${payload.reason}`)
})

shards.eventEmitter.on("SHARD_CREATE", async payload  => {
    console.log(`[WS => Shard ${payload.id}] starting...`)
})

shards.eventEmitter.on("OFFLINE", async payload => {
    console.log(`[WS => All Shards (${payload.totalShards})] offline`)
})
shards.createShards()