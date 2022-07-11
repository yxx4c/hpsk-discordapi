export const Routes = {
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/audit-logs`
   */
  guildAuditLog(guildId: string) {
    return `/guilds/${guildId}/audit-logs`;
  },
  /**
   * Route for:
   * - GET    `/channels/{channel.id}`
   * - PATCH  `/channels/{channel.id}`
   * - DELETE `/channels/{channel.id}`
   */
  channel(channelId: string) {
    return `/channels/${channelId}`;
  },
  /**
   * Route for:
   * - GET  `/channels/{channel.id}/messages`
   * - POST `/channels/{channel.id}/messages`
   */
  channelMessages(channelId: string) {
    return `/channels/${channelId}/messages`;
  },
  /**
   * Route for:
   * - GET    `/channels/{channel.id}/messages/{message.id}`
   * - PATCH  `/channels/{channel.id}/messages/{message.id}`
   * - DELETE `/channels/{channel.id}/messages/{message.id}`
   */
  channelMessage(channelId: string, messageId: string) {
    return `/channels/${channelId}/messages/${messageId}`;
  },
  /**
   * Route for:
   * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
   */
  channelMessageCrosspost(channelId: string, messageId: string) {
    return `/channels/${channelId}/messages/${messageId}/crosspost`;
  },
  /**
   * Route for:
   * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
   * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
   *
   * **Note**: You need to URL encode the emoji yourself
   */
  channelMessageOwnReaction(channelId: string, messageId: string, emoji: string) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
  },
  /**
   * Route for:
   * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
   *
   * **Note**: You need to URL encode the emoji yourself
   */
  channelMessageUserReaction(channelId: string, messageId: string, emoji: string, userId: string) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
  },
  /**
   * Route for:
   * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
   * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
   *
   * **Note**: You need to URL encode the emoji yourself
   */
  channelMessageReaction(channelId: string, messageId: string, emoji: string) {
    return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
  },
  /**
   * Route for:
   * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
   */
  channelMessageAllReactions(channelId: string, messageId: string) {
    return `/channels/${channelId}/messages/${messageId}/reactions`;
  },
  /**
   * Route for:
   * - POST `/channels/{channel.id}/messages/bulk-delete`
   */
  channelBulkDelete(channelId: string) {
    return `/channels/${channelId}/messages/bulk-delete`;
  },
  /**
   * Route for:
   * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
   * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
   */
  channelPermission(channelId: string, overwriteId: string) {
    return `/channels/${channelId}/permissions/${overwriteId}`;
  },
  /**
   * Route for:
   * - GET  `/channels/{channel.id}/invites`
   * - POST `/channels/{channel.id}/invites`
   */
  channelInvites(channelId: string) {
    return `/channels/${channelId}/invites`;
  },
  /**
   * Route for:
   * - POST `/channels/{channel.id}/followers`
   */
  channelFollowers(channelId: string) {
    return `/channels/${channelId}/followers`;
  },
  /**
   * Route for:
   * - POST `/channels/{channel.id}/typing`
   */
  channelTyping(channelId: string) {
    return `/channels/${channelId}/typing`;
  },
  /**
   * Route for:
   * - GET `/channels/{channel.id}/pins`
   */
  channelPins(channelId: string) {
    return `/channels/${channelId}/pins`;
  },
  /**
   * Route for:
   * - PUT    `/channels/{channel.id}/pins/{message.id}`
   * - DELETE `/channels/{channel.id}/pins/{message.id}`
   */
  channelPin(channelId: string, messageId: string) {
    return `/channels/${channelId}/pins/${messageId}`;
  },
  /**
   * Route for:
   * - PUT    `/channels/{channel.id}/recipients/{user.id}`
   * - DELETE `/channels/{channel.id}/recipients/{user.id}`
   */
  channelRecipient(channelId: string, userId: string) {
    return `/channels/${channelId}/recipients/${userId}`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/emojis`
   * - POST `/guilds/{guild.id}/emojis`
   */
  guildEmojis(guildId: string) {
    return `/guilds/${guildId}/emojis`;
  },
  /**
   * Route for:
   * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
   * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
   * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
   */
  guildEmoji(guildId: string, emojiId: string) {
    return `/guilds/${guildId}/emojis/${emojiId}`;
  },
  /**
   * Route for:
   * - POST `/guilds`
   */
  guilds() {
    return '/guilds';
  },
  /**
   * Route for:
   * - GET    `/guilds/{guild.id}`
   * - PATCH  `/guilds/{guild.id}`
   * - DELETE `/guilds/{guild.id}`
   */
  guild(guildId: string) {
    return `/guilds/${guildId}`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/preview`
   */
  guildPreview(guildId: string) {
    return `/guilds/${guildId}/preview`;
  },
  /**
   * Route for:
   * - GET   `/guilds/{guild.id}/channels`
   * - POST  `/guilds/{guild.id}/channels`
   * - PATCH `/guilds/{guild.id}/channels`
   */
  guildChannels(guildId: string) {
    return `/guilds/${guildId}/channels`;
  },
  /**
   * Route for:
   * - GET    `/guilds/{guild.id}/members/{user.id}`
   * - PUT    `/guilds/{guild.id}/members/{user.id}`
   * - PATCH  `/guilds/{guild.id}/members/{user.id}`
   * - DELETE `/guilds/{guild.id}/members/{user.id}`
   */
  guildMember(guildId: string, userId: string) {
    return `/guilds/${guildId}/members/${userId}`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/members`
   */
  guildMembers(guildId: string) {
    return `/guilds/${guildId}/members`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/members/search`
   */
  guildMembersSearch(guildId: string) {
    return `/guilds/${guildId}/members/search`;
  },
  /**
   * Route for:
   * - PATCH `/guilds/{guild.id}/members/@me/nick`
   */
  guildCurrentMemberNickname(guildId: string) {
    return `/guilds/${guildId}/members/@me/nick`;
  },
  /**
   * Route for:
   * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
   * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
   */
  guildMemberRole(guildId: string, memberId: string, roleId: string) {
    return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/bans`
   */
  guildBans(guildId: string) {
    return `/guilds/${guildId}/bans`;
  },
  /**
   * Route for:
   * - GET    `/guilds/{guild.id}/bans/{user.id}`
   * - PUT    `/guilds/{guild.id}/bans/{user.id}`
   * - DELETE `/guilds/{guild.id}/bans/{user.id}`
   */
  guildBan(guildId: string, userId: string) {
    return `/guilds/${guildId}/bans/${userId}`;
  },
  /**
   * Route for:
   * - GET   `/guilds/{guild.id}/roles`
   * - POST  `/guilds/{guild.id}/roles`
   * - PATCH `/guilds/{guild.id}/roles`
   */
  guildRoles(guildId: string) {
    return `/guilds/${guildId}/roles`;
  },
  /**
   * Route for:
   * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
   * - DELETE `/guilds/{guild.id}/roles/{role.id}`
   */
  guildRole(guildId: string, roleId: string) {
    return `/guilds/${guildId}/roles/${roleId}`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/prune`
   * - POST `/guilds/{guild.id}/prune`
   */
  guildPrune(guildId: string) {
    return `/guilds/${guildId}/prune`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/regions`
   */
  guildVoiceRegions(guildId: string) {
    return `/guilds/${guildId}/regions`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/invites`
   */
  guildInvites(guildId: string) {
    return `/guilds/${guildId}/invites`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/integrations`
   */
  guildIntegrations(guildId: string) {
    return `/guilds/${guildId}/integrations`;
  },
  /**
   * Route for:
   * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
   */
  guildIntegration(guildId: string, integrationId: string) {
    return `/guilds/${guildId}/integrations/${integrationId}`;
  },
  /**
   * Route for:
   * - GET   `/guilds/{guild.id}/widget`
   * - PATCH `/guilds/{guild.id}/widget`
   */
  guildWidgetSettings(guildId: string) {
    return `/guilds/${guildId}/widget`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/widget.json`
   */
  guildWidgetJSON(guildId: string) {
    return `/guilds/${guildId}/widget.json`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/vanity-url`
   */
  guildVanityUrl(guildId: string) {
    return `/guilds/${guildId}/vanity-url`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/widget.png`
   */
  guildWidgetImage(guildId: string) {
    return `/guilds/${guildId}/widget.png`;
  },
  /**
   * Route for:
   * - GET    `/invites/{invite.code}`
   * - DELETE `/invites/{invite.code}`
   */
  invite(code: string) {
    return `/invites/${code}`;
  },
  /**
   * Route for:
   * - GET  `/guilds/templates/{template.code}`
   * - POST `/guilds/templates/{template.code}`
   */
  template(code: string) {
    return `/guilds/templates/${code}`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/templates`
   * - POST `/guilds/{guild.id}/templates`
   */
  guildTemplates(guildId: string) {
    return `/guilds/${guildId}/templates`;
  },
  /**
   * Route for:
   * - PUT    `/guilds/{guild.id}/templates/{template.code}`
   * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
   * - DELETE `/guilds/{guild.id}/templates/{template.code}`
   */
  guildTemplate(guildId: string, code: string) {
    return `/guilds/${guildId}/templates/${code}`;
  },
  /**
   * Route for:
   * - POST `/channels/{channel.id}/threads`
   * - POST `/channels/{channel.id}/messages/{message.id}/threads`
   */
  threads(parentId: string, messageId: string) {
    const parts = ['', 'channels', parentId];
    if (messageId) parts.push('messages', messageId);
    parts.push('threads');
    return parts.join('/');
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/threads/active`
   */
  guildActiveThreads(guildId: string) {
    return `/guilds/${guildId}/threads/active`;
  },
  /**
   * Route for:
   * - GET `/channels/{channel.id}/threads/active`
   * 	 (deprecated, use [List Active Guild Threads](https://discord.com/developers/docs/resources/guild#list-active-threads) instead.
   * 	 Will be removed in v10.)
   * - GET `/channels/{channel.id}/threads/archived/public`
   * - GET `/channels/{channel.id}/threads/archived/private`
   */
  channelThreads(channelId: string, archived: string) {
    const parts = ['', 'channels', channelId, 'threads'];
    if (archived) parts.push('archived', archived);
    else parts.push('active');
    return parts.join('/');
  },
  /**
   * Route for:
   * - GET `/channels/{channel.id}/users/@me/threads/archived/prviate`
   */
  channelJoinedArchivedThreads(channelId: string) {
    return `/channels/${channelId}/users/@me/threads/archived/private`;
  },
  /**
   * Route for:
   * - GET    `/channels/{thread.id}/thread-members`
   * - GET    `/channels/{thread.id}/thread-members/{user.id}`
   * - PUT    `/channels/{thread.id}/thread-members/@me`
   * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
   * - DELETE `/channels/{thread.id}/thread-members/@me`
   * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
   */
  threadMembers(threadId: string, userId: string) {
    const parts = ['', 'channels', threadId, 'thread-members'];
    if (userId) parts.push(userId);
    return parts.join('/');
  },
  /**
   * Route for:
   * - GET   `/users/@me`
   * - GET   `/users/{user.id}`
   * - PATCH `/users/@me`
   *
   * @param [userId='@me'] The user ID, defaulted to `@me`
   */
  user(userId = '@me') {
    return `/users/${userId}`;
  },
  /**
   * Route for:
   * - GET `/users/@me/guilds`
   */
  userGuilds() {
    return `/users/@me/guilds`;
  },
  /**
   * Route for:
   * - GET `/users/@me/guilds/{guild.id}/member`
   */
  userGuildMember(guildId: string) {
    return `/users/@me/guilds/${guildId}/member`;
  },
  /**
   * Route for:
   * - DELETE `/users/@me/guilds/{guild.id}`
   */
  userGuild(guildId: string) {
    return `/users/@me/guilds/${guildId}`;
  },
  /**
   * Route for:
   * - POST `/users/@me/channels`
   */
  userChannels() {
    return `/users/@me/channels`;
  },
  /**
   * Route for:
   * - GET `/users/@me/connections`
   */
  userConnections() {
    return `/users/@me/connections`;
  },
  /**
   * Route for:
   * - GET `/voice/regions`
   */
  voiceRegions() {
    return `/voice/regions`;
  },
  /**
   * Route for:
   * - GET  `/channels/{channel.id}/webhooks`
   * - POST `/channels/{channel.id}/webhooks`
   */
  channelWebhooks(channelId: string) {
    return `/channels/${channelId}/webhooks`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/webhooks`
   */
  guildWebhooks(guildId: string) {
    return `/guilds/${guildId}/webhooks`;
  },
  /**
   * Route for:
   * - GET    `/webhooks/{webhook.id}`
   * - GET    `/webhooks/{webhook.id}/{webhook.token}`
   * - PATCH  `/webhooks/{webhook.id}`
   * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
   * - DELETE `/webhooks/{webhook.id}`
   * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
   * - POST   `/webhooks/{webhook.id}/{webhook.token}`
   *
   * - POST   `/webhooks/{application.id}/{interaction.token}`
   */
  webhook(webhookId: string, webhookToken: string) {
    const parts = ['', 'webhooks', webhookId];
    if (webhookToken) parts.push(webhookToken);
    return parts.join('/');
  },
  /**
   * Route for:
   * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
   * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
   * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
   * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
   * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
   * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
   *
   * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
   * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
   * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
   *
   * @param [messageId='@original'] The message ID to change, defaulted to `@original`
   */
  webhookMessage(webhookId: string, webhookToken: string, messageId = '@original') {
    return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
  },
  /**
   * Route for:
   * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
   * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
   */
  webhookPlatform(webhookId: string, webhookToken: string, platform: string) {
    return `/webhooks/${webhookId}/${webhookToken}/${platform}`;
  },
  /**
   * Route for:
   * - GET `/gateway`
   */
  gateway() {
    return `/gateway`;
  },
  /**
   * Route for:
   * - GET `/gateway/bot`
   */
  gatewayBot() {
    return `/gateway/bot`;
  },
  /**
   * Route for:
   * - GET `/oauth2/applications/@me`
   */
  oauth2CurrentApplication() {
    return `/oauth2/applications/@me`;
  },
  /**
   * Route for:
   * - GET `/oauth2/@me`
   */
  oauth2CurrentAuthorization() {
    return `/oauth2/@me`;
  },
  /**
   * Route for:
   * - GET `/oauth2/authorize`
   */
  oauth2Authorization() {
    return `/oauth2/authorize`;
  },
  /**
   * Route for:
   * - POST `/oauth2/token`
   */
  oauth2TokenExchange() {
    return `/oauth2/token`;
  },
  /**
   * Route for:
   * - POST `/oauth2/token/revoke`
   */
  oauth2TokenRevocation() {
    return `/oauth2/token/revoke`;
  },
  /**
   * Route for:
   * - GET  `/applications/{application.id}/commands`
   * - PUT  `/applications/{application.id}/commands`
   * - POST `/applications/{application.id}/commands`
   */
  applicationCommands(applicationId: string) {
    return `/applications/${applicationId}/commands`;
  },
  /**
   * Route for:
   * - GET    `/applications/{application.id}/commands/{command.id}`
   * - PATCH  `/applications/{application.id}/commands/{command.id}`
   * - DELETE `/applications/{application.id}/commands/{command.id}`
   */
  applicationCommand(applicationId: string, commandId: string) {
    return `/applications/${applicationId}/commands/${commandId}`;
  },
  /**
   * Route for:
   * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
   * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
   * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
   */
  applicationGuildCommands(applicationId: string, guildId: string) {
    return `/applications/${applicationId}/guilds/${guildId}/commands`;
  },
  /**
   * Route for:
   * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
   * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
   * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
   */
  applicationGuildCommand(applicationId: string, guildId: string, commandId: string) {
    return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
  },
  /**
   * Route for:
   * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
   */
  interactionCallback(interactionId: string, interactionToken: string) {
    return `/interactions/${interactionId}/${interactionToken}/callback`;
  },
  /**
   * Route for:
   * - GET   `/guilds/{guild.id}/member-verification`
   * - PATCH `/guilds/{guild.id}/member-verification`
   */
  guildMemberVerification(guildId: string) {
    return `/guilds/${guildId}/member-verification`;
  },
  /**
   * Route for:
   * - PATCH `/guilds/{guild.id}/voice-states/@me`
   * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
   */
  guildVoiceState(guildId: string, userId = '@me') {
    return `/guilds/${guildId}/voice-states/${userId}`;
  },
  /**
   * Route for:
   * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
   * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
   */
  guildApplicationCommandsPermissions(applicationId: string, guildId: string) {
    return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
  },
  /**
   * Route for:
   * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
   * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
   */
  applicationCommandPermissions(applicationId: string, guildId: string, commandId: string) {
    return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
  },
  /**
   * Route for:
   * - GET   `/guilds/{guild.id}/welcome-screen`
   * - PATCH `/guilds/{guild.id}/welcome-screen`
   */
  guildWelcomeScreen(guildId: string) {
    return `/guilds/${guildId}/welcome-screen`;
  },
  /**
   * Route for:
   * - POST `/stage-instances`
   */
  stageInstances() {
    return `/stage-instances`;
  },
  /**
   * Route for:
   * - GET `/stage-instances/{channel.id}`
   * - PATCH `/stage-instances/{channel.id}`
   * - DELETE `/stage-instances/{channel.id}`
   */
  stageInstance(channelId: string) {
    return `/stage-instances/${channelId}`;
  },
  /**
   * Route for:
   * - GET `/stickers/{sticker.id}`
   */
  sticker(stickerId: string) {
    return `/stickers/${stickerId}`;
  },
  /**
   * Route for:
   * - GET `/sticker-packs`
   */
  nitroStickerPacks() {
    return '/sticker-packs';
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/stickers`
   * - POST `/guilds/{guild.id}/stickers`
   */
  guildStickers(guildId: string) {
    return `/guilds/${guildId}/stickers`;
  },
  /**
   * Route for:
   * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
   * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
   * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
   */
  guildSticker(guildId: string, stickerId: string) {
    return `/guilds/${guildId}/stickers/${stickerId}`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/scheduled-events`
   * - POST `/guilds/{guild.id}/scheduled-events`
   */
  guildScheduledEvents(guildId: string) {
    return `/guilds/${guildId}/scheduled-events`;
  },
  /**
   * Route for:
   * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
   * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
   * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
   */
  guildScheduledEvent(guildId: string, guildScheduledEventId: string) {
    return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
   */
  guildScheduledEventUsers(guildId: string, guildScheduledEventId: string) {
    return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
  },
  /**
   * Route for:
   * - GET `/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}`
   * - GET `/guilds/{guild.id}/auto-moderation/rules`
   * - POST `/guilds/{guild.id}/auto-moderation/rules`
   * - PATCH `/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}`
   * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}`
   */
  guildAutoModeration(guildId: string, autoModRuleID?: string) {
    return `/guilds/${guildId}/auto-moderation/rules${autoModRuleID ? `/${autoModRuleID}` : ''}`;
  },
};

export enum RouteBases {
  api = 'https://discord.com/api',
  cdn = 'https://cdn.discordapp.com',
  invite = 'https://discord.gg',
  template = 'https://discord.new',
  gift = 'https://discord.gift',
  scheduledEvent = 'https://discord.com/events',
}
