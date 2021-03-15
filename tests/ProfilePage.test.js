import accountModel from "./account-model.js";
import profileModel from './page-model/profile-model.js'

fixture`Getting started with Profile`.page`http://localhost:3000/profile`

test('ProfilePage', async t =>{   
    console.log(profileModel.FNInput);
    const firstNameExist = profileModel.FNInput.exists;
    const lastNameExist = profileModel.LNInput.exists;
    const emailExist = profileModel.emailInput.exists;
    const dobExist = profileModel.DOBInput.exists;
    const generExist = profileModel.GenresInput.exists;
    const fbExist = profileModel.FBInput.exists;
    const twitterExist = profileModel.TwitterInput.exists;
    const saveExist = profileModel.saveButton.exists;

    await t
        .expect(firstNameExist).ok()
        // .typeText(firstName, profileModel.firstNameValue)
        .expect(profileModel.FNInput.value).eql(profileModel.firstNameValue)

        .expect(lastNameExist).ok()
        // .typeText(lastName, profileModel.lastNameValue)
        .expect(profileModel.LNInput.value).eql(profileModel.lastNameValue)

        .expect(emailExist).ok()
        .expect(profileModel.emailInput.value).eql(profileModel.email)

        .expect(dobExist).ok()
        .typeText(profileModel.DOBInput, profileModel.DOB)
        .expect(profileModel.DOBInput.value).eql(profileModel.DOB)

        .expect(generExist).ok()
        .typeText(profileModel.GenresInput, profileModel.gener)
        .expect(profileModel.GenresInput.value).eql(profileModel.gener)

        .expect(fbExist).ok()
        .typeText(profileModel.FBInput, profileModel.FB)
        .expect(profileModel.FBInput.value).eql(profileModel.FB)

        .expect(twitterExist).ok()
        .typeText(profileModel.TwitterInput, profileModel.twitter)
        .expect(profileModel.TwitterInput.value).eql(profileModel.twitter)
        // .setNativeDialogHandler(() => true)
        // .click(profileModel.saveButton)
});


// test("Account Details Page", async (t) => {
//     const accountLink = profileModel.accontDetailsLink;
//     await t
//       .click(accountLink)
//       .navigateTo("http://localhost:3000/account")
//       .wait(3000);
//   });

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

// test("Watched History Page", async (t) => {
//   const watchedLink = accountModel.watchedHistoryLink;
//   await t
//     .click(watchedLink)
//     .navigateTo("http://localhost:3000/watched-history")
//     .wait(3000);
// });
