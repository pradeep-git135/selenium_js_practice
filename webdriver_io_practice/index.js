describe('demo', () => {
    it('practice', () => {
        browser.url("https://www.amazon.in/")
        $('#nav-link-accountList-nav-line-1').moveTo()
        $("//a[@data-nav-ref='nav_signin']").click()
        browser.pause(6000)

    });
    
});