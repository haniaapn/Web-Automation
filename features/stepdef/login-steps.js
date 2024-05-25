import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/login.page.js';

Given('the user is on the "kasirAja" login page', async () => {
    await loginPage.open();
    await expect(browser).toHaveTitle('kasirAja');
});

When('the user enters the email {string} and password {string}', async function (email, password) {
    await loginPage.emailInput.setValue(email);
    await loginPage.passwordInput.setValue(password);
});

When('the user clicks the login button', async () => {
    await loginPage.loginButton.click();
});

// success login
Then('the user should be redirected to the dashboard page', async () => {
    await loginPage.dashboardPageElement.waitForDisplayed({ timeout: 5000 }); 
    await expect(loginPage.dashboardPageElement).toBeDisplayed();
});

// failed login
Then('an error message {string} should be displayed', async function (error_message) {
    await loginPage.errorMsg.waitForDisplayed({ timeout: 5000 });
    await expect(loginPage.errorMsg).toExist();
    await expect(loginPage.errorMsg).toHaveTextContaining(error_message);
});
