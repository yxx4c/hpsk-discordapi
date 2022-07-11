export enum ButtonStyle {
    Primary=1,
    Secondary=2,
    Success=3,
    Danger=4,
    Link=5
}

export enum AutoModerationTriggerTypes {
    Keyword=1,
    HarmfulLink=2,
    Spam=3,
    KeywordPreset=4
}

export enum AutoModerationKeywordPresetTypes {
    Profanity=1,
    SexualContent=2,
    Slurs=3
}

export enum AutoModerationEventTypes {
    MessageSend=1
}

export enum AutoModerationActionTypes {
    BlockMessage=1,
    SendAlertMessage=2,
    Timeout=3
}

export enum ApplicationInteractionTypes {
    ChatInput=1,
    User=2,
    Message=3
}

export enum AuditLogEvents {
    GuildUpdate=1,
    ChannelCreate=10,
    ChannelUpdate=11,
    ChannelDelete=12,
    ChannelOverwriteCreate=13,
    ChannelOverwriteUpdate=14,
    ChannelOverwriteDelete=15,
    MemberKick=20,
    MemberPrune=21,
    MemberBanAdd=22,
    MemberBanRemove=23,
    MemberUpdate=24,
    MemberRoleUpdate=25,
    MemberMove=26,
    MemberDisconnect=27,
    BotAdd=28,
    RoleCreate=30,
    RoleUpdate=31,
    RoleDelete=32,
    InviteCreate=40,
    InviteUpdate=41,
    InviteDelete=42,
    WebhookCreate=50,
    WebhookUpdate=51,
    WebhookDelete=52,
    EmojiCreate=60,
    EmojiUpdate=61,
    EmojiDelete=62,
    MessageDelete=72,
    MessageBulkDelete=73,
    MessagePin=74,
    MessageUnpin=75,
    InteractionCreate=80,
    InteractionUpdate=81,
    InteractionDelete=82,
    StageInstanceCreate=83,
    StageInstanceUpdate=84,
    StageInstanceDelete=85,
    StickerCreate=90,
    StickerUpdate=91,
    StickerDelete=92,
    GuildScheduledEventCreate=100,
    GuildScheduledEventUpdate=101,
    GuildScheduledEventDelete=102,
    ThreadCreate=110,
    ThreadUpdate=111,
    ThreadDelete=112,
    ApplicationCommandPermissionsUpdate=120,
    AutoModerationRuleCreate=140,
    AutoModerationRuleUpdate=141,
    AutoModerationRuleDelete=142,
    AutoModerationBlockMessage=143
}

export enum ApplicationFlags {
    GatewayPresence=1<<12,
    GatewayPresenceLimited=1<<13,
    GatewayGuildMembers=1<<14,
    GatewayGuildMembersLimited=1<<15,
    VerificationPendingGuildLimit=1<<16,
    Embedded=1<<17,
    GatewayMessageContent=1<<18,
    GatewayMessageContentLimited=1<<19
}

export enum InteractionCallbackTypes {
    Pong=1,
    ChannelMessageWithSource=4,
    DefferedChannelMessageWithSource=5,
    DefferedUpdateMessage=6,
    UpdateMessage=7,
    ApplicationCommandAutoCompleteResult=8,
    Modal=9
}

export enum InteractionTypes {
    Ping=1,
    ApplicationCommand=2,
    MessageComponent=3,
    ApplicationCommandAutoComplete=4,
    ModalSubmit=5
}

export enum AppCommandOptionTypes {
    SubCommand=1,
    SubCommandGroup=2,
    String=3,
    Integer=4,
    Boolean=5,
    User=6,
    Channel=7,
    Role=8,
    Mentionable=9,
    Number=10,
    Attachment=11
}

export enum ComponentTypes {
    ActionRow=1,
    Button=2,
    SelectMenu=3,
    TextInput=4
} 

export enum ChannelTypes {
    GuildText=0,
    DM=1,
    GuildVoice=2,
    GroupDM=3,
    GuildCategory=4,
    GuildNews=5,
    GuildNewsThread=10,
    GuildPublicThread=11,
    GuildPrivateThread=12,
    GuildStageVoice=13,
    GuildDirectory=14,
    GuildForum=15
}

export enum VideoQualityTypes {
    Auto=1,
    Full=2
}

export enum ChannelFlags {
    Pinned=1<<1
}

export enum MessageTypes {
    Default=0,
    RecipientAdd=1,
    RecipientRemove=2,
    Call=3,
    ChannelNameChange=4,
    ChannelIconChange=5,
    ChannelPinnedMessage=6,
    UserJoin=7,
    GuildBoost=8,
    GuildBoostTier1=9,
    GuildBoostTier2=10,
    GuildBoostTier3=11,
    ChannelFollowAdd=12,
    GuildDiscoveryDisqualified=14,
    GuildDIscoveryRequalified=15,
    GuildDiscoveryGracePeriodInitialWarning=16,
    GuildDiscoveryGracePeriodFinalWarning=17,
    ThreadCreated=18,
    Reply=19,
    ChatInputCommand=20,
    ThreadStarterMessage=21,
    GuildInviteReminder=22,
    ContextMenuCommand=23,
    AutoModerationAction=24
}

export enum MessageActivityTypes {
    Join=1,
    Spectate=2,
    Listen=3,
    JoinRequest=4
}

export enum MessageFlags {
    Crossposted=1<<0,
    IsCrossposted=1<<1,
    SuppressEmbeds=1<<2,
    SourceMessageDeleted=1<<3,
    Urgent=1<<4,
    HasThread=1<<5,
    Ephemeral=1<<6,
    Loading=1<<7,
    FailedToMentionSoleRolesInThread=1<<8
}

export enum DefaultNotificationLevel {
    AllMessages=0,
    OnlyMentions=1
}

export enum ExplicitContentFilterLevel {
    Disabled=0,
    MembersWithoutRoles=1,
    AllMembers=2
}

export enum MFALevel {
    None=0,
    Elevated=1
}

export enum VerificationLevel {
    /**
     * Unrestricted
     */
    None=0,
    /**
     * Must have a verified email on the account
     */
    Low=1,
    /**
     * Must be registered on discord for longer than 5 minutes
     */
    Medium=2,
    /**
     * Must be a member of the server for longer than 10 minutes
     */
    High=3,
    /**
     * Must have a verified phone number
     */
    VeryHigh=4
}

export enum GuildNSFWLevel {
    Default=0,
    Explicit=1,
    Safe=2,
    AgeRestricted=3
}

export enum GuildPremiumTier {
    /**
     * Guild has not unlocked any Server Boost perks
     */
    None=0,
    /**
     * guild has unlocked Server Boost level 1 perks
     */
    Tier1=1,
    /**
     * guild has unlocked Server Boost level 2 perks
     */
    Tier2=2,
    /**
     * guild has unlocked Server Boost level 3 perks
     */
    Tier3=3
}

export enum SystemChannelFlags {
    /**
     * Suppress member join notifications
     */
    SuppressJoinMentions=0,
    /**
     * Suppress server boost notifications
     */
    SuppressPremiumSubscriptions=1,
    /**
     * Suppress server setup tips
     */
    SuppressGuildReminderNotifications=2,
    /**
     * Hide member join sticker reply buttons
     */
    SuppressJoinNotificationReplies=3
}

export enum IntegrationExpireBehaviors {
    RemoveRole=0,
    Kick=1
}

export enum GuildScheduledEventPrivacyLevel {
    GuildOnly=2
}

export enum GuildScheduledEventEntityTypes {
    StageInstance=1,
    Voice=2,
    External=3
}

export enum GuildScheduledEventStatus {
    Scheduled=1,
    Active=2,
    Completed=3,
    Cancelled=4
}

export enum InviteTargetTypes {
    Stream=1,
    EmbeddedApplication=2
}

export enum StickerTypes {
    Standard=1,
    Guild=2
}

export enum StickerFormatTypes {
    PNG=1,
    APNG=2,
    LOTTIE=3
}

export enum UserFlags {
    Staff=1<<0,
    Partner=1<<1,
    HypeSquad=1<<2,
    BugHunterLevel1=1<<3,
    HypeSquadOnlineHouse1=1<<6,
    HypeSquadOnlineHouse2=1<<7,
    HypeSquadOnlineHouse3=1<<8,
    PremiumEarlySupporter=1<<9,
    TeamPseudoUser=1<<10,
    BugHunterLevel2=1<<14,
    VerifiedBot=1<<16,
    VerifiedDeveloper=1<<17,
    CertifiedModerator=1<<18,
    BotHttpInteractions=1<<19
}

export enum PremiumTypes {
    None=0,
    NitroClassic=1,
    Nitro=2
}

export enum UserVisibilityTypes {
    None=0,
    Everyone=1
}

export enum WebhookTypes {
    Incoming=1,
    ChannelFollower=2,
    Application=3
}

export enum ActivityTypes {
    Game=0,
    Streaming=1,
    Listening=2,
    Watching=3,
    Custom=4,
    Competing=5
}

export enum ActivityFlags {
    Instance=1<<0,
    Join=1<<1,
    Spectate=1<<2,
    JoinRequest=1<<3,
    Sync=1<<4,
    Play=1<<5,
    PartyPrivacyFriends=1<<6,
    PartyPrivacyVoiceChannel=1<<7,
    Embedded=1<<8
}

export enum VoiceOpcodes {
    Identity=0,
    SelectPayload=1,
    Ready=2,
    Heartbeat=3,
    SessionDescription=4,
    Speaking=5,
    HeartbeatACK=6,
    Resume=7,
    Hello=8,
    Resumed=9,
    ClientDisconnect=13
}

export enum PermissionsBitField {
    CreateInstantInvite=1<<0,
    KickMembers=1<<1,
    BanMembers=1<<2,
    Administrator=1<<3,
    ManageChannels=1<<4,
    ManageGuild=1<<5,
    AddReactions=1<<6,
    ViewAuditLog=1<<7,
    PrioritySpeaker=1<<8,
    Stream=1<<9,
    ViewChannel=1<<10,
    SendMessages=1<<11,
    SendTTSMessages=1<<12,
    ManageMessages=1<<13,
    EmbedLinks=1<<14,
    AttachFiles=1<<15,
    ReadMessageHistory=1<<16,
    MentionEveryone=1<<17,
    UseExternalEmojis=1<<18,
    ViewGuildInsights=1<<19,
    Connect=1<<20,
    Speak=1<<21,
    MuteMembers=1<<22,
    DeafenMembers=1<<23,
    MoveMembers=1<<24,
    UseVAD=1<<25,
    ChangeNickname=1<<26,
    ManageNicknames=1<<27,
    ManageRoles=1<<28,
    ManageWebhooks=1<<29,
    ManageEmojisAndStickers=1<<30,
    UseApplicationCommands=1<<31,
    RequestToSpeak=1<<32,
    ManageEvents=1<<33,
    ManageThreads=1<<34,
    CreatePublicThreads=1<<35,
    CreatePrivateThreads=1<<36,
    UseExternalStickers=1<<37,
    SendMessagesInThreads=1<<38,
    UseEmbeddedActivities=1<<39,
    ModerateMembers=1<<40
}

export enum InputVoiceType {
    VoiceActivity=0,
    PushToTalk=1
}