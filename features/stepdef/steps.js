import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/login.page.js';
import dashboardPage from '/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/dashboard.page.js';

const DashboardPage = require('/Users/haniapn/Documents/sanber/web-automation/features/pageobjects/dashboard.page.js');

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
    await expect(loginPage.dashboardPageElement).toBeDisplayed();
});

// failed login
Then('an error message {string} should be displayed', async function (error_message) {
    await expect(loginPage.errorMsg).toExist();
    await expect(loginPage.errorMsg).toHaveTextContaining(error_message);
});


Given('the user is on dashboard page', async() => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});

When('the user clicks the "pelanggan" menu', async() => {
    await  dashboardPage.btnPelanggan.click()
});

When('the user clicks the "tambah" button', async() => {
    await dashboardPage.btnAddPelanggan.click()
});

When('the user enters nama as {string} and no.hp as {string} and alamat as {string} and keterangan as {string}', async function(nama,no_hp,alamat,keterangan){
    await dashboardPage.namaInput.setValue(nama);
    await dashboardPage.noHpInput.setValue(no_hp);
    await dashboardPage.alamatInput.setValue(alamat);
    await dashboardPage.keteranganInput.setValue(keterangan);
});

When('the user clicks the "simpan" button', async() =>{
    await dashboardPage.btnSimpan.click();
    //await DashboardPage.errorMsg.waitForDisplayed({ timeout: 5000 });
})

//add success
Then('the user should see a success message', async () => {
    //await dashboardPage.message.waitForDisplayed({ timeout: 5000 });
    await expect(dashboardPage.message).toExist();
});

//add failed
Then('the user should see an error message', async function () {
    await expect(dashboardPage.errorMsg).toExist();
});










