import { Selector } from "testcafe";

fixture`Test of Main Page`
    .page`http:\\localhost:3000`

test
    .before(async t => {
        await t
            .maximizeWindow()
    })
    ('test for main content', async t => {

        const mainPageSelector = await Selector('#root').withAttribute('data-test', 'homePageBody');

        //console.log(mainPageSelector.innerText);
        // selecting watch List Container
        const watchListContainer = mainPageSelector.withAttribute('data-test', 'watchListContainer');
        const watchListHeading = watchListContainer.withAttribute('data-test', 'watchListHeading');

        const selectMyLearning = watchListHeading.child('div').withText('My Learning');
        const selectStartLearning = watchListHeading.child('div').withText('Let\'s start learning');

        // selecting Best in Best in Comedy Videos section
        const comedyVideosSectiom = mainPageSelector.withAttribute('data-test', 'Best in Comedy');
        const comedyVideosText = comedyVideosSectiom.child('h3').withText('Best in Comedy');

        // selecting Best in Animation section
        const animationVideosSectiom = mainPageSelector.withAttribute('data-test', 'Best in Animation');
        const animationVideosText = animationVideosSectiom.child('h3').withText('Best in Short Videos');

        // selecting Best in Crime Videos section
        const crimeVideosSectiom = mainPageSelector.withAttribute('data-test', 'Best in Crime');
        const crimeVideosText = crimeVideosSectiom.child('h3').withText('Best in Short Videos');

        // selectingBest in Horror Videos section
        const horrorVideosSectiom = mainPageSelector.withAttribute('data-test', 'Best in Horror');
        const horrorVideosText = horrorVideosSectiom.child('h3').withText('Best in Short Videos');


        










        // // action bar 
        // const actionBar = mainPageSelector.withAttribute('data-testId','homePageBody');
        // const shortVideosText = actionBar.withText('Short Videos');
        // const storyText = actionBar.withText('Story');
        // const crimeText = actionBar.withText('Crime');
        // const actionText = actionBar.withText('Action');
        // const animationText = actionBar.withText('Animation');
        // const horrorText = actionBar.withText('Horror');

        // checking main content
        //  const mainContentSection = mainPageSelector.withAttribute('data-testId','maincontentText');
        //  const letsStartingWatchingText = mainContentSection.withText("Let'\s start watching ");
        //  const myWatchListText = mainContentSection('My Watch List');


        //main Page most Popular section
        //const mostPopularSection = mainPageSelector.withAttribute('data-testId','mostPopularSection');

        //main Page Best in comedy section
        //const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInComedy');

        //main Page Best in Animation section
        //const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInAnimation');

        //main Page Best in Short Videos
        // const mostPopularSection = mainPageSelector.withAttribute('data-testId','bestInShortVideos');



    })