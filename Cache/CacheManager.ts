import { DiscordEventEmitter } from "../index";
export declare const caches: ["channels",  "guilds", "emojis", "roles", "users"]
export declare type cacheTypes = typeof caches[number]
const cachesArray = ["channels",  "guilds", "emojis", "roles", "users"]
export class CacheManager {
    channels: Map<any, any> = new Map()
    guilds: Map<any, any> = new Map()
    emojis: Map<any, any> = new Map()
    roles: Map<any, any> = new Map()
    users: Map<any, any> = new Map()
    eventEmitter: DiscordEventEmitter
    constructor(includeCaches: cacheTypes[], data: Record<any, any>, eventEmitter: DiscordEventEmitter) {
        this.eventEmitter = eventEmitter
        if(includeCaches.includes(cachesArray[0] as cacheTypes)) {
            this.channelCache(this.channels)
        }
        if(includeCaches.includes(cachesArray[1] as cacheTypes)) {
            this.guildCache(this.guilds)
        }
        if(includeCaches.includes(cachesArray[2] as cacheTypes)) {
            this.emojiCache(this.emojis)
        }
        if(includeCaches.includes(cachesArray[3] as cacheTypes)) {
            this.rolesCache(this.roles)
        }
        if(includeCaches.includes(cachesArray[4] as cacheTypes)) {
            this.userCache(this.users)
        }
    }
    private channelCache(map: Map<any, any>) {
    this.eventEmitter.on("GUILD_CREATE", async payload => {
            for(const key of payload.channels) {
              if(map.has(key.id)) return;
              map.set(key.id, key)
            }
      })

      this.eventEmitter.on("CHANNEL_CREATE", async payload => {
        let struct = {
            type: payload.type,
            topic: payload.topic,
            rate_limit_per_user: payload.rate_limit_per_user,
            position: payload.position,
            permission_overwrites: payload.permission_overwrites,
            parent_id: payload.parent_id,
            nsfw: payload.nsfw,
            name: payload.name,
            last_message_id: payload.last_message_id,
            id: payload.id,
            flags: payload.flags
        }
        map.set(struct.id, struct)
      })

      this.eventEmitter.on("CHANNEL_UPDATE", async payload => {
        let struct = {
            type: payload.type,
            topic: payload.topic,
            rate_limit_per_user: payload.rate_limit_per_user,
            position: payload.position,
            permission_overwrites: payload.permission_overwrites,
            parent_id: payload.parent_id,
            nsfw: payload.nsfw,
            name: payload.name,
            last_message_id: payload.last_message_id,
            id: payload.id,
            flags: payload.flags
        }
        map.set(struct.id, struct)
      })

      this.eventEmitter.on("CHANNEL_DELETE", async payload => {
        if(!map.has(payload.id)) return;
        map.delete(payload.id)
      })
      this.eventEmitter.on("GUILD_DELETE", async payload => {
          for(const key of payload.channels) {
            if(!map.has(key.id)) return;
            map.delete(key)
          }
    })
    }
    private emojiCache(map: Map<any, any>) {
        this.eventEmitter.on("GUILD_CREATE", async payload => {
            for(const key of payload.emojis) {
              if(map.has(key.id)) return;
              map.set(key.id, key)
            }
      })
      this.eventEmitter.on("GUILD_EMOJIS_UPDATE", async payload => {
        for(const key of payload.emojis) {
            map.set(key.id, key)
          }
      })
      this.eventEmitter.on("GUILD_DELETE", async payload => {
          for(const key of payload.emojis) {
            if(!map.has(key.id)) return;
            map.delete(key)
          }
    })
    }
    private userCache(map: Map<any, any>) {
        this.eventEmitter.on("GUILD_CREATE", async payload => {
              for(const key of payload.members) {
                if(map.has(key.user.id)) return;
                map.set(key.user.id, key.user)
              }
        })
        this.eventEmitter.on("GUILD_MEMBER_ADD", async payload => {
            map.set(payload.user.id, payload.user)
       })
        this.eventEmitter.on("GUILD_MEMBER_UPDATE", async payload => {
           map.set(payload.user.id, payload.user)
      })
      this.eventEmitter.on("GUILD_MEMBER_REMOVE", async payload => {
        if(!map.has(payload.user.id)) return
        map.delete(payload.user)
   })
        this.eventEmitter.on("GUILD_DELETE", async payload => {
            for(const key of payload.members) {
              if(!map.has(key.user.id)) return;
              map.delete(key.user.id)
            }
      })
    }
    private guildCache(map: Map<any, any>): void {
        this.eventEmitter.on("GUILD_CREATE", async payload => {
            if(map.has(payload.id)) return;
            map.set(payload.id, payload)
        })
        this.eventEmitter.on("GUILD_UPDATE", async payload => {
            map.set(payload.id, payload)
        })
        this.eventEmitter.on("GUILD_DELETE", async payload => {
            if(!map.has(payload.id)) return;
            map.delete(payload)
        })
    }
    private rolesCache(map: Map<any, any>) { 
       this.eventEmitter.on("GUILD_CREATE", async payload => {
              for(const key of payload.roles) {
                if(map.has(key.id)) return;
                map.set(key.id, key)
              }
        })
        this.eventEmitter.on("GUILD_ROLE_CREATE", payload => {
            map.set(payload.role.id, payload.role)
        })
        this.eventEmitter.on("GUILD_ROLE_DELETE", payload => {
          if(!map.has(payload.id)) return;
          map.delete(payload.id)
      })
      this.eventEmitter.on("GUILD_ROLE_UPDATE", payload => {
        map.set(payload.role.id, payload.role)
    })
        this.eventEmitter.on("GUILD_DELETE", async payload => {
            for(const key of payload.roles) {
              if(!map.has(key.id)) return;
              map.delete(key)
            }
      })
    }
}