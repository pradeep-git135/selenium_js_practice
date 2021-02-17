const blaze = require("E:/selenium_js_practice/webdriver_io_practice/pages/findelementsPage.js")
describe('', () => {
    it('find elements test', () => {
        browser.url("https://www.blazemeter.com/")
        browser.maximizeWindow()
        blaze.childElements
        
    });
    it('checking is displayed', () => {

        console.log(blaze.pageheader.isDisplayed()); 
    });
    it('checking isExisting', () => {

        console.log(blaze.pageheader.isExisting()); 
    });
    it('checking isEnabled', () => {

        console.log(blaze.pageheader.isEnabled()); 
    });
    it('checking isDisplayedInViewport', () => {

        console.log("is page hesder is displayed in view port "+blaze.pageheader.isDisplayedInViewport());
    });
    it('clicking on element if displayed', () => {
        blaze.clickOnLinkIfdisplayed
        browser.pause(5000)
    });
    
});