const {Builder, Browser, By, key} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function login(){
    //loging to orangeHrm by credentials and verifying the title and url

    await driver.get("https://opensource-demo.orangehrmlive.com/")
    await driver.findElement(By.id("txtUsername")).sendKeys("Admin")
    await driver.findElement(By.id("txtPassword")).sendKeys("admin123")
    await (await driver.findElement(By.id("btnLogin"))).click()
    var Title = await driver.getTitle()
    console.log(Title);
    if(Title.includes("OrangeHRM")){
        console.log("title matches");
    }else{
        console.log("title not matched");
    }
    var url = await driver.getCurrentUrl()
    console.log(url);
    var expectedUrl = "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
    if (url == expectedUrl) {
        console.log("url got matched");
    }

    // verifying weather the element is present and displayed or not
    try {
        var webElement = (await driver).findElement(By.xpath("//b[text() = 'Admin']"))
        if ((await webElement).isDisplayed()) {
            console.log("element is present");
        }else{
            console.log("element is not present");
        }
    } catch (error) {
        console.log(error.name);
    }
    (await driver).close()
}
login()