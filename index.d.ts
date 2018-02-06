declare const cuid: (() => string) & {
  slug: (() => string)
};

export = cuid;
