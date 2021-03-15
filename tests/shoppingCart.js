import { Selector } from "testcafe";
// import LoginButton from '../src/atoms/TextBox/TextBox';

fixture` Shopping Cart Validation`.page`http:\\localhost:3000`;

test("Shopping Cart", async (t) => {
  const CouponSearch = Selector(
    "[data-test='coupon-search'] input[type='text']"
  );
  const recommendedCards = Selector("[data-test='recommended_cards']");
  const recommendedLabel = Selector("[data-test='recommended_label']");
  const individualCard = Selector("[data-test='individual_card']");
  const cardMetaInformation = Selector("[data-test='meta_info']");
  const rating = Selector("[data-test='rating']");
  const ratingCount = Selector("[data-test='rating_count']");
  const shoppingCart = Selector("[data-test='shopping-cart']");
  const applyButton = Selector(
    "[data-test='checkout-box'] button[type='button']"
  );
  const checkoutButton = Selector("[data-test='Checkout']");
  const carouselNext = Selector("button[aria-label='Go to next slide']");
  const carouselPrev = Selector("button[aria-label='Go to previous slide']");
  //   const addToCartButton = Selector(
  //   "[data-test='Add to Cart']")

  await t
    
    .expect(shoppingCart.exists)
    .ok()
    .expect(recommendedCards.exists)
    .ok()
    .expect(recommendedLabel.exists)
    .ok()
    .expect(individualCard.exists)
    .ok()
    .expect(cardMetaInformation.exists)
    .ok()
    .expect(rating.exists)
    .ok()
    .expect(ratingCount.exists)
    .ok()
    
  // .expect(addToCartButton.exists)
  // .ok();

  await t
    .typeText(CouponSearch, "1234")
    .click(applyButton)
    .click(checkoutButton)
    //.click(addToCartButton)
    .click(carouselPrev)
    .click(carouselNext);
});
