const expect = require("chai").expect
const checkbox = require("E:/selenium_js_practice/webdriver_io_practice/pages/chechboxHandlingPage.js")
describe('', () => {
    it('url test', () => {
        browser.url("https://the-internet.herokuapp.com/")
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/")
    });
    it('checkbox 1 click', () => {
        browser.url("https://the-internet.herokuapp.com/")
        browser.maximizeWindow()
        checkbox.clickOncheckbox()
        checkbox.clickOncheckbox1()
        expect(checkbox.checkbox1().isSelected()).equals(true)
        browser.pause(5000)
    });
    it('checking header text', () => {
        checkbox.header.waitForDisplayed()
        let textvalue = checkbox.header.getText()
        expect(textvalue).equals("Checkboxes&&&&")
    });
    
});