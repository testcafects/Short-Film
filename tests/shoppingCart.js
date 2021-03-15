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
    const recommendedCards = Selector("[data-test='recommended_cards']")
    const recommendedLabel=  Selector("[data-test='recommended_label']")
    const individualCard=  Selector("[data-test='individual_card']")
    const cardMetaInformation = Selector("[data-test='meta_info']")
    const rating=  Selector("[data-test='rating']")
    const ratingCount=  Selector("[data-test='rating_count']")
    const commonButton=  Selector("[data-test='common_button']")

     await t
        .expect(recommendedCards.exists).ok()
        .expect(recommendedLabel.exists).ok()
        .expect(individualCard.exists).ok()
        .expect(cardMetaInformation.exists).ok()
        .expect(rating.exists).ok()
        .expect(ratingCount.exists).ok()
        .expect(commonButton.exists).ok()
    await t
        .typeText(CouponSearch, '1234')
        // .typeText(password, passwordVal)
        // .expect(userName.value).eql(userNameVal)
        // .expect(password.value).eql(passwordVal)
        .click(Selector("button[type='button']"))
        .click(Selector("button[data-test='common_button']"))

})