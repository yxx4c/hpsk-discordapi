export type Shard = {
    id: number,
    totalShards: number,
    code?: any
}

export type ShardError = {
    code: number,
    reason: string,
    id: number,
    totalShards: number
}

export type Snowflake = string

export interface User {
    id: Snowflake,
    username: string,
    discriminator: string,
    avatar: string | any,
    bot?: boolean,
    system?: boolean
    mfa_enabled?: boolean
    banner?: string | any
    accent_color?: number | any
    locale?: string,
    verified?: boolean,
    email?: string | any,
    flags?: number,
    premium_type?: number,
    public_flags?: number,
}

export interface RoleTags {
    bot_id?: Snowflake,
    integration_id?: Snowflake,
    premium_subscriber?: null
}

export interface Role {
    id: Snowflake,
    name: string,
    color: number,
    hoist: boolean,
    icon?: string | any,
    unicode_emoji?: string | any,
    position: number,
    permissions: string,
    managed: boolean,
    mentionable: boolean,
    tags?: RoleTags
}

export interface Emoji {
    id: Snowflake | any,
    name: string | any,
    roles?: Array<Role>,
    user?: User,
    require_colons?: boolean,
    managed?: boolean,
    animated?: boolean,
    available?: boolean
}

export interface Sticker {
    id: Snowflake,
    pack_id?: Snowflake,
    name: string,
    description: string | any,
    tags: string,
    asset: string,
    type: number,
    format_type: number,
    available?: boolean,
    guild_id?: Snowflake,
    user?: User,
    sort_value?: number
}

export interface Client {
    id: Snowflake,
    flags?: number,
    icon: string | any
}

export type GuildFeatures = ["ANIMATED_BANNER", "ANIMATED_ICON", "AUTO_MODERATION", "BANNER", "COMMUNITY", "DISCOVERABLE", "FEATURABLE", "INVITES_DISABLED", "INVITE_SPLASH", "MEMBER_VERIFICATION_GATE_ENABLED", "MONETIZATION_ENABLED", "MORE_STICKERS", "NEWS", "PARTNERED", "PREVIEW_ENABLED", "PRIVATE_THREADS", "ROLE_ICONS", "TICKETED_EVENTS_ENABLED", "VANITY_URL", "VERIFIED", "VIP_REGIONS", "WELCOME_SCREEN_ENABLED"]
export interface UnavailableGuild {
    id: Snowflake,
    unavailable: boolean
}
export class UnavailableGuild {
    constructor() {
        
    }
}
export interface GuildPreview {
    id: Snowflake,
    name: string,
    icon: string | any,
    splash: string | any,
    discovery_splash: string | any,
    emojis: Array<Emoji>,
    features: Array<GuildFeatures>,
    approximate_member_count: number,
    approximate_presence_count: number,
    description: string | any,
    stickers: Array<Sticker>
}

export interface READY {
    v: number,
    user: User,
    guilds: Array<UnavailableGuild>,
    session_id: string,
    resume_gateway_url: string,
    shard?: [number, number],
    application: Pick<Client, "flags" | "id">
}

export class READY {
    constructor() {};
}