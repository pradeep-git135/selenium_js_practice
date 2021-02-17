// const contact = require("../pages/contactsPage")
const assert = require("chai").assert
// const data = require("../genericUtils/testData/contactsData.json")
// describe('', () => {
//     it('verifing loginpage', () => {
//         browser.maximizeWindow()
//         browser.url(data.url)
//         assert.equal(browser.getTitle(), "vtiger CRM 5 - Commercial Open Source CRM")
//     });
//     it('verifying home page is displayed', () => {
//         contact.enterValue(contact.usernametextfield, data.username)
//         contact.enterValue(contact.passwordtextfield, data.password)
//         contact.clickOnelement(contact.loginBtn)
//         assert.equal(browser.getTitle(), "Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM")
//     });
//     it('verifying contact page is displayed', () => {
//         contact.mouseOver(contact.contactLink)
//         contact.clickOnelement(contact.contactLink)
//         assert.equal(browser.getTitle(), "Administrator - Contacts - vtiger CRM 5 - Commercial Open Source CRM")

// const { assert } = require("chai");

        
//     });
//     it('verifying header create new contact', () => {
//         contact.clickOnelement(contact.createNewcontact)
//         assert.equal(contact.header_newcontact.isDisplayed(), true) 
//         browser.pause(3000) 
//     });

//     it('', () => {
//         $("//img[contains(@onclick,'return')]").waitForDisplayed()
//         $("//img[contains(@onclick,'return')]").click()
//         browser.getTitle()
//         const handles = browser.getWindowHandles()
//         console.log(handles);
//         // browser.switchToWindow(handle)
        
//     });
    
// });
describe('launching browser', () => {
    it('navigating to any application', () => {
        browser.url("https://www.chaijs.com/api/assert/")
        assert.equal(browser.getTitle(), "Assert - Chai###")
    });
});