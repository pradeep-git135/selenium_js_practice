class Contacts {

    get usernametextfield() {return $("//input[@name = 'user_name']")}
    get passwordtextfield() {return $("//input[@name='user_password']")}
    get loginBtn() {return $("#submitButton")}
    get contactLink(){return $("//a[text() = 'Contacts']")}
    get createNewcontact(){return $("//img[@alt='Create Contact...']")}
    get header_newcontact(){return $("//span[text() = 'Creating New Contact']")}
    get prefix(){return $("//select[@name='salutationtype']")}
    get contactTextfield() {return $("//input[@name='firstname']")}
    get saveBtn() {return $("//input[@title='Save [Alt+S]']")}
    get adminstretor(){return $("//img[@src='themes/softed/images/user.PNG']")}
    get logoutBtn(){return $("//a[text() = 'Sign Out']")}
    get lastnameTextfield(){return $('//input[@name="lastname"]')}
    get organizationImage(){return $("//img[contains(@onclick,'return')]")}
    get demoOrglink(){return $("//a[text() = 'demo_Org']")}
    get organizationNameTxtfield(){return $("//input[@name='account_name']")}
    get resultText(){return $("//span[@class='dvHeaderText']")}
    get resultText2(){return $("//span[@class='small']")}

    enterValue(element, value){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(value);
    }

    clickOnelement(element){
        element.waitForDisplayed()
        element.click()
    }
    mouseOver(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    switchwindow(title){
        browser.switchWindow(title)
    }
    switchingbtwwindows(){
        browser.getTitle()
        const handles = browser.getWindowHandles()

        browser.switchToWindow(handle)
    }
    getTextfromelement(element){
        element.getText()
    }
}
module.exports = new Contacts()