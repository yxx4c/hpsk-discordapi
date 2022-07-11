export declare const ALLOWED_EXTENSIONS: ["webp", "png", "jpg", "jpeg", "gif"];
export declare const ALLOWED_STICKER_EXTENSIONS: ["png", "json"];
export declare const ALLOWED_SIZES: [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
export declare type ImageExtension = typeof ALLOWED_EXTENSIONS[number];
export declare type StickerExtension = typeof ALLOWED_STICKER_EXTENSIONS[number];
export declare type ImageSize = typeof ALLOWED_SIZES[number];
/**
 * The options used for image URLs
 */
export interface BaseImageURLOptions {
    /**
     * The extension to use for the image URL
     * @default 'webp'
     */
    extension?: ImageExtension;
    /**
     * The size specified in the image URL
     */
    size?: ImageSize;
}
/**
 * The options used for image URLs with animated content
 */
export interface ImageURLOptions extends BaseImageURLOptions {
    /**
     * Whether or not to prefer the static version of an image asset.
     */
    forceStatic?: boolean;
}
/**
 * The options to use when making a CDN URL
 */
export interface MakeURLOptions {
    /**
     * The extension to use for the image URL
     * @default 'webp'
     */
    extension?: string | undefined;
    /**
     * The size specified in the image URL
     */
    size?: ImageSize;
    /**
     * The allowed extensions that can be used
     */
    allowedExtensions?: ReadonlyArray<string>;
}
export declare class CDN {
    route: string;
    constructor(base?: string);
    appAsset(clientId: any, assetHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    appIcon(clientId: any, iconHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    avatar(id: any, avatarHash: any, options: {
        forceStatic?: boolean | undefined;
    } | undefined): string;
    banner(id: any, bannerHash: any, options: {
        forceStatic?: boolean | undefined;
    } | undefined): string;
    channelIcon(channelId: any, iconHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    defaultAvatar(discriminator: any): string;
    discoverySplash(guildId: any, splashHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    emoji(emojiId: any, extension: any): string;
    guildMemberAvatar(guildId: any, userId: any, avatarHash: any, options: {
        forceStatic?: boolean | undefined;
    } | undefined): string;
    guildMemberBanner(guildId: any, userId: any, bannerHash: any, options: {
        forceStatic?: boolean | undefined;
    } | undefined): string;
    icon(id: any, iconHash: any, options: {
        forceStatic?: boolean | undefined;
    } | undefined): string;
    roleIcon(roleId: any, roleIconHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    splash(guildId: any, splashHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    sticker(stickerId: any, extension: any): string;
    stickerPackBanner(bannerId: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    teamIcon(teamId: any, iconHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    guildScheduledEventCover(scheduledEventId: any, coverHash: any, options: {
        allowedExtensions?: ["webp", "png", "jpg", "jpeg", "gif"] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    } | undefined): string;
    dynamicMakeURL(route: string, hash: string, { forceStatic, ...options }?: {
        forceStatic?: boolean | undefined;
    }): string;
    makeURL(route: string, { allowedExtensions, extension, size }?: {
        allowedExtensions?: string[] | undefined;
        extension?: string | undefined;
        size?: number | undefined;
    }): string;
}
