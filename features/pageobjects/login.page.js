import Page from '/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/page.js';

class LoginPage extends Page{

    open() {
        super.open('https://kasirdemo.belajarqa.com')
    }
    get emailInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#password');
    }
    get loginButton(){
        return $('button[type="submit"]');
    }

    get dashboardPageElement () {
        return $('//h3[contains(text(),"kasirAja")]');
    }

    get errorMsg(){
        return $("//div[@role='alert']");
    }

}

module.exports = new LoginPage()