/**
 * Create a unique collision-resistant ID.
*/
declare const cuid: (() => string) & {
  /**
   * Create a shorter unique collision-resistant ID.
   * Is 7 to 10 characters in length.
   */
  slug: (() => string)
  /**
   * Check if string is a valid 'cuid'.
   */
  isCuid: (() => boolean)
  /**
   * Check if string is a valid 'cuid' slug.
   */
  isSlug: (() => boolean)
};

export = cuid;
