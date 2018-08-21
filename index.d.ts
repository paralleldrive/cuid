/**
 * Create a unique collision-resistant ID.
 * Read more about cuid here - https://github.com/ericelliott/cuid
 */
declare const cuid: (() => string) & {
  /**
   * Create a shorter unique collision-resistant ID. Is 7 to 10 characters in length.
   */
  slug: (() => string)
  /**
   * Check if string is a valid 'cuid'.
   *
   * @param cuid: string to check if it is a 'cuid'.
   */
  isCuid: ((cuid: string) => boolean)
  /**
   * Check if string is a valid 'cuid' slug.
   *
   * @param slug: string to check if it is a 'cuid' slug.
   */
  isSlug: ((slug: string) => boolean)
};

export = cuid;
