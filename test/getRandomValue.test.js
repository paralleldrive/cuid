import { describe } from 'riteway';

import getRandomValue from '../lib/getRandomValue';

describe('getRandomValue', async assert => {
  const containsDashes = x => (/-/).test(x);
  assert({
    given: 'no input',
    should: 'return only positive integers',
    actual: Array.from({ length: 10000 },
      getRandomValue).filter(containsDashes).length,
    expected: 0
  });
});
