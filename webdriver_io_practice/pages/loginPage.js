class LoginPage {
    get userTxtfield(){
        return $("#username")
    }
    get passwordTxtfield(){
        return $("#password")
    }
    get loginBtn(){
        return $('//i[@class="fa fa-2x fa-sign-in"]')
    }
    enterUsername(username){
        this.userTxtfield.waitForDisplayed()
        this.userTxtfield.clearValue()
        this.userTxtfield.setValue(username)
    }
    enterPassword(password){
        this.passwordTxtfield.waitForDisplayed()
        this.passwordTxtfield.clearValue()
        this.passwordTxtfield.setValue(password)
    }
    clickOnLoginBtn(){
        this.loginBtn.waitForDisplayed()
        this.loginBtn.click()
    }
}
module.exports = new LoginPage()