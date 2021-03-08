import { Selector } from "testcafe";

fixture` Login to Short Films`
    .page`http:\\localhost:3000`

test("My Login Page", async t => {

    const userName = await Selector("input[data-text='username-input']");
    const password = await Selector("input[data-text='password-input']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    const loginButton = await Selector("button[data-text='loginButton']");

    await t
        .except(userName.exists).ok()
        .except(password.exists).ok()
        .except(loginButton.exists).ok()

    await t
        .typeText(userName, userNameVal)
        .typeText(password, passwordVal)
        .click(loginButton)



})