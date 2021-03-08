import { Selector } from "testcafe";

fixture`Getting Started`.page`http://localhost:3000/payment`;

test("My first test", async (t) => {
  const cardName = await Selector("input[data-text='card-name']");
  const cardNumber = await Selector("input[data-text='card-number']");
  const cardExpMonth = await Selector("input[data-text='card-expiry-month']");
  const cardExpYear = await Selector("input[data-text='card-expiry-year']");
  const cardCVV = await Selector("input[data-text='card-cvv']");

  const cardNameVal = "username";
  const cardNumberVal = 9874552455245231;
  const cardExpMonthVal = "06";
  const cardExpYearVal = 2030;
  const cardCVVVal = 999;

  const completePaymentBtn = await Selector(
    "button[data-text='completePayment']"
  );

  await t
    .except(cardName.exists)
    .ok()
    .except(cardNumber.exists)
    .ok()
    .except(cardExpMonth.exists)
    .ok()
    .except(cardExpYear.exists)
    .ok()
    .except(cardCVV.exists)
    .ok()
    .except(completePaymentBtn.exists)
    .ok();

  await t
    .typeText(cardName, cardNameVal)
    .typeText(cardNumber, cardNumberVal)
    .typeText(cardExpMonth, cardExpMonthVal)
    .typeText(cardExpYear, cardExpYearVal)
    .typeText(cardCVV, cardCVVVal)
    .click(completePaymentBtn);
});
