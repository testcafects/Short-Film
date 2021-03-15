import { Selector } from 'testcafe';

fixture`Getting started with Profile`.page`http://localhost:3000/profile`

test('ProfilePage', async t =>{
    const firstNameValue = "Tanya";
    const lastNameValue = "Yadav";
    const firstName = Selector("[data-text='First Name']");
    const lastName = Selector("[data-text='Last Name']");
    const firstNameExist = firstName.exists;
    const lastNameExist = lastName.exists;
    await t
        .expect(firstNameExist).ok()
        .typeText(firstName, firstNameValue)
        .expect(firstName.value).eql(firstNameValue)

        .expect(lastNameExist).ok()
        .typeText(lastName, lastNameValue)
        .expect(lastName.value).eql(lastNameValue)
});