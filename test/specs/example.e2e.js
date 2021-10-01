const {Target} = require('@applitools/eyes-webdriverio')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await browser.eyesCheck('Login Page',Target.window().fully());
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await browser.eyesCheck('Secure Page',Target.window().fully());
        // await expect(SecurePage.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    
    // const testResults = browser.eyesGetTestResults();

    // // example for using the testResults -
    // // fail the test if visual differences were found
    // if (testResults.getStatus() !== 'Passed') {
    //   const testName = `'${testResults.getName()}' of '${testResults.getAppName()}'`
    //   throw new Error(`Test ${testName} detected differences! See details at: ${testResults.getUrl()}`)
    
    // };
});
});

