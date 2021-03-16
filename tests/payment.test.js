import paymentPage from "./paymentPageModel";

fixture`Getting Started`.page`http://localhost:3000`;

test("Valid Card Details", async (t) => {
  const cardNameVal = "username";
  const cardNumberVal = "9874552455245231";
  const cardExpMonthVal = "06";
  const cardExpYearVal = "2003";
  const cardCVVVal = "999";

  await t
    .expect(paymentPage.cardName.exists)
    .ok()
    .expect(paymentPage.cardNumber.exists)
    .ok()
    .expect(paymentPage.cardExpMonth.exists)
    .ok()
    .expect(paymentPage.cardExpYear.exists)
    .ok()
    .expect(paymentPage.cardCVV.exists)
    .ok()
    .expect(paymentPage.completePaymentBtn.exists)
    .ok();

  await t
    .setTestSpeed(0.1)
    .typeText(paymentPage.cardName, cardNameVal)
    .typeText(paymentPage.cardNumber, cardNumberVal);
  await paymentPage.selectOption(paymentPage.cardExpMonth, cardExpMonthVal);
  await paymentPage.selectOption(paymentPage.cardExpYear, cardExpYearVal);
  await t
    .typeText(paymentPage.cardCVV, cardCVVVal)
    .click(paymentPage.completePaymentBtn);
});
