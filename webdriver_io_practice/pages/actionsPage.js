class Actions{
    get loginlink(){
        return $("#ctl00_HyperLinkLogin")
    }
    get spicememeberlink(){
        return $("//a[text() = 'SpiceClub Members']")
    }
    get memberlogin(){
        return $("//li[@class='hide-mobile']/descendant::a[text() = 'Member Login' ]")
    }
    moveToelement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    clcikonelemenyt(element){
        element.waitForDisplayed()
        element.click()
    }


    get searchfield(){
        return $("#target")
    }
    entersearchfield(value){
        this.searchfield.setValue(value)
    }

    get resulttextfield(){
        return $("#result")
    }

    textofresultfield(){
        return this.resulttextfield.getText()
    }
}
module.exports = new Actions()