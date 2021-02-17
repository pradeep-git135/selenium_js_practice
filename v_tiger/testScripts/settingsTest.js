const contact = require("../pages/contactsPage")
const assert = require("chai").assert
const data = require("../genericUtils/testData/contactsData.json")
const setting = require("../pages/settingsPage")

describe('settings automation in v tiger', () => {
    it('verifing loginpage', () => {
        browser.maximizeWindow()
        browser.url(data.url)
        assert.equal(browser.getTitle(), "vtiger CRM 5 - Commercial Open Source CRM")
    });
    it('verifying home page is displayed', () => {
        contact.enterValue(contact.usernametextfield, data.username)
        contact.enterValue(contact.passwordtextfield, data.password)
        contact.clickOnelement(contact.loginBtn)
        assert.equal(browser.getTitle(), "Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM")
    });
    it('verifying setting page is displayed', () => {
        setting.moveToElement(setting.settingButton)
        setting.clickOnElement(setting.crmSettingLink)
        assert.equal(browser.getTitle(), setting.settingPageTitle)
    });

    it('verifying grouplist page shukd be displayed', () => {
        setting.clickOnElement(setting.groupsLink)
        setting.groupsList_element.waitForDisplayed()
        assert.equal(setting.groupsList_element.isDisplayed(), true)
    });

    it('Create new Group page should be opened', () => {
        setting.clickOnElement(setting.newGroupBtn)
        setting.newgroupElement.waitForDisplayed()
        assert.equal(setting.newgroupElement.isDisplayed(), true)
        setting.enterValue(setting.groupNmaeTextfield, "sample")
        setting.entityDropdown.selectByAttribute("value", "groups")
        setting.memsOfentityDropdown.selectByAttribute("value","groups::2")
        setting.clickOnElement(setting.rightArrowBtn)
        // browser.pause(3000)
        // const selected = setting.memsOfselectedDropdown.getText()
        // console.log("text inside the element :"+selected);
        setting.memsOfselectedDropdown.waitForDisplayed()
        assert.equal(setting.memsOfselectedDropdown.isDisplayed(),true)
        setting.clickOnElement(setting.addGroupButton)
        setting.resultElement.waitForDisplayed()
        assert.equal(setting.resultElement.isDisplayed(), true)
    });
    it('logingOut', () => {
        contact.mouseOver(contact.adminstretor)
        contact.clickOnelement(contact.logoutBtn)
    });
    
});