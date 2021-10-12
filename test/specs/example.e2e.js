const {Target} = require('@applitools/eyes-webdriverio5-service')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://demo.applitools.com/index_v2.html`)
        await browser.eyesCheck('Login Page',Target.window().fully());

        const loginButton = await browser.$('#log-in');
        await loginButton.click();
        await browser.eyesCheck('Login Page',Target.window().fully());

    
        const testResults = await browser.eyesGetTestResults();

     // example for using the testResults -
     // fail the test if visual differences were found
     if (testResults.getStatus() !== 'Passed') {
       const testName = `'${testResults.getName()}' of '${testResults.getAppName()}'`
       throw new Error(`Test ${testName} detected differences! See details at: ${testResults.getUrl()}`)
    
     };
});
});

