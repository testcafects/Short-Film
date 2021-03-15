import { Selector } from "testcafe";
// import LoginButton from '../src/atoms/TextBox/TextBox';

fixture` Shopping Cart Validation`
    .page`http:\\localhost:3000`

test("Shopping Cart", async t => {

    // const userName = Selector("input[name='username']");
    // const password = Selector("input[name='password']");
    // const userNameVal = "hema";
    // const passwordVal = "babu";

    // const loginButton = Selector("button[name='logIn']");

    const CouponSearch = Selector("[data-test='coupon-search'] input[type='text']")

    // await t
    //     .expect(userName.exists).ok()
    //     .expect(password.exists).ok()
    //     .expect(loginButton.exists).ok()

    await t
        .typeText(CouponSearch, '1234')
        // .typeText(password, passwordVal)
        // .expect(userName.value).eql(userNameVal)
        // .expect(password.value).eql(passwordVal)
        .click(Selector("button[type='button']"))

})