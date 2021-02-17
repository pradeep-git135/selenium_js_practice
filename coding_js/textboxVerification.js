const {Builder, Browser, By} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function textboxVerification(){
    (await driver).get("https://opensource-demo.orangehrmlive.com/")
    var userTextfield = await driver.findElement(By.id("txtUsername"))
    var value = await userTextfield.getAttribute("value")
    console.log(value);
    if (value == "") {
        console.log("textField is empty" );
    }else{
        console.log(`textfield is not empty it has the value  + ${value}`);
    }
}
textboxVerification()