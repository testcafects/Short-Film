import { Selector } from "testcafe";

fixture` Sign Up to Short Films`
    .page`http:\\localhost:3000`

test("My sign-up Page", async t => {

    const userName = await Selector("input[data-text='username-input']");
    const password = await Selector("input[data-text='password-input']");
    const userNameVal = "hema";
    const passwordVal = "babu";

    const signUpButton = await Selector("button[data-text='signUpButton']");

    await t
        .except(userName.exists).ok()
        .except(password.exists).ok()
        .except(signUpButton.exists).ok()

    await t
        .typeText(userName, userNameVal)
        .typeText(password, passwordVal)
        .click(signUpButton)
})