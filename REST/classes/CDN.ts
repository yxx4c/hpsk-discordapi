import {REST} from './REST';
import {RouteBases} from './Routes';
export declare const ALLOWED_EXTENSIONS: ['webp', 'png', 'jpg', 'jpeg', 'gif'];
export declare const ALLOWED_STICKER_EXTENSIONS: ['png', 'json'];
export declare const ALLOWED_SIZES: [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
export declare type ImageExtension = typeof ALLOWED_EXTENSIONS[number];
export declare type StickerExtension = typeof ALLOWED_STICKER_EXTENSIONS[number];
export declare type ImageSize = typeof ALLOWED_SIZES[number];

const allowed_extensions = ['webp', 'png', 'jpg', 'jpeg', 'gif'];
const allowed_sticker_extensions = ['png', 'json'];
const allowed_sizes = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
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

export class CDN {
  route: string;
  constructor(base?: string) {
    this.route = base ?? RouteBases.cdn;
  }
  appAsset(
    clientId: any,
    assetHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/app-assets/${clientId}/${assetHash}`, options);
  }
  appIcon(
    clientId: any,
    iconHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/app-icons/${clientId}/${iconHash}`, options);
  }
  avatar(id: any, avatarHash: any, options: {forceStatic?: boolean | undefined} | undefined): string {
    return this.dynamicMakeURL(`/avatars/${id}/${avatarHash}`, avatarHash, options);
  }
  banner(id: any, bannerHash: any, options: {forceStatic?: boolean | undefined} | undefined): string {
    return this.dynamicMakeURL(`/banners/${id}/${bannerHash}`, bannerHash, options);
  }
  channelIcon(
    channelId: any,
    iconHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/channel-icons/${channelId}/${iconHash}`, options);
  }
  defaultAvatar(discriminator: any): string {
    return this.makeURL(`/embed/avatars/${discriminator}`, {extension: 'png'});
  }
  discoverySplash(
    guildId: any,
    splashHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/discovery-splashes/${guildId}/${splashHash}`, options);
  }
  emoji(emojiId: any, extension: any): string {
    return this.makeURL(`/emojis/${emojiId}`, {extension});
  }
  guildMemberAvatar(
    guildId: any,
    userId: any,
    avatarHash: any,
    options: {forceStatic?: boolean | undefined} | undefined,
  ): string {
    return this.dynamicMakeURL(`/guilds/${guildId}/users/${userId}/avatars/${avatarHash}`, avatarHash, options);
  }
  guildMemberBanner(
    guildId: any,
    userId: any,
    bannerHash: any,
    options: {forceStatic?: boolean | undefined} | undefined,
  ): string {
    return this.dynamicMakeURL(`/guilds/${guildId}/users/${userId}/banner`, bannerHash, options);
  }
  icon(id: any, iconHash: any, options: {forceStatic?: boolean | undefined} | undefined): string {
    return this.dynamicMakeURL(`/icons/${id}/${iconHash}`, iconHash, options);
  }
  roleIcon(
    roleId: any,
    roleIconHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/role-icons/${roleId}/${roleIconHash}`, options);
  }
  splash(
    guildId: any,
    splashHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/splashes/${guildId}/${splashHash}`, options);
  }
  sticker(stickerId: any, extension: any): string {
    return this.makeURL(`/stickers/${stickerId}`, {
      allowedExtensions: ALLOWED_STICKER_EXTENSIONS as any,
      extension: extension ?? 'png',
    });
  }
  stickerPackBanner(
    bannerId: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/app-assets/710982414301790216/store/${bannerId}`, options);
  }
  teamIcon(
    teamId: any,
    iconHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/team-icons/${teamId}/${iconHash}`, options);
  }
  guildScheduledEventCover(
    scheduledEventId: any,
    coverHash: any,
    options:
      | {
          allowedExtensions?: ['webp', 'png', 'jpg', 'jpeg', 'gif'] | undefined;
          extension?: string | undefined;
          size?: number | undefined;
        }
      | undefined,
  ): string {
    return this.makeURL(`/guild-events/${scheduledEventId}/${coverHash}`, options);
  }
  dynamicMakeURL(route: string, hash: string, {forceStatic = false, ...options} = {}): string {
    return this.makeURL(
      route,
      (!forceStatic && hash.startsWith('a_') ? {...options, extension: 'gif'} : options) as any,
    );
  }
  makeURL(route: string, {allowedExtensions = allowed_extensions, extension = 'webp', size = 0} = {}): string {
    extension = String(extension).toLowerCase();
    if (!allowedExtensions.includes(extension as any)) {
      throw new RangeError(`Invalid extension provided: ${extension}
    Must be one of: ${allowedExtensions.join(', ')}`);
    }
    if (size && !allowed_sizes.includes(size as any)) {
      throw new RangeError(`Invalid size provided: ${size}
    Must be one of: ${allowed_sizes.join(', ')}`);
    }
    const url = new URL(`${this.route}${route}.${extension}`);
    if (size) {
      url.searchParams.set('size', String(size));
    }
    return url.toString();
  }
}
