import { Selector } from "testcafe";

fixture `Test of Main Page`
    .page `http:\\localhost:3000\mainPage`

test('test for main content', async t => {

    //
    const mainPageSelector = await Selector('div').withAttribute('data-testId','mainPage');

    // action bar 
    const actionBar = mainPageSelector.withAttribute('data-testId','actionBar');
    const shortVideosText = actionBar.withText('Short Videos');
    const storyText = actionBar.withText('Story');
    const crimeText = actionBar.withText('Crime');
    const actionText = actionBar.withText('Action');
    const animationText = actionBar.withText('Animation');
    const horrorText = actionBar.withText('Horror');

    // checking main content
     const mainContentSection = mainPageSelector.withAttribute('data-testId','maincontentText');
     const letsStartingWatchingText = mainContentSection.withText("Let'\s start watching ");
     const myWatchListText = mainContentSection('My Watch List');


     //main Page most Popular section
     const mostPopularSection = mainPageSelector.withAttribute('data-testId','mostPopularSection');

     //main Page Best in comedy section
     const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInComedy');

     //main Page Best in Animation section
     const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInAnimation');

     //main Page Best in Short Videos
     const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInShortVideos');
    

    
})