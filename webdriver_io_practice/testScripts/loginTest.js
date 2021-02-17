const expect = require("chai").expect
const assert = require("chai").assert
const login = require("../pages/loginPage")

describe('handling login page', () => {

    it('enering user name', () => {
        browser.url("https://the-internet.herokuapp.com/login")
        login.enterUsername("tomsmith")
        // expect.equal(login.userTxtfield.getValue(),"tomsmith")
        expect(login.userTxtfield.getValue()).equals("tomsmith")
    });

    it('entering password', () => {
        login.enterPassword("SuperSecretPassword")
        assert.equal(login.passwordTxtfield.getValue(), "SuperSecretPassword")
    });

    it('clicking login', () => {
        login.clickOnLoginBtn()
    });
    
});