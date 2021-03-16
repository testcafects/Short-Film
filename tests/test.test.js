import { Selector, ClientFunction } from 'testcafe';
fixture`Getting started`.page`https://github.com/`
test('Sign in', async t => {
    const signInLink = Selector('.HeaderMenu-link').withText('Sign in')
    await t
        .click(signInLink)
});
