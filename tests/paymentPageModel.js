import { Selector, t } from "testcafe";

class Card {
  constructor() {
    this.cardName = Selector("div[data-test='card-name']");
    this.cardNumber = Selector("div[data-test='card-number']");
    this.cardExpMonth = Selector("div[data-test='card-expiry-month']");
    this.cardExpYear = Selector("div[data-test='card-expiry-year']");
    this.cardCVV = Selector("div[data-test='card-security-code']");
    this.rememberMeCheck = Selector("div[data-test='remember-me']");
    this.completePaymentBtn = Selector("div[data-test='completePayment']");
  }

  async selectOption(dropdownDiv, option) {
    const optionElement = await Selector(`div[id="${option}"]`);
    await t.click(dropdownDiv).click(optionElement);
  }
}

export default new Card();
