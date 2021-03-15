import { Selector } from "testcafe";
// import Textbox from '../src/atoms/TextBox/TextBox';
// import SubmitButton from "../src/atoms/Button/Button";

fixture` Login Page Validation`
    .page`http:\\localhost:3000`

// test("My Login Page", async t => {

//     const userName = Selector("input[name='username']");
//     const password = Selector("input[name='password']");
//     const userNameVal = "hema";
//     const passwordVal = "babu";

//     const loginButton = Selector("button[data-test='logIn']");

//     await t
//         .expect(userName.exists).ok()
//         .expect(password.exists).ok()
//         .expect(loginButton.exists).ok()

//     await t
//         .typeText(userName, userNameVal)
//         .typeText(password, passwordVal)
//         .expect(userName.value).eql(userNameVal)
//         .expect(password.value).eql(passwordVal)
//         .click(loginButton)

// })

fixture` Login Page Validation`
    .page`http:\\localhost:3000/`

test("My Sign Up Page", async t => {
    const firstName = Selector("input[data-test='firstname']");
    const userName = Selector("input[data-test='username']");
    const password = Selector("input[data-test='password']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    const signupButton = Selector("button[data-test='signup']");

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

// test("My Sign Up Page second method", async t => {
//     const userNameVal = "hema";
//     const passwordVal = "babu";


//     await t
//         .expect(Textbox.inputBox.exists).ok()
//         .expect(SubmitButton.submitButton.exists).ok()

//     await t
//         .typeText(Textbox.nameInput, userNameVal)
//         .typeText(Textbox.nameInput, passwordVal)
//         .expect(Textbox.nameInput.value).eql(userNameVal)
//         .expect(Textbox.nameInput.value).eql(passwordVal)
//         .click(SubmitButton.submitButton)

// })