/**
 * Types extracted from https://discord.com/developers/docs/resources/emoji
 */
import type { APIRole } from './permissions';
import type { APIUser } from './user';
import type { Snowflake } from '../../globals';
/**
 * Not documented but mentioned
 */
export interface APIPartialEmoji {
    /**
     * Emoji id
     */
    id: Snowflake | null;
    /**
     * Emoji name (can be null only in reaction emoji objects)
     */
    name: string | null;
    /**
     * Whether this emoji is animated
     */
    animated?: boolean;
}
/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji extends APIPartialEmoji {
    /**
     * Roles this emoji is whitelisted to
     */
    roles?: APIRole['id'][];
    /**
     * User that created this emoji
     */
    user?: APIUser;
    /**
     * Whether this emoji must be wrapped in colons
     */
    require_colons?: boolean;
    /**
     * Whether this emoji is managed
     */
    managed?: boolean;
    /**
     * Whether this emoji can be used, may be false due to loss of Server Boosts
     */
    available?: boolean;
}
//# sourceMappingURL=emoji.d.ts.map