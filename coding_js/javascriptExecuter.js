const {Builder, Browser, By} = require("selenium-webdriver")
const driver = new Builder().forBrowser(Browser.CHROME).build()

async function jsExecuter() {
    // alert and scrollBy 
    // await driver.manage().window().maximize()
    // await driver.get("https://skillrary.com/")
    // await driver.sleep(2000)
    // // driver.executeScript("alert('hello from the test')")  
    // // for(var i = 0; i<5; i++){
    // //     await driver.executeScript("window.scrollBy(0,1000)")  
    // // }
    // var element = await driver.findElement(By.xpath("//a[text() = 'TALK TO OUR EXPERTS']"))
    // var position = await element.getRect()
    // console.log(position);
    // console.log(typeof(position.x));
    // await driver.executeScript(`window.scrollBy(${position.x}, ${position.y})`)

    //enteringvalue to textfield without using dendkeys()
    // await driver.get("https://opensource-demo.orangehrmlive.com/")
    // await driver.executeScript("document.getElementById('txtUsername').value = 'Admin' ")
}
jsExecuter()