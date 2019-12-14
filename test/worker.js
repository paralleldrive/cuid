import { Selector } from 'testcafe';

fixture `cuid worker tests`
    .page `http://localhost:8080`;

test('Running tests within worker', async t => {
    // check that there is no element with class "error"
    await t.expect(Selector('.error').count).eql(0);
});
