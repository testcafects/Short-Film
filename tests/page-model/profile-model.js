import { Selector } from 'testcafe';

class ProfileModel {
    constructor () {
        this.firstNameValue = "Tanya";
        this.lastNameValue = "Yadav";
        this.email = "tanya@gmail.com";
        this.DOB = "07/10/1996";
        this.gener = "Action";
        this.FB = "https://facebook.com/thilakar";
        this.twitter = "https://twitter.com/thilakar";
        this.FNInput =  Selector("[data-text='First Name']");
        this.LNInput =  Selector("[data-text='Last Name']");
        this.emailInput =  Selector("[data-text='Email']");
        this.DOBInput = Selector("[data-text='Date of Birth']");
        this.GenresInput = Selector("[data-text='Genres']");
        this.FBInput = Selector("[data-text='Facebook Link']");
        this.TwitterInput = Selector("[data-text='Twitter Link']");
        this.saveButton = Selector("[data-text='Save']");
        this.cancelButton = Selector("[data-text='Cancel']");
        this.accontDetailsLink = Selector("li").nth(1)
    }
}

export default new ProfileModel();