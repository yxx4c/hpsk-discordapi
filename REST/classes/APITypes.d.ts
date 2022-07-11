export declare enum ButtonStyle {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Link = 5
}
export declare enum AutoModerationTriggerTypes {
    Keyword = 1,
    HarmfulLink = 2,
    Spam = 3,
    KeywordPreset = 4
}
export declare enum AutoModerationKeywordPresetTypes {
    Profanity = 1,
    SexualContent = 2,
    Slurs = 3
}
export declare enum AutoModerationEventTypes {
    MessageSend = 1
}
export declare enum AutoModerationActionTypes {
    BlockMessage = 1,
    SendAlertMessage = 2,
    Timeout = 3
}
export declare enum ApplicationInteractionTypes {
    ChatInput = 1,
    User = 2,
    Message = 3
}
export declare enum AuditLogEvents {
    GuildUpdate = 1,
    ChannelCreate = 10,
    ChannelUpdate = 11,
    ChannelDelete = 12,
    ChannelOverwriteCreate = 13,
    ChannelOverwriteUpdate = 14,
    ChannelOverwriteDelete = 15,
    MemberKick = 20,
    MemberPrune = 21,
    MemberBanAdd = 22,
    MemberBanRemove = 23,
    MemberUpdate = 24,
    MemberRoleUpdate = 25,
    MemberMove = 26,
    MemberDisconnect = 27,
    BotAdd = 28,
    RoleCreate = 30,
    RoleUpdate = 31,
    RoleDelete = 32,
    InviteCreate = 40,
    InviteUpdate = 41,
    InviteDelete = 42,
    WebhookCreate = 50,
    WebhookUpdate = 51,
    WebhookDelete = 52,
    EmojiCreate = 60,
    EmojiUpdate = 61,
    EmojiDelete = 62,
    MessageDelete = 72,
    MessageBulkDelete = 73,
    MessagePin = 74,
    MessageUnpin = 75,
    InteractionCreate = 80,
    InteractionUpdate = 81,
    InteractionDelete = 82,
    StageInstanceCreate = 83,
    StageInstanceUpdate = 84,
    StageInstanceDelete = 85,
    StickerCreate = 90,
    StickerUpdate = 91,
    StickerDelete = 92,
    GuildScheduledEventCreate = 100,
    GuildScheduledEventUpdate = 101,
    GuildScheduledEventDelete = 102,
    ThreadCreate = 110,
    ThreadUpdate = 111,
    ThreadDelete = 112,
    ApplicationCommandPermissionsUpdate = 120,
    AutoModerationRuleCreate = 140,
    AutoModerationRuleUpdate = 141,
    AutoModerationRuleDelete = 142,
    AutoModerationBlockMessage = 143
}
export declare enum ApplicationFlags {
    GatewayPresence = 4096,
    GatewayPresenceLimited = 8192,
    GatewayGuildMembers = 16384,
    GatewayGuildMembersLimited = 32768,
    VerificationPendingGuildLimit = 65536,
    Embedded = 131072,
    GatewayMessageContent = 262144,
    GatewayMessageContentLimited = 524288
}
export declare enum InteractionCallbackTypes {
    Pong = 1,
    ChannelMessageWithSource = 4,
    DefferedChannelMessageWithSource = 5,
    DefferedUpdateMessage = 6,
    UpdateMessage = 7,
    ApplicationCommandAutoCompleteResult = 8,
    Modal = 9
}
export declare enum InteractionTypes {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutoComplete = 4,
    ModalSubmit = 5
}
export declare enum AppCommandOptionTypes {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11
}
export declare enum ComponentTypes {
    ActionRow = 1,
    Button = 2,
    SelectMenu = 3,
    TextInput = 4
}
export declare enum ChannelTypes {
    GuildText = 0,
    DM = 1,
    GuildVoice = 2,
    GroupDM = 3,
    GuildCategory = 4,
    GuildNews = 5,
    GuildNewsThread = 10,
    GuildPublicThread = 11,
    GuildPrivateThread = 12,
    GuildStageVoice = 13,
    GuildDirectory = 14,
    GuildForum = 15
}
export declare enum VideoQualityTypes {
    Auto = 1,
    Full = 2
}
export declare enum ChannelFlags {
    Pinned = 2
}
export declare enum MessageTypes {
    Default = 0,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Call = 3,
    ChannelNameChange = 4,
    ChannelIconChange = 5,
    ChannelPinnedMessage = 6,
    UserJoin = 7,
    GuildBoost = 8,
    GuildBoostTier1 = 9,
    GuildBoostTier2 = 10,
    GuildBoostTier3 = 11,
    ChannelFollowAdd = 12,
    GuildDiscoveryDisqualified = 14,
    GuildDIscoveryRequalified = 15,
    GuildDiscoveryGracePeriodInitialWarning = 16,
    GuildDiscoveryGracePeriodFinalWarning = 17,
    ThreadCreated = 18,
    Reply = 19,
    ChatInputCommand = 20,
    ThreadStarterMessage = 21,
    GuildInviteReminder = 22,
    ContextMenuCommand = 23,
    AutoModerationAction = 24
}
export declare enum MessageActivityTypes {
    Join = 1,
    Spectate = 2,
    Listen = 3,
    JoinRequest = 4
}
export declare enum MessageFlags {
    Crossposted = 1,
    IsCrossposted = 2,
    SuppressEmbeds = 4,
    SourceMessageDeleted = 8,
    Urgent = 16,
    HasThread = 32,
    Ephemeral = 64,
    Loading = 128,
    FailedToMentionSoleRolesInThread = 256
}
export declare enum DefaultNotificationLevel {
    AllMessages = 0,
    OnlyMentions = 1
}
export declare enum ExplicitContentFilterLevel {
    Disabled = 0,
    MembersWithoutRoles = 1,
    AllMembers = 2
}
export declare enum MFALevel {
    None = 0,
    Elevated = 1
}
export declare enum VerificationLevel {
    /**
     * Unrestricted
     */
    None = 0,
    /**
     * Must have a verified email on the account
     */
    Low = 1,
    /**
     * Must be registered on discord for longer than 5 minutes
     */
    Medium = 2,
    /**
     * Must be a member of the server for longer than 10 minutes
     */
    High = 3,
    /**
     * Must have a verified phone number
     */
    VeryHigh = 4
}
export declare enum GuildNSFWLevel {
    Default = 0,
    Explicit = 1,
    Safe = 2,
    AgeRestricted = 3
}
export declare enum GuildPremiumTier {
    /**
     * Guild has not unlocked any Server Boost perks
     */
    None = 0,
    /**
     * guild has unlocked Server Boost level 1 perks
     */
    Tier1 = 1,
    /**
     * guild has unlocked Server Boost level 2 perks
     */
    Tier2 = 2,
    /**
     * guild has unlocked Server Boost level 3 perks
     */
    Tier3 = 3
}
export declare enum SystemChannelFlags {
    /**
     * Suppress member join notifications
     */
    SuppressJoinMentions = 0,
    /**
     * Suppress server boost notifications
     */
    SuppressPremiumSubscriptions = 1,
    /**
     * Suppress server setup tips
     */
    SuppressGuildReminderNotifications = 2,
    /**
     * Hide member join sticker reply buttons
     */
    SuppressJoinNotificationReplies = 3
}
export declare enum IntegrationExpireBehaviors {
    RemoveRole = 0,
    Kick = 1
}
export declare enum GuildScheduledEventPrivacyLevel {
    GuildOnly = 2
}
export declare enum GuildScheduledEventEntityTypes {
    StageInstance = 1,
    Voice = 2,
    External = 3
}
export declare enum GuildScheduledEventStatus {
    Scheduled = 1,
    Active = 2,
    Completed = 3,
    Cancelled = 4
}
export declare enum InviteTargetTypes {
    Stream = 1,
    EmbeddedApplication = 2
}
export declare enum StickerTypes {
    Standard = 1,
    Guild = 2
}
export declare enum StickerFormatTypes {
    PNG = 1,
    APNG = 2,
    LOTTIE = 3
}
export declare enum UserFlags {
    Staff = 1,
    Partner = 2,
    HypeSquad = 4,
    BugHunterLevel1 = 8,
    HypeSquadOnlineHouse1 = 64,
    HypeSquadOnlineHouse2 = 128,
    HypeSquadOnlineHouse3 = 256,
    PremiumEarlySupporter = 512,
    TeamPseudoUser = 1024,
    BugHunterLevel2 = 16384,
    VerifiedBot = 65536,
    VerifiedDeveloper = 131072,
    CertifiedModerator = 262144,
    BotHttpInteractions = 524288
}
export declare enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}
export declare enum UserVisibilityTypes {
    None = 0,
    Everyone = 1
}
export declare enum WebhookTypes {
    Incoming = 1,
    ChannelFollower = 2,
    Application = 3
}
export declare enum ActivityTypes {
    Game = 0,
    Streaming = 1,
    Listening = 2,
    Watching = 3,
    Custom = 4,
    Competing = 5
}
export declare enum ActivityFlags {
    Instance = 1,
    Join = 2,
    Spectate = 4,
    JoinRequest = 8,
    Sync = 16,
    Play = 32,
    PartyPrivacyFriends = 64,
    PartyPrivacyVoiceChannel = 128,
    Embedded = 256
}
export declare enum VoiceOpcodes {
    Identity = 0,
    SelectPayload = 1,
    Ready = 2,
    Heartbeat = 3,
    SessionDescription = 4,
    Speaking = 5,
    HeartbeatACK = 6,
    Resume = 7,
    Hello = 8,
    Resumed = 9,
    ClientDisconnect = 13
}
export declare enum PermissionsBitField {
    CreateInstantInvite = 1,
    KickMembers = 2,
    BanMembers = 4,
    Administrator = 8,
    ManageChannels = 16,
    ManageGuild = 32,
    AddReactions = 64,
    ViewAuditLog = 128,
    PrioritySpeaker = 256,
    Stream = 512,
    ViewChannel = 1024,
    SendMessages = 2048,
    SendTTSMessages = 4096,
    ManageMessages = 8192,
    EmbedLinks = 16384,
    AttachFiles = 32768,
    ReadMessageHistory = 65536,
    MentionEveryone = 131072,
    UseExternalEmojis = 262144,
    ViewGuildInsights = 524288,
    Connect = 1048576,
    Speak = 2097152,
    MuteMembers = 4194304,
    DeafenMembers = 8388608,
    MoveMembers = 16777216,
    UseVAD = 33554432,
    ChangeNickname = 67108864,
    ManageNicknames = 134217728,
    ManageRoles = 268435456,
    ManageWebhooks = 536870912,
    ManageEmojisAndStickers = 1073741824,
    UseApplicationCommands = -2147483648,
    RequestToSpeak = 1,
    ManageEvents = 2,
    ManageThreads = 4,
    CreatePublicThreads = 8,
    CreatePrivateThreads = 16,
    UseExternalStickers = 32,
    SendMessagesInThreads = 64,
    UseEmbeddedActivities = 128,
    ModerateMembers = 256
}
export declare enum InputVoiceType {
    VoiceActivity = 0,
    PushToTalk = 1
}
