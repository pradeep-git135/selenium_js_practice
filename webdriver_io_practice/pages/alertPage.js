class alertHandling {

    get alertelement() {return $("//button[text() = 'Click for JS Alert']")}
    get alertconfirm() {return $("//button[text() = 'Click for JS Confirm']")}
    get alertprompt() {return $("//button[text() = 'Click for JS Prompt']")}

    clickonelement(element){
        // this.alertelement(index).waitForDisplayed()
        // this.alertelement(index).click()

        element.waitForDisplayed()
        element.click()
    }

    get resultelement(){return $("#result")}

    
}
module.exports = new alertHandling()