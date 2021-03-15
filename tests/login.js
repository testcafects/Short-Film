import { Selector } from "testcafe";
// import LoginButton from '../src/atoms/TextBox/TextBox';

fixture` Login Page Validation`
    .page`http:\\localhost:3000`

test("My Login Page", async t => {

    const userName = Selector("input[name='username']");
    const password = Selector("input[name='password']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    const loginButton = Selector("button[name='logIn']");

    await t
        .expect(userName.exists).ok()
        .expect(password.exists).ok()
        .expect(loginButton.exists).ok()

    await t
        .typeText(userName, userNameVal)
        .typeText(password, passwordVal)
        .expect(userName.value).eql(userNameVal)
        .expect(password.value).eql(passwordVal)
        .click(loginButton)

})