import { Selector } from "testcafe";

class AccountModel {
  constructor() {
    this.oldPwdValue = "testcafe@123";
    this.newPwdValue = "testcafenew@123";
    this.confirmPwdValue = "testcafenew@123";
    this.oldPwd = Selector("[data-text='Old Password']");
    this.newPwd = Selector("[data-text='New Password']");
    this.confirmPwd = Selector("[data-text='Confirm Password']");
    this.saveBtn = Selector("button[type=button]").withText("Save");
    this.watchedHistoryLink = Selector("li").nth(2);
  }
}
export default new AccountModel();
