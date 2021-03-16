import { Selector } from "testcafe";

fixture`Test of Main Page`
    .page`http:\\localhost:3000`
    .beforeEach(async t => {
        await t
            .maximizeWindow()
    })

test('test for main content', async t => {
        const mainPageSelector = Selector("[data-test='homePageBody']");
        // await Selector("div[data-test='completePayment']")

        //console.log(mainPageSelector.innerText);
        // selecting watch List Container
        //const watchListContainer = mainPageSelector.withAttribute("[data-test'= 'watchListContainer']");
        const watchListContainer = Selector("[data-test'= 'watchListContainer']");

        //const watchListHeading = watchListContainer.withAttribute("[data-test = 'watchListHeading']");
        const watchListHeading = Selector("[data-test = 'watchListHeading']");

        const selectMyLearning = watchListHeading.child('div').withText('My Learning');
        const selectStartLearning = watchListHeading.child('div').withText('Let\'s start learning');

        
        await t
            .expect(selectMyLearning.exists)
            .ok()
            //.expect(selectMyLearning).eql('My Learning')

            .expect(selectStartLearning.exists)
            .ok()
            //.expect(selectStartLearning.value).eql('Let\'s start learning')

    })

   

    test('Testing Short Videos Section', async t=>{
        const shortVideosSection = Selector("[data-test='Best in Short Videos']");
        //const comedyVideosText = comedyVideosSection.child('h3').withText('Best in Comedy');
        const carouselNext = shortVideosSection("button[aria-label='Go to next slide']");
        const carouselPrev = shortVideosSection("button[aria-label='Go to previous slide']");

        await t
            .expect(shortVideosSection.exists)
            .ok()
            //.expect(comedyVideosText.value).eql('Best in Comedy')
            .expect(carouselNext.exists).ok()
            .expect(carouselPrev.exists).ok()
            .click(carouselNext)
            .click(carouselPrev)
    })
    test('Testing Comedy Videos Section', async t=>{
        const comedyVideosSection = Selector("[data-test='Best in Comedy']");
        //const comedyVideosText = comedyVideosSection.child('h3').withText('Best in Comedy');
        const carouselNext = comedyVideosSection("button[aria-label='Go to next slide']");
        const carouselPrev = comedyVideosSection("button[aria-label='Go to previous slide']");

        await t
            .expect(comedyVideosSection.exists)
            .ok()
            //.expect(comedyVideosText.value).eql('Best in Comedy')
            .expect(carouselNext.exists).ok()
            .expect(carouselPrev.exists).ok()
            .click(carouselNext)
            .click(carouselPrev)
    })

    test('Testing Animation Videos Section', async t=>{
        const animationVideosSection = Selector("[data-test='Best in Animation']");
       // const animationVideosText = animationVideosSection.child('h3').withText('Best in Animation');
        const comedyVideosSection = Selector("[data-test='Best in Comedy']");
        const carouselNext = animationVideosSection("button[aria-label='Go to next slide']");
        const carouselPrev = animationVideosSection("button[aria-label='Go to previous slide']");

        await t
            .expect(animationVideosSection.exists)
            .ok()
            //.expect(animationVideosText.value).eql('Best in Animation')
            .expect(carouselNext.exists).ok()
            .expect(carouselPrev.exists).ok()
            .click(carouselNext)
            .click(carouselPrev)
    })
    test('Testing Crime Videos Section', async t=>{
        // selecting Best in Crime Videos section
        const crimeVideosSection = Selector("[data-test='Best in Crime']");
       // const crimeVideosText = crimeVideosSection.child('h3').withText('Best in Short Videos');
        const carouselNext = crimeVideosSection("button[aria-label='Go to next slide']");
        const carouselPrev = crimeVideosSection("button[aria-label='Go to previous slide']");

        await t
            .expect(crimeVideosSection.exists)
            .ok()
            //.expect(crimeVideosText.value).eql('Best in Crime')
            .expect(carouselNext.exists).ok()
            .expect(carouselPrev.exists).ok()
            .click(carouselNext)
            .click(carouselPrev)
    })
    test('Testing Horror Videos Section', async t=>{
        // selectingBest in Horror Videos section
        const horrorVideosSection = Selector("[data-test='Best in Horror']");
        const horrorVideosText = horrorVideosSection.child('h3').withText('Best in Horror');
        const carouselNext = horrorVideosSection("button[aria-label='Go to next slide']");
        const carouselPrev = horrorVideosSection("button[aria-label='Go to previous slide']");

        await t
            .expect(horrorVideosSection.exists)
            .ok()
            //.expect(horrorVideosText.value).eql('Best in Horror')
            .expect(carouselNext.exists).ok()
            .expect(carouselPrev.exists).ok()
            .click(carouselNext)
            .click(carouselPrev)
    })