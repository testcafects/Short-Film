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


test("My Sign Up Page", async t => {
    const firstName = Selector("input[name='firstname']");
    const userName = Selector("input[name='username']");
    const password = Selector("input[name='password']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    const signupButton = Selector("button[name='signup']");

    await t
        .expect(firstName.exists).ok()
        .expect(userName.exists).ok()
        .expect(password.exists).ok()
        .expect(signupButton.exists).ok()

    await t
        .typeText(userName, userNameVal)
        .typeText(password, passwordVal)
        .expect(userName.value).eql(userNameVal)
        .expect(password.value).eql(passwordVal)
        .click(signupButton)

})

test("My Sign Up Page second method", async t => {
    // const firstName = Selector("input[name='firstname']");
    // const userName = Selector("input[name='username']");
    // const password = Selector("input[name='password']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    // const signupButton = Selector("button[name='signup']");

    await t
        .expect(TextBox.inputBox.exists).ok()
        // .expect(TextBox.nameInput.exists).ok()
        // .expect(TextBox.nameInput.exists).ok()
        .expect(LoginButton.submitButton.exists).ok()

    await t
        .typeText(TextBox.nameInput, userNameVal)
        .typeText(TextBox.nameInput, passwordVal)
        .expect(TextBox.nameInput.value).eql(userNameVal)
        .expect(TextBox.nameInput.value).eql(passwordVal)
        .click(LoginButton.submitButton)

})