const alert = require("../pages/alertPage")

describe('handling alerts', () => {
    // it('alert handling', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://the-internet.herokuapp.com/javascript_alerts")
    //     alert.clickonelement(alert.alertelement)
    //     let alertText = browser.getAlertText()
    //     console.log("text in the alert box is : "+alertText);
    //     browser.acceptAlert()
    //     let resultelementText = alert.resultelement.getText()
    //     console.log("text in the result element is : "+resultelementText);
    //     browser.pause(5000)
    // });
    // it('alert confirm handling', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://the-internet.herokuapp.com/javascript_alerts")
    //     alert.clickonelement(alert.alertconfirm)
    //     let alertText = browser.getAlertText()
    //     console.log("text in the alert box is : "+alertText);
    //     browser.acceptAlert()
    //     let resultelementText = alert.resultelement.getText()
    //     console.log("text in the result element is : "+resultelementText);
    //     browser.pause(5000)
    // });
    it('alert prompt handling', () => {
        browser.maximizeWindow()
        browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        alert.clickonelement(alert.alertprompt)
        let alertText = browser.getAlertText()
        console.log("text in the alert box is : "+alertText);
        browser.sendAlertText("i am accepting a js prompt")
        browser.acceptAlert()
        let resultelementText = alert.resultelement.getText()
        console.log("text in the result element is : "+resultelementText);
        browser.pause(5000)
    });
    
});