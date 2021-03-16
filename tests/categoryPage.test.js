import { Selector } from 'testcafe';

fixture `Testing the category page`.page `http://localhost:3000`
    test('To check the header,categories bar and suggestion bar exists', async t => {
        // Test code   
        await t
        .expect(Selector('[data-test="header"]').exists).ok()
        .expect(Selector('[data-test="category-bar"]').exists).ok()
        .expect(Selector('[data-test="suggestion-bar"]').exists).ok()
        // .expect(Selector('#category-button').count).eql(10);
    });
    test('To check the most trending carousel, famous videos carouel and latest releases carousel exist', async t => {
        const carouselCount = Selector('[data-test="carousel-bars"]').count;   
        await t
        .expect(carouselCount).eql(3);        
    });
    test('To check the carousel arrows', async t => {
        const carouselArrowLeft = Selector('button').withAttribute('aria-label','Go to next slide');
        const carouselArrowRight = Selector('button').withAttribute('aria-label','Go to previous slide');      
        await t
        .click(carouselArrowLeft)
        .click(carouselArrowRight);        
    });
    
    test('To check the directors list exists', async t =>{
        await t
        .expect(Selector('[data-test="director-list"]').exists).ok();
    });
    
