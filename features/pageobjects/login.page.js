import Page from '/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/page.js';

//const Page = require('./page.js')

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
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3');
    }
    
    open() {
        super.open('https://kasirdemo.belajarqa.com')
    }

}

module.exports = new LoginPage()