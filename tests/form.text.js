import { Selector } from 'testcafe';

fixture `Upload details`
    .page `http://localhost:3000/`;

test('Details of the video', async t => {
   
        const videoTitle =  Selector("input[name=Title][data-test=text-box]");
        const videoGenre =  Selector("input[name=Genre][data-test=text-box]");
        const videoDirector =  Selector("input[name=Director][data-test=text-box]");
        const password =  Selector("input[name=Password][data-test=text-box]");
        const videoDescription =  Selector("input[name=Description][data-test=text-box]");
        const confirmButton =  Selector("[data-test='submit']");
        const uploadButton =  Selector("[data-test=upload]");
        const VideoUpload =  Selector("[data-test='VideoUpload']");


        const videoTitleVal = "HarryPotter";
        const videoGenreVal = "Fiction";
        const videoDirectorVal= "Robert Jr";
        const passwordVal = "*******";
        const videoDescriptionVal = "Most of the things present in the video is far from our imagination";

        await t
 
        .expect(VideoUpload.exists)
        .ok()
        .expect(videoTitle.exists)
        .ok()
        .expect(videoGenre.exists)
        .ok()
        .expect(videoDescription.exists)
        .ok()
        .expect(videoDirector.exists)
        .ok()
        .expect(password.exists)
        .ok()
        .expect(confirmButton.exists)
        .ok()
        .expect(uploadButton.exists)
        .ok()

        await t
        .typeText(videoTitle, videoTitleVal)
        .typeText(videoGenre, videoGenreVal)
        .typeText(videoDirector, videoDirectorVal)
        .typeText(password, passwordVal)
        .typeText(videoDescription, videoDescriptionVal)
        .click(confirmButton)
        .click(uploadButton)


})