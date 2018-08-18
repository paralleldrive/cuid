/* eslint-disable */
const cuidTests = require('./test');

fixture `cuid browser tests`

const defaultOptions = { skip: false }

const cafeToTapeFormat = (describe, ...rest) => { 
  const fn = rest[1] ? rest[1] : rest[0]
  const options = rest[1] ? Object.assign({}, defaultOptions, rest[0]) : defaultOptions

  return test (describe, async t => {
    const ok = async (bool, message) => {
      if (options.skip) return;
      await t.expect(bool).eql(true, message)
    }
    const end = async () => {}
    return fn({ ok, end })
  });
};

cuidTests.run(cafeToTapeFormat, { isInBrowser: true })