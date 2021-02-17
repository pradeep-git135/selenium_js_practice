const contact = require("../pages/contactsPage")
const assert = require("chai").assert
const data = require("../genericUtils/testData/contactsData.json")

describe.skip('automating contacts in v_tiger 01', () => {
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
    it('verifying contact page is displayed', () => {
        contact.mouseOver(contact.contactLink)
        contact.clickOnelement(contact.contactLink)
        assert.equal(browser.getTitle(), "Administrator - Contacts - vtiger CRM 5 - Commercial Open Source CRM")
        
    });
    it('verifying header create new contact', () => {
        contact.clickOnelement(contact.createNewcontact)
        assert.equal(contact.header_newcontact.isDisplayed(), true) 
        browser.pause(3000) 
    });
    it('creating contact without mandetory fields', () => {
        contact.prefix.selectByAttribute("value", "Mr.")
        contact.enterValue(contact.contactTextfield, data.contactName)
        contact.clickOnelement(contact.saveBtn)
        assert.equal(browser.getAlertText(), "Last Name cannot be empty")
        browser.pause(3000)
        browser.acceptAlert()
    });
    it('logingOut', () => {
        contact.mouseOver(contact.adminstretor)
        contact.clickOnelement(contact.logoutBtn)
    });
    
});


describe('automating contacts in v_tiger 01', () => {
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
    it('verifying contact page is displayed', () => {
        contact.mouseOver(contact.contactLink)
        contact.clickOnelement(contact.contactLink)
        assert.equal(browser.getTitle(), "Administrator - Contacts - vtiger CRM 5 - Commercial Open Source CRM")
        
    });
    it('verifying header create new contact', () => {
        contact.clickOnelement(contact.createNewcontact)
        assert.equal(contact.header_newcontact.isDisplayed(), true) 
        browser.pause(3000) 
    });
    it('verifying organization page', () => {
        contact.prefix.selectByAttribute("value", "Mr.")
        contact.enterValue(contact.contactTextfield, data.contactName)
        contact.enterValue(contact.lastnameTextfield, data.lastName)
        contact.clickOnelement(contact.organizationImage)

        const currentTitle = browser.getTitle()
        console.log("current title is : "+currentTitle);
        const handles = browser.getWindowHandles()
        console.log("handles are :"+handles);

        browser.switchToWindow(handles[1])
        browser.pause(3000)
        // browser.maximizeWindow()
        contact.clickOnelement(contact.demoOrglink)

        browser.switchToWindow(handles[0])
        const value = contact.organizationNameTxtfield.getValue()
        console.log(`value inside the textfield is ${value}`);
        assert.equal("demo_Org", value)

        contact.clickOnelement(contact.saveBtn)
        // assert.equal(contact.resultText.getText(), "[ CON1 ] cr Pradeep -  Contact Information")
        assert.include(contact.resultText.getText(), "[ CON1 ] cr Pradeep -  Contact Information")
        assert.include(contact.resultText2.getText(), "Updated today (15 Feb 2021) By  Administrator")



        // for (const handle of handles) {
        //     browser.switchToWindow(handle)
        //     // browser.pause(3000)
        //     const url = browser.getUrl()
        //     console.log("url of the page is : "+url);
        //     // if (title != currentTitle) {
        //     //     break;
        //     // }
        //     // console.log("after break statement :"+browser.getTitle()); 
        // }
    });
    
    
});

// http://localhost:8888/index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing

// http://localhost:8888/index.php?module=Accounts&action=Popup&popuptype=specific_contact_account_address&form=TasksEditView&form_submit=false&fromlink=&recordid=