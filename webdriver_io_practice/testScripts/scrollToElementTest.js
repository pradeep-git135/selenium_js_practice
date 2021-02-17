const scroll = require("../pages/scrollToElementPage")

describe('', () => {
    it('', () => {
        browser.maximizeWindow()
        browser.url("https://www.spicejet.com/")
        scroll.faq_ele.isDisplayedInViewport()
        scroll.faq_ele.scrollIntoView()
        scroll.movetoelement(scroll.faq_ele)
        scroll.clickonelement(scroll.faq_ele)
    });
    
});