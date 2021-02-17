class Settings {
    get settingButton(){return $("//img[@src='themes/softed/images/mainSettings.PNG']")}
    get crmSettingLink(){return $("//a[text() = 'CRM Settings']")}
    settingPageTitle = "Administrator - Settings - vtiger CRM 5 - Commercial Open Source CRM"

    get groupsLink(){return $("//a[contains(text(),'Groups')]")}
    get groupsList_element(){return $("//strong[text()='Groups List']")}
    get newGroupBtn(){return $("//input[@title='New Group']")}
    get newgroupElement(){return $("//strong[text() = 'New Group']")}
    get groupNmaeTextfield(){return $("#groupName")}

    get entityDropdown(){return $("#memberType")}
    // value groups
    get memsOfentityDropdown(){return $("#availList")}
    // value groups::2

    get rightArrowBtn(){return $("//input[@name='Button']")}

    get memsOfselectedDropdown(){return $('//select[@id="selectedColumns"]//option[@value="groups::2"]')}

    get addGroupButton(){return $("//input[@name='add']")}

    get resultElement(){return $("//strong[contains(text(),'Properties of ')]")}


    moveToElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }
    clickOnElement(element){
        element.waitForDisplayed()
        element.click()
    }
    enterValue(element,value){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(value)
    }

}
module.exports = new Settings()