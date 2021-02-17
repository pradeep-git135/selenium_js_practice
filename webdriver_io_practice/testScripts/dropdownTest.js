const facebook = require("../pages/dropdownpage")
describe('dropdown handling', () => {
    it('selectbyattribute', () => {
        browser.maximizeWindow()
        browser.url("https://www.facebook.com/")
        facebook.clickonelement(facebook.crateaccElement)
        $("#day").waitForDisplayed() 
        $("#day").selectByAttribute("value", "29")
        $("#month").selectByAttribute("value", "6")
        const text = $("#month").getValue() 
        console.log(text);      
        $("#year").selectByAttribute("value", "1996")
        browser.pause(5000)
    });
    // it('selectbyindex', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://www.facebook.com/")
    //     facebook.clickonelement(facebook.crateaccElement)
    //     $("#day").waitForDisplayed() 
    //     $("#day").selectByIndex(29)
    //     $("#month").selectByIndex(6)
    //     $("#year").selectByIndex(25)
    //     browser.pause(5000)
    // });
    // it('selectbyvisibletext', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://www.facebook.com/")
    //     facebook.clickonelement(facebook.crateaccElement)
    //     $("#day").waitForDisplayed() 
    //     $("#day").selectByVisibleText("29")
    //     $("#month").selectByVisibleText("Jun")
    //     $("#year").selectByVisibleText("1996")
    //     browser.pause(5000)
    // });
});
