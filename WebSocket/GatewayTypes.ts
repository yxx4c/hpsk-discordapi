import { Shard } from "../Sharding/ShardManager"


export enum GatewayOpcodes {
    Dispatch=0,
    Heartbeat=1,
    Identity=2,
    PresenceUpdate=3,
    VoiceStateUpdate=4,
    Resume=6,
    Reconnect=7,
    RequestGuildMembers=8,
    InvalidSession=9,
    Hello=10,
    HeartbeatACK=11
}

interface properties {
    os: string,
    browser: string,
    device: string
}

interface activities {
    name: string,
    type: number,
    url?: string
}

interface presence {
    since: number,
    activities: Array<Record<keyof activities, any>>,
    status: "online" | "dnd" | "idle" | "invisible" | "offline",
    afk: boolean
}

export interface GatewayConnectionTypes {
    token: String,
    properties: properties,
    compress?: boolean,
    large_theshold?: boolean,
    shard?: [number, number],
    presence?:  Partial<presence>,
    intents: number
}

export class GatewayConnection {
    constructor(obj: GatewayConnectionTypes) {
        return {
            op: GatewayOpcodes.Identity,
            d: obj
        }
    }
}

export interface Events {
    "READY": any,
    "APPLICATION_COMMAND_PERMISSIONS_UPDATE": any,
    "AUTO_MODERATION_RULE_CREATE": any,
    "AUTO_MODERATION_RULE_UPDATE": any,
    "AUTO_MODERATION_RULE_DELETE": any,
    "AUTO_MODERATION_ACTION_EXECUTION": any,
    "CHANNEL_CREATE": any,
    "CHANNEL_UPDATE": any,
    "CHANNEL_DELETE": any,
    "CHANNEL_PINS_UPDATE": any,
    "THREAD_CREATE": any,
    "THREAD_UPDATE": any,
    "THREAD_DELETE": any,
    "THREAD_LIST_SYNC": any,
    "THREAD_MEMBER_UPDATE": any,
    "THREAD_MEMBERS_UPDATE": any,
    "GUILD_CREATE": any,
    "GUILD_UPDATE": any,
    "GUILD_DELETE": any,
    "GUILD_BAN_ADD": any,
    "GUILD_BAN_REMOVE": any,
    "GUILD_EMOJIS_UPDATE": any,
    "GUILD_STICKERS_UPDATE": any,
    "GUILD_INTEGRATIONS_UPDATE": any,
    "GUILD_MEMBER_ADD": any,
    "GUILD_MEMBER_UPDATE": any,
    "GUILD_MEMBER_REMOVE": any,
    "GUILD_MEMBERS_CHUNK": any,
    "GUILD_ROLE_CREATE": any,
    "GUILD_ROLE_UPDATE": any,
    "GUILD_ROLE_DELETE": any,
    "GUILD_SCHEDULED_EVENT_CREATE": any,
    "GUILD_SCHEDULED_EVENT_UPDATE": any,
    "GUILD_SCHEDULED_EVENT_DELETE": any,
    "GUILD_SCHEDULED_EVENT_USER_ADD": any,
    "GUILD_SCHEDULED_EVENT_USER_REMOVE": any,
    "INTEGRATION_CREATE": any,
    "INTEGRATION_UPDATE": any,
    "INTEGRATION_DELETE": any,
    "INTERACTION_CREATE": any,
    "INVITE_CREATE": any,
    "INVITE_DELETE": any,
    "MESSAGE_CREATE": any,
    "MESSAGE_UPDATE": any,
    "MESSAGE_DELETE": any,
    "MESSAGE_DELETE_BULK": any,
    "MESSAGE_REACTION_ADD": any,
    "MESSAGE_REACTION_REMOVE": any,
    "MESSAGE_REACTION_REMOVE_ALL": any,
    "MESSAGE_REACTION_REMOVE_EMOJI": any,
    "PRESENCE_UPDATE": any,
    "STAGE_INSTANCE_CREATE": any,
    "STAGE_INSTANCE_UPDATE": any,
    "STAGE_INSTANCE_DELETE": any,
    "TYPING_START": any,
    "USER_UPDATE": any,
    "VOICE_STATE_UPDATE": any,
    "VOICE_SERVER_UPDATE": any,
    "WEBHOOKS_UPDATE": any,
    "WEBSOCKET_MESSAGE": any,
    "SHARD_CREATE": Array<Shard>
}