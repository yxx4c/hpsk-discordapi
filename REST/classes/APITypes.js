"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputVoiceType = exports.PermissionsBitField = exports.VoiceOpcodes = exports.ActivityFlags = exports.ActivityTypes = exports.WebhookTypes = exports.UserVisibilityTypes = exports.PremiumTypes = exports.UserFlags = exports.StickerFormatTypes = exports.StickerTypes = exports.InviteTargetTypes = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityTypes = exports.GuildScheduledEventPrivacyLevel = exports.IntegrationExpireBehaviors = exports.SystemChannelFlags = exports.GuildPremiumTier = exports.GuildNSFWLevel = exports.VerificationLevel = exports.MFALevel = exports.ExplicitContentFilterLevel = exports.DefaultNotificationLevel = exports.MessageFlags = exports.MessageActivityTypes = exports.MessageTypes = exports.ChannelFlags = exports.VideoQualityTypes = exports.ChannelTypes = exports.ComponentTypes = exports.AppCommandOptionTypes = exports.InteractionTypes = exports.InteractionCallbackTypes = exports.ApplicationFlags = exports.AuditLogEvents = exports.ApplicationInteractionTypes = exports.AutoModerationActionTypes = exports.AutoModerationEventTypes = exports.AutoModerationKeywordPresetTypes = exports.AutoModerationTriggerTypes = exports.ButtonStyle = void 0;
var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle[ButtonStyle["Primary"] = 1] = "Primary";
    ButtonStyle[ButtonStyle["Secondary"] = 2] = "Secondary";
    ButtonStyle[ButtonStyle["Success"] = 3] = "Success";
    ButtonStyle[ButtonStyle["Danger"] = 4] = "Danger";
    ButtonStyle[ButtonStyle["Link"] = 5] = "Link";
})(ButtonStyle = exports.ButtonStyle || (exports.ButtonStyle = {}));
var AutoModerationTriggerTypes;
(function (AutoModerationTriggerTypes) {
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["Keyword"] = 1] = "Keyword";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["HarmfulLink"] = 2] = "HarmfulLink";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["Spam"] = 3] = "Spam";
    AutoModerationTriggerTypes[AutoModerationTriggerTypes["KeywordPreset"] = 4] = "KeywordPreset";
})(AutoModerationTriggerTypes = exports.AutoModerationTriggerTypes || (exports.AutoModerationTriggerTypes = {}));
var AutoModerationKeywordPresetTypes;
(function (AutoModerationKeywordPresetTypes) {
    AutoModerationKeywordPresetTypes[AutoModerationKeywordPresetTypes["Profanity"] = 1] = "Profanity";
    AutoModerationKeywordPresetTypes[AutoModerationKeywordPresetTypes["SexualContent"] = 2] = "SexualContent";
    AutoModerationKeywordPresetTypes[AutoModerationKeywordPresetTypes["Slurs"] = 3] = "Slurs";
})(AutoModerationKeywordPresetTypes = exports.AutoModerationKeywordPresetTypes || (exports.AutoModerationKeywordPresetTypes = {}));
var AutoModerationEventTypes;
(function (AutoModerationEventTypes) {
    AutoModerationEventTypes[AutoModerationEventTypes["MessageSend"] = 1] = "MessageSend";
})(AutoModerationEventTypes = exports.AutoModerationEventTypes || (exports.AutoModerationEventTypes = {}));
var AutoModerationActionTypes;
(function (AutoModerationActionTypes) {
    AutoModerationActionTypes[AutoModerationActionTypes["BlockMessage"] = 1] = "BlockMessage";
    AutoModerationActionTypes[AutoModerationActionTypes["SendAlertMessage"] = 2] = "SendAlertMessage";
    AutoModerationActionTypes[AutoModerationActionTypes["Timeout"] = 3] = "Timeout";
})(AutoModerationActionTypes = exports.AutoModerationActionTypes || (exports.AutoModerationActionTypes = {}));
var ApplicationInteractionTypes;
(function (ApplicationInteractionTypes) {
    ApplicationInteractionTypes[ApplicationInteractionTypes["ChatInput"] = 1] = "ChatInput";
    ApplicationInteractionTypes[ApplicationInteractionTypes["User"] = 2] = "User";
    ApplicationInteractionTypes[ApplicationInteractionTypes["Message"] = 3] = "Message";
})(ApplicationInteractionTypes = exports.ApplicationInteractionTypes || (exports.ApplicationInteractionTypes = {}));
var AuditLogEvents;
(function (AuditLogEvents) {
    AuditLogEvents[AuditLogEvents["GuildUpdate"] = 1] = "GuildUpdate";
    AuditLogEvents[AuditLogEvents["ChannelCreate"] = 10] = "ChannelCreate";
    AuditLogEvents[AuditLogEvents["ChannelUpdate"] = 11] = "ChannelUpdate";
    AuditLogEvents[AuditLogEvents["ChannelDelete"] = 12] = "ChannelDelete";
    AuditLogEvents[AuditLogEvents["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
    AuditLogEvents[AuditLogEvents["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
    AuditLogEvents[AuditLogEvents["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
    AuditLogEvents[AuditLogEvents["MemberKick"] = 20] = "MemberKick";
    AuditLogEvents[AuditLogEvents["MemberPrune"] = 21] = "MemberPrune";
    AuditLogEvents[AuditLogEvents["MemberBanAdd"] = 22] = "MemberBanAdd";
    AuditLogEvents[AuditLogEvents["MemberBanRemove"] = 23] = "MemberBanRemove";
    AuditLogEvents[AuditLogEvents["MemberUpdate"] = 24] = "MemberUpdate";
    AuditLogEvents[AuditLogEvents["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
    AuditLogEvents[AuditLogEvents["MemberMove"] = 26] = "MemberMove";
    AuditLogEvents[AuditLogEvents["MemberDisconnect"] = 27] = "MemberDisconnect";
    AuditLogEvents[AuditLogEvents["BotAdd"] = 28] = "BotAdd";
    AuditLogEvents[AuditLogEvents["RoleCreate"] = 30] = "RoleCreate";
    AuditLogEvents[AuditLogEvents["RoleUpdate"] = 31] = "RoleUpdate";
    AuditLogEvents[AuditLogEvents["RoleDelete"] = 32] = "RoleDelete";
    AuditLogEvents[AuditLogEvents["InviteCreate"] = 40] = "InviteCreate";
    AuditLogEvents[AuditLogEvents["InviteUpdate"] = 41] = "InviteUpdate";
    AuditLogEvents[AuditLogEvents["InviteDelete"] = 42] = "InviteDelete";
    AuditLogEvents[AuditLogEvents["WebhookCreate"] = 50] = "WebhookCreate";
    AuditLogEvents[AuditLogEvents["WebhookUpdate"] = 51] = "WebhookUpdate";
    AuditLogEvents[AuditLogEvents["WebhookDelete"] = 52] = "WebhookDelete";
    AuditLogEvents[AuditLogEvents["EmojiCreate"] = 60] = "EmojiCreate";
    AuditLogEvents[AuditLogEvents["EmojiUpdate"] = 61] = "EmojiUpdate";
    AuditLogEvents[AuditLogEvents["EmojiDelete"] = 62] = "EmojiDelete";
    AuditLogEvents[AuditLogEvents["MessageDelete"] = 72] = "MessageDelete";
    AuditLogEvents[AuditLogEvents["MessageBulkDelete"] = 73] = "MessageBulkDelete";
    AuditLogEvents[AuditLogEvents["MessagePin"] = 74] = "MessagePin";
    AuditLogEvents[AuditLogEvents["MessageUnpin"] = 75] = "MessageUnpin";
    AuditLogEvents[AuditLogEvents["InteractionCreate"] = 80] = "InteractionCreate";
    AuditLogEvents[AuditLogEvents["InteractionUpdate"] = 81] = "InteractionUpdate";
    AuditLogEvents[AuditLogEvents["InteractionDelete"] = 82] = "InteractionDelete";
    AuditLogEvents[AuditLogEvents["StageInstanceCreate"] = 83] = "StageInstanceCreate";
    AuditLogEvents[AuditLogEvents["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
    AuditLogEvents[AuditLogEvents["StageInstanceDelete"] = 85] = "StageInstanceDelete";
    AuditLogEvents[AuditLogEvents["StickerCreate"] = 90] = "StickerCreate";
    AuditLogEvents[AuditLogEvents["StickerUpdate"] = 91] = "StickerUpdate";
    AuditLogEvents[AuditLogEvents["StickerDelete"] = 92] = "StickerDelete";
    AuditLogEvents[AuditLogEvents["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
    AuditLogEvents[AuditLogEvents["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
    AuditLogEvents[AuditLogEvents["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
    AuditLogEvents[AuditLogEvents["ThreadCreate"] = 110] = "ThreadCreate";
    AuditLogEvents[AuditLogEvents["ThreadUpdate"] = 111] = "ThreadUpdate";
    AuditLogEvents[AuditLogEvents["ThreadDelete"] = 112] = "ThreadDelete";
    AuditLogEvents[AuditLogEvents["ApplicationCommandPermissionsUpdate"] = 120] = "ApplicationCommandPermissionsUpdate";
    AuditLogEvents[AuditLogEvents["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
    AuditLogEvents[AuditLogEvents["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
    AuditLogEvents[AuditLogEvents["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
    AuditLogEvents[AuditLogEvents["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
})(AuditLogEvents = exports.AuditLogEvents || (exports.AuditLogEvents = {}));
var ApplicationFlags;
(function (ApplicationFlags) {
    ApplicationFlags[ApplicationFlags["GatewayPresence"] = 4096] = "GatewayPresence";
    ApplicationFlags[ApplicationFlags["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
    ApplicationFlags[ApplicationFlags["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
    ApplicationFlags[ApplicationFlags["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
    ApplicationFlags[ApplicationFlags["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
    ApplicationFlags[ApplicationFlags["Embedded"] = 131072] = "Embedded";
    ApplicationFlags[ApplicationFlags["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
    ApplicationFlags[ApplicationFlags["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
})(ApplicationFlags = exports.ApplicationFlags || (exports.ApplicationFlags = {}));
var InteractionCallbackTypes;
(function (InteractionCallbackTypes) {
    InteractionCallbackTypes[InteractionCallbackTypes["Pong"] = 1] = "Pong";
    InteractionCallbackTypes[InteractionCallbackTypes["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
    InteractionCallbackTypes[InteractionCallbackTypes["DefferedChannelMessageWithSource"] = 5] = "DefferedChannelMessageWithSource";
    InteractionCallbackTypes[InteractionCallbackTypes["DefferedUpdateMessage"] = 6] = "DefferedUpdateMessage";
    InteractionCallbackTypes[InteractionCallbackTypes["UpdateMessage"] = 7] = "UpdateMessage";
    InteractionCallbackTypes[InteractionCallbackTypes["ApplicationCommandAutoCompleteResult"] = 8] = "ApplicationCommandAutoCompleteResult";
    InteractionCallbackTypes[InteractionCallbackTypes["Modal"] = 9] = "Modal";
})(InteractionCallbackTypes = exports.InteractionCallbackTypes || (exports.InteractionCallbackTypes = {}));
var InteractionTypes;
(function (InteractionTypes) {
    InteractionTypes[InteractionTypes["Ping"] = 1] = "Ping";
    InteractionTypes[InteractionTypes["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionTypes[InteractionTypes["MessageComponent"] = 3] = "MessageComponent";
    InteractionTypes[InteractionTypes["ApplicationCommandAutoComplete"] = 4] = "ApplicationCommandAutoComplete";
    InteractionTypes[InteractionTypes["ModalSubmit"] = 5] = "ModalSubmit";
})(InteractionTypes = exports.InteractionTypes || (exports.InteractionTypes = {}));
var AppCommandOptionTypes;
(function (AppCommandOptionTypes) {
    AppCommandOptionTypes[AppCommandOptionTypes["SubCommand"] = 1] = "SubCommand";
    AppCommandOptionTypes[AppCommandOptionTypes["SubCommandGroup"] = 2] = "SubCommandGroup";
    AppCommandOptionTypes[AppCommandOptionTypes["String"] = 3] = "String";
    AppCommandOptionTypes[AppCommandOptionTypes["Integer"] = 4] = "Integer";
    AppCommandOptionTypes[AppCommandOptionTypes["Boolean"] = 5] = "Boolean";
    AppCommandOptionTypes[AppCommandOptionTypes["User"] = 6] = "User";
    AppCommandOptionTypes[AppCommandOptionTypes["Channel"] = 7] = "Channel";
    AppCommandOptionTypes[AppCommandOptionTypes["Role"] = 8] = "Role";
    AppCommandOptionTypes[AppCommandOptionTypes["Mentionable"] = 9] = "Mentionable";
    AppCommandOptionTypes[AppCommandOptionTypes["Number"] = 10] = "Number";
    AppCommandOptionTypes[AppCommandOptionTypes["Attachment"] = 11] = "Attachment";
})(AppCommandOptionTypes = exports.AppCommandOptionTypes || (exports.AppCommandOptionTypes = {}));
var ComponentTypes;
(function (ComponentTypes) {
    ComponentTypes[ComponentTypes["ActionRow"] = 1] = "ActionRow";
    ComponentTypes[ComponentTypes["Button"] = 2] = "Button";
    ComponentTypes[ComponentTypes["SelectMenu"] = 3] = "SelectMenu";
    ComponentTypes[ComponentTypes["TextInput"] = 4] = "TextInput";
})(ComponentTypes = exports.ComponentTypes || (exports.ComponentTypes = {}));
var ChannelTypes;
(function (ChannelTypes) {
    ChannelTypes[ChannelTypes["GuildText"] = 0] = "GuildText";
    ChannelTypes[ChannelTypes["DM"] = 1] = "DM";
    ChannelTypes[ChannelTypes["GuildVoice"] = 2] = "GuildVoice";
    ChannelTypes[ChannelTypes["GroupDM"] = 3] = "GroupDM";
    ChannelTypes[ChannelTypes["GuildCategory"] = 4] = "GuildCategory";
    ChannelTypes[ChannelTypes["GuildNews"] = 5] = "GuildNews";
    ChannelTypes[ChannelTypes["GuildNewsThread"] = 10] = "GuildNewsThread";
    ChannelTypes[ChannelTypes["GuildPublicThread"] = 11] = "GuildPublicThread";
    ChannelTypes[ChannelTypes["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    ChannelTypes[ChannelTypes["GuildStageVoice"] = 13] = "GuildStageVoice";
    ChannelTypes[ChannelTypes["GuildDirectory"] = 14] = "GuildDirectory";
    ChannelTypes[ChannelTypes["GuildForum"] = 15] = "GuildForum";
})(ChannelTypes = exports.ChannelTypes || (exports.ChannelTypes = {}));
var VideoQualityTypes;
(function (VideoQualityTypes) {
    VideoQualityTypes[VideoQualityTypes["Auto"] = 1] = "Auto";
    VideoQualityTypes[VideoQualityTypes["Full"] = 2] = "Full";
})(VideoQualityTypes = exports.VideoQualityTypes || (exports.VideoQualityTypes = {}));
var ChannelFlags;
(function (ChannelFlags) {
    ChannelFlags[ChannelFlags["Pinned"] = 2] = "Pinned";
})(ChannelFlags = exports.ChannelFlags || (exports.ChannelFlags = {}));
var MessageTypes;
(function (MessageTypes) {
    MessageTypes[MessageTypes["Default"] = 0] = "Default";
    MessageTypes[MessageTypes["RecipientAdd"] = 1] = "RecipientAdd";
    MessageTypes[MessageTypes["RecipientRemove"] = 2] = "RecipientRemove";
    MessageTypes[MessageTypes["Call"] = 3] = "Call";
    MessageTypes[MessageTypes["ChannelNameChange"] = 4] = "ChannelNameChange";
    MessageTypes[MessageTypes["ChannelIconChange"] = 5] = "ChannelIconChange";
    MessageTypes[MessageTypes["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
    MessageTypes[MessageTypes["UserJoin"] = 7] = "UserJoin";
    MessageTypes[MessageTypes["GuildBoost"] = 8] = "GuildBoost";
    MessageTypes[MessageTypes["GuildBoostTier1"] = 9] = "GuildBoostTier1";
    MessageTypes[MessageTypes["GuildBoostTier2"] = 10] = "GuildBoostTier2";
    MessageTypes[MessageTypes["GuildBoostTier3"] = 11] = "GuildBoostTier3";
    MessageTypes[MessageTypes["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
    MessageTypes[MessageTypes["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
    MessageTypes[MessageTypes["GuildDIscoveryRequalified"] = 15] = "GuildDIscoveryRequalified";
    MessageTypes[MessageTypes["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
    MessageTypes[MessageTypes["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
    MessageTypes[MessageTypes["ThreadCreated"] = 18] = "ThreadCreated";
    MessageTypes[MessageTypes["Reply"] = 19] = "Reply";
    MessageTypes[MessageTypes["ChatInputCommand"] = 20] = "ChatInputCommand";
    MessageTypes[MessageTypes["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
    MessageTypes[MessageTypes["GuildInviteReminder"] = 22] = "GuildInviteReminder";
    MessageTypes[MessageTypes["ContextMenuCommand"] = 23] = "ContextMenuCommand";
    MessageTypes[MessageTypes["AutoModerationAction"] = 24] = "AutoModerationAction";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
var MessageActivityTypes;
(function (MessageActivityTypes) {
    MessageActivityTypes[MessageActivityTypes["Join"] = 1] = "Join";
    MessageActivityTypes[MessageActivityTypes["Spectate"] = 2] = "Spectate";
    MessageActivityTypes[MessageActivityTypes["Listen"] = 3] = "Listen";
    MessageActivityTypes[MessageActivityTypes["JoinRequest"] = 4] = "JoinRequest";
})(MessageActivityTypes = exports.MessageActivityTypes || (exports.MessageActivityTypes = {}));
var MessageFlags;
(function (MessageFlags) {
    MessageFlags[MessageFlags["Crossposted"] = 1] = "Crossposted";
    MessageFlags[MessageFlags["IsCrossposted"] = 2] = "IsCrossposted";
    MessageFlags[MessageFlags["SuppressEmbeds"] = 4] = "SuppressEmbeds";
    MessageFlags[MessageFlags["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
    MessageFlags[MessageFlags["Urgent"] = 16] = "Urgent";
    MessageFlags[MessageFlags["HasThread"] = 32] = "HasThread";
    MessageFlags[MessageFlags["Ephemeral"] = 64] = "Ephemeral";
    MessageFlags[MessageFlags["Loading"] = 128] = "Loading";
    MessageFlags[MessageFlags["FailedToMentionSoleRolesInThread"] = 256] = "FailedToMentionSoleRolesInThread";
})(MessageFlags = exports.MessageFlags || (exports.MessageFlags = {}));
var DefaultNotificationLevel;
(function (DefaultNotificationLevel) {
    DefaultNotificationLevel[DefaultNotificationLevel["AllMessages"] = 0] = "AllMessages";
    DefaultNotificationLevel[DefaultNotificationLevel["OnlyMentions"] = 1] = "OnlyMentions";
})(DefaultNotificationLevel = exports.DefaultNotificationLevel || (exports.DefaultNotificationLevel = {}));
var ExplicitContentFilterLevel;
(function (ExplicitContentFilterLevel) {
    ExplicitContentFilterLevel[ExplicitContentFilterLevel["Disabled"] = 0] = "Disabled";
    ExplicitContentFilterLevel[ExplicitContentFilterLevel["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
    ExplicitContentFilterLevel[ExplicitContentFilterLevel["AllMembers"] = 2] = "AllMembers";
})(ExplicitContentFilterLevel = exports.ExplicitContentFilterLevel || (exports.ExplicitContentFilterLevel = {}));
var MFALevel;
(function (MFALevel) {
    MFALevel[MFALevel["None"] = 0] = "None";
    MFALevel[MFALevel["Elevated"] = 1] = "Elevated";
})(MFALevel = exports.MFALevel || (exports.MFALevel = {}));
var VerificationLevel;
(function (VerificationLevel) {
    /**
     * Unrestricted
     */
    VerificationLevel[VerificationLevel["None"] = 0] = "None";
    /**
     * Must have a verified email on the account
     */
    VerificationLevel[VerificationLevel["Low"] = 1] = "Low";
    /**
     * Must be registered on discord for longer than 5 minutes
     */
    VerificationLevel[VerificationLevel["Medium"] = 2] = "Medium";
    /**
     * Must be a member of the server for longer than 10 minutes
     */
    VerificationLevel[VerificationLevel["High"] = 3] = "High";
    /**
     * Must have a verified phone number
     */
    VerificationLevel[VerificationLevel["VeryHigh"] = 4] = "VeryHigh";
})(VerificationLevel = exports.VerificationLevel || (exports.VerificationLevel = {}));
var GuildNSFWLevel;
(function (GuildNSFWLevel) {
    GuildNSFWLevel[GuildNSFWLevel["Default"] = 0] = "Default";
    GuildNSFWLevel[GuildNSFWLevel["Explicit"] = 1] = "Explicit";
    GuildNSFWLevel[GuildNSFWLevel["Safe"] = 2] = "Safe";
    GuildNSFWLevel[GuildNSFWLevel["AgeRestricted"] = 3] = "AgeRestricted";
})(GuildNSFWLevel = exports.GuildNSFWLevel || (exports.GuildNSFWLevel = {}));
var GuildPremiumTier;
(function (GuildPremiumTier) {
    /**
     * Guild has not unlocked any Server Boost perks
     */
    GuildPremiumTier[GuildPremiumTier["None"] = 0] = "None";
    /**
     * guild has unlocked Server Boost level 1 perks
     */
    GuildPremiumTier[GuildPremiumTier["Tier1"] = 1] = "Tier1";
    /**
     * guild has unlocked Server Boost level 2 perks
     */
    GuildPremiumTier[GuildPremiumTier["Tier2"] = 2] = "Tier2";
    /**
     * guild has unlocked Server Boost level 3 perks
     */
    GuildPremiumTier[GuildPremiumTier["Tier3"] = 3] = "Tier3";
})(GuildPremiumTier = exports.GuildPremiumTier || (exports.GuildPremiumTier = {}));
var SystemChannelFlags;
(function (SystemChannelFlags) {
    /**
     * Suppress member join notifications
     */
    SystemChannelFlags[SystemChannelFlags["SuppressJoinMentions"] = 0] = "SuppressJoinMentions";
    /**
     * Suppress server boost notifications
     */
    SystemChannelFlags[SystemChannelFlags["SuppressPremiumSubscriptions"] = 1] = "SuppressPremiumSubscriptions";
    /**
     * Suppress server setup tips
     */
    SystemChannelFlags[SystemChannelFlags["SuppressGuildReminderNotifications"] = 2] = "SuppressGuildReminderNotifications";
    /**
     * Hide member join sticker reply buttons
     */
    SystemChannelFlags[SystemChannelFlags["SuppressJoinNotificationReplies"] = 3] = "SuppressJoinNotificationReplies";
})(SystemChannelFlags = exports.SystemChannelFlags || (exports.SystemChannelFlags = {}));
var IntegrationExpireBehaviors;
(function (IntegrationExpireBehaviors) {
    IntegrationExpireBehaviors[IntegrationExpireBehaviors["RemoveRole"] = 0] = "RemoveRole";
    IntegrationExpireBehaviors[IntegrationExpireBehaviors["Kick"] = 1] = "Kick";
})(IntegrationExpireBehaviors = exports.IntegrationExpireBehaviors || (exports.IntegrationExpireBehaviors = {}));
var GuildScheduledEventPrivacyLevel;
(function (GuildScheduledEventPrivacyLevel) {
    GuildScheduledEventPrivacyLevel[GuildScheduledEventPrivacyLevel["GuildOnly"] = 2] = "GuildOnly";
})(GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventPrivacyLevel || (exports.GuildScheduledEventPrivacyLevel = {}));
var GuildScheduledEventEntityTypes;
(function (GuildScheduledEventEntityTypes) {
    GuildScheduledEventEntityTypes[GuildScheduledEventEntityTypes["StageInstance"] = 1] = "StageInstance";
    GuildScheduledEventEntityTypes[GuildScheduledEventEntityTypes["Voice"] = 2] = "Voice";
    GuildScheduledEventEntityTypes[GuildScheduledEventEntityTypes["External"] = 3] = "External";
})(GuildScheduledEventEntityTypes = exports.GuildScheduledEventEntityTypes || (exports.GuildScheduledEventEntityTypes = {}));
var GuildScheduledEventStatus;
(function (GuildScheduledEventStatus) {
    GuildScheduledEventStatus[GuildScheduledEventStatus["Scheduled"] = 1] = "Scheduled";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Active"] = 2] = "Active";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Completed"] = 3] = "Completed";
    GuildScheduledEventStatus[GuildScheduledEventStatus["Cancelled"] = 4] = "Cancelled";
})(GuildScheduledEventStatus = exports.GuildScheduledEventStatus || (exports.GuildScheduledEventStatus = {}));
var InviteTargetTypes;
(function (InviteTargetTypes) {
    InviteTargetTypes[InviteTargetTypes["Stream"] = 1] = "Stream";
    InviteTargetTypes[InviteTargetTypes["EmbeddedApplication"] = 2] = "EmbeddedApplication";
})(InviteTargetTypes = exports.InviteTargetTypes || (exports.InviteTargetTypes = {}));
var StickerTypes;
(function (StickerTypes) {
    StickerTypes[StickerTypes["Standard"] = 1] = "Standard";
    StickerTypes[StickerTypes["Guild"] = 2] = "Guild";
})(StickerTypes = exports.StickerTypes || (exports.StickerTypes = {}));
var StickerFormatTypes;
(function (StickerFormatTypes) {
    StickerFormatTypes[StickerFormatTypes["PNG"] = 1] = "PNG";
    StickerFormatTypes[StickerFormatTypes["APNG"] = 2] = "APNG";
    StickerFormatTypes[StickerFormatTypes["LOTTIE"] = 3] = "LOTTIE";
})(StickerFormatTypes = exports.StickerFormatTypes || (exports.StickerFormatTypes = {}));
var UserFlags;
(function (UserFlags) {
    UserFlags[UserFlags["Staff"] = 1] = "Staff";
    UserFlags[UserFlags["Partner"] = 2] = "Partner";
    UserFlags[UserFlags["HypeSquad"] = 4] = "HypeSquad";
    UserFlags[UserFlags["BugHunterLevel1"] = 8] = "BugHunterLevel1";
    UserFlags[UserFlags["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
    UserFlags[UserFlags["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
    UserFlags[UserFlags["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
    UserFlags[UserFlags["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
    UserFlags[UserFlags["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
    UserFlags[UserFlags["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
    UserFlags[UserFlags["VerifiedBot"] = 65536] = "VerifiedBot";
    UserFlags[UserFlags["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
    UserFlags[UserFlags["CertifiedModerator"] = 262144] = "CertifiedModerator";
    UserFlags[UserFlags["BotHttpInteractions"] = 524288] = "BotHttpInteractions";
})(UserFlags = exports.UserFlags || (exports.UserFlags = {}));
var PremiumTypes;
(function (PremiumTypes) {
    PremiumTypes[PremiumTypes["None"] = 0] = "None";
    PremiumTypes[PremiumTypes["NitroClassic"] = 1] = "NitroClassic";
    PremiumTypes[PremiumTypes["Nitro"] = 2] = "Nitro";
})(PremiumTypes = exports.PremiumTypes || (exports.PremiumTypes = {}));
var UserVisibilityTypes;
(function (UserVisibilityTypes) {
    UserVisibilityTypes[UserVisibilityTypes["None"] = 0] = "None";
    UserVisibilityTypes[UserVisibilityTypes["Everyone"] = 1] = "Everyone";
})(UserVisibilityTypes = exports.UserVisibilityTypes || (exports.UserVisibilityTypes = {}));
var WebhookTypes;
(function (WebhookTypes) {
    WebhookTypes[WebhookTypes["Incoming"] = 1] = "Incoming";
    WebhookTypes[WebhookTypes["ChannelFollower"] = 2] = "ChannelFollower";
    WebhookTypes[WebhookTypes["Application"] = 3] = "Application";
})(WebhookTypes = exports.WebhookTypes || (exports.WebhookTypes = {}));
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes[ActivityTypes["Game"] = 0] = "Game";
    ActivityTypes[ActivityTypes["Streaming"] = 1] = "Streaming";
    ActivityTypes[ActivityTypes["Listening"] = 2] = "Listening";
    ActivityTypes[ActivityTypes["Watching"] = 3] = "Watching";
    ActivityTypes[ActivityTypes["Custom"] = 4] = "Custom";
    ActivityTypes[ActivityTypes["Competing"] = 5] = "Competing";
})(ActivityTypes = exports.ActivityTypes || (exports.ActivityTypes = {}));
var ActivityFlags;
(function (ActivityFlags) {
    ActivityFlags[ActivityFlags["Instance"] = 1] = "Instance";
    ActivityFlags[ActivityFlags["Join"] = 2] = "Join";
    ActivityFlags[ActivityFlags["Spectate"] = 4] = "Spectate";
    ActivityFlags[ActivityFlags["JoinRequest"] = 8] = "JoinRequest";
    ActivityFlags[ActivityFlags["Sync"] = 16] = "Sync";
    ActivityFlags[ActivityFlags["Play"] = 32] = "Play";
    ActivityFlags[ActivityFlags["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
    ActivityFlags[ActivityFlags["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
    ActivityFlags[ActivityFlags["Embedded"] = 256] = "Embedded";
})(ActivityFlags = exports.ActivityFlags || (exports.ActivityFlags = {}));
var VoiceOpcodes;
(function (VoiceOpcodes) {
    VoiceOpcodes[VoiceOpcodes["Identity"] = 0] = "Identity";
    VoiceOpcodes[VoiceOpcodes["SelectPayload"] = 1] = "SelectPayload";
    VoiceOpcodes[VoiceOpcodes["Ready"] = 2] = "Ready";
    VoiceOpcodes[VoiceOpcodes["Heartbeat"] = 3] = "Heartbeat";
    VoiceOpcodes[VoiceOpcodes["SessionDescription"] = 4] = "SessionDescription";
    VoiceOpcodes[VoiceOpcodes["Speaking"] = 5] = "Speaking";
    VoiceOpcodes[VoiceOpcodes["HeartbeatACK"] = 6] = "HeartbeatACK";
    VoiceOpcodes[VoiceOpcodes["Resume"] = 7] = "Resume";
    VoiceOpcodes[VoiceOpcodes["Hello"] = 8] = "Hello";
    VoiceOpcodes[VoiceOpcodes["Resumed"] = 9] = "Resumed";
    VoiceOpcodes[VoiceOpcodes["ClientDisconnect"] = 13] = "ClientDisconnect";
})(VoiceOpcodes = exports.VoiceOpcodes || (exports.VoiceOpcodes = {}));
var PermissionsBitField;
(function (PermissionsBitField) {
    PermissionsBitField[PermissionsBitField["CreateInstantInvite"] = 1] = "CreateInstantInvite";
    PermissionsBitField[PermissionsBitField["KickMembers"] = 2] = "KickMembers";
    PermissionsBitField[PermissionsBitField["BanMembers"] = 4] = "BanMembers";
    PermissionsBitField[PermissionsBitField["Administrator"] = 8] = "Administrator";
    PermissionsBitField[PermissionsBitField["ManageChannels"] = 16] = "ManageChannels";
    PermissionsBitField[PermissionsBitField["ManageGuild"] = 32] = "ManageGuild";
    PermissionsBitField[PermissionsBitField["AddReactions"] = 64] = "AddReactions";
    PermissionsBitField[PermissionsBitField["ViewAuditLog"] = 128] = "ViewAuditLog";
    PermissionsBitField[PermissionsBitField["PrioritySpeaker"] = 256] = "PrioritySpeaker";
    PermissionsBitField[PermissionsBitField["Stream"] = 512] = "Stream";
    PermissionsBitField[PermissionsBitField["ViewChannel"] = 1024] = "ViewChannel";
    PermissionsBitField[PermissionsBitField["SendMessages"] = 2048] = "SendMessages";
    PermissionsBitField[PermissionsBitField["SendTTSMessages"] = 4096] = "SendTTSMessages";
    PermissionsBitField[PermissionsBitField["ManageMessages"] = 8192] = "ManageMessages";
    PermissionsBitField[PermissionsBitField["EmbedLinks"] = 16384] = "EmbedLinks";
    PermissionsBitField[PermissionsBitField["AttachFiles"] = 32768] = "AttachFiles";
    PermissionsBitField[PermissionsBitField["ReadMessageHistory"] = 65536] = "ReadMessageHistory";
    PermissionsBitField[PermissionsBitField["MentionEveryone"] = 131072] = "MentionEveryone";
    PermissionsBitField[PermissionsBitField["UseExternalEmojis"] = 262144] = "UseExternalEmojis";
    PermissionsBitField[PermissionsBitField["ViewGuildInsights"] = 524288] = "ViewGuildInsights";
    PermissionsBitField[PermissionsBitField["Connect"] = 1048576] = "Connect";
    PermissionsBitField[PermissionsBitField["Speak"] = 2097152] = "Speak";
    PermissionsBitField[PermissionsBitField["MuteMembers"] = 4194304] = "MuteMembers";
    PermissionsBitField[PermissionsBitField["DeafenMembers"] = 8388608] = "DeafenMembers";
    PermissionsBitField[PermissionsBitField["MoveMembers"] = 16777216] = "MoveMembers";
    PermissionsBitField[PermissionsBitField["UseVAD"] = 33554432] = "UseVAD";
    PermissionsBitField[PermissionsBitField["ChangeNickname"] = 67108864] = "ChangeNickname";
    PermissionsBitField[PermissionsBitField["ManageNicknames"] = 134217728] = "ManageNicknames";
    PermissionsBitField[PermissionsBitField["ManageRoles"] = 268435456] = "ManageRoles";
    PermissionsBitField[PermissionsBitField["ManageWebhooks"] = 536870912] = "ManageWebhooks";
    PermissionsBitField[PermissionsBitField["ManageEmojisAndStickers"] = 1073741824] = "ManageEmojisAndStickers";
    PermissionsBitField[PermissionsBitField["UseApplicationCommands"] = -2147483648] = "UseApplicationCommands";
    PermissionsBitField[PermissionsBitField["RequestToSpeak"] = 1] = "RequestToSpeak";
    PermissionsBitField[PermissionsBitField["ManageEvents"] = 2] = "ManageEvents";
    PermissionsBitField[PermissionsBitField["ManageThreads"] = 4] = "ManageThreads";
    PermissionsBitField[PermissionsBitField["CreatePublicThreads"] = 8] = "CreatePublicThreads";
    PermissionsBitField[PermissionsBitField["CreatePrivateThreads"] = 16] = "CreatePrivateThreads";
    PermissionsBitField[PermissionsBitField["UseExternalStickers"] = 32] = "UseExternalStickers";
    PermissionsBitField[PermissionsBitField["SendMessagesInThreads"] = 64] = "SendMessagesInThreads";
    PermissionsBitField[PermissionsBitField["UseEmbeddedActivities"] = 128] = "UseEmbeddedActivities";
    PermissionsBitField[PermissionsBitField["ModerateMembers"] = 256] = "ModerateMembers";
})(PermissionsBitField = exports.PermissionsBitField || (exports.PermissionsBitField = {}));
var InputVoiceType;
(function (InputVoiceType) {
    InputVoiceType[InputVoiceType["VoiceActivity"] = 0] = "VoiceActivity";
    InputVoiceType[InputVoiceType["PushToTalk"] = 1] = "PushToTalk";
})(InputVoiceType = exports.InputVoiceType || (exports.InputVoiceType = {}));
