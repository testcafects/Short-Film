import { Selector } from "testcafe";
import accountModel from "./account-model.js";

fixture`Getting started with Account`.page`http://localhost:3000/account`;

test("AccountPage", async (t) => {
  const oldPassValue = accountModel.oldPwdValue;
  const newPassValue = accountModel.newPwdValue;
  const confirmPassValue = accountModel.confirmPwdValue;

  const oldPass = accountModel.oldPwd;
  const newPass = accountModel.newPwd;
  const confirmPass = accountModel.confirmPwd;

  const oldPassExist = oldPass.exists;
  const newPassExist = newPass.exists;
  const confirmPassExist = confirmPass.exists;

  const saveButton = accountModel.saveBtn;

  await t
    .expect(oldPassExist)
    .ok()
    .typeText(oldPass, oldPassValue)
    .expect(oldPass.value)
    .eql(oldPassValue)

    .expect(newPassExist)
    .ok()
    .typeText(newPass, newPassValue)
    .expect(newPass.value)
    .eql(newPassValue)

    .expect(confirmPassExist)
    .ok()
    .typeText(confirmPass, confirmPassValue)
    .expect(confirmPass.value)
    .eql(confirmPassValue)

    .setNativeDialogHandler(() => true)
    .click(saveButton);
});

test("Watched History Page", async (t) => {
  const watchedLink = accountModel.watchedHistoryLink;
  await t
    .click(watchedLink)
    .navigateTo("http://localhost:3000/watched-history")
    .wait(3000);
});
