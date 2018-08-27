const cuidTests = require('./test');

fixture `cuid browser tests`;

const defaultOptions = { skip: false };

const cafeToTapeFormat = (describe, ...rest) => {
  const fn = rest[1] ? rest[1] : rest[0];
  const options = rest[1] ? Object.assign({}, defaultOptions, rest[0]) : defaultOptions;

  test(describe, t => fn({
    ok: async (bool, message) => {
      if (options.skip === true) return Promise.resolve();
      return await t.expect(bool).eql(true, message);
    },
    end: async () => {}
  }));
};

cuidTests.run(cafeToTapeFormat, { isInBrowser: true });
