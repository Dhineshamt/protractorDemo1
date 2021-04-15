const fetch = require('node-fetch');

describe('angularjs homepage todo list', function() {
    it('should launch app', async () => {
      await browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
      await element(by.model('Auth.user.name')).sendKeys('angular');
      await element(by.model('Auth.user.password')).sendKeys('password');
      await element(by.model('model[options.key]')).sendKeys('angular');
      await element(by.css('button.btn')).click();
      const elmtTxt = await element(by.css('h1.ng-scope'));
      expect(await elmtTxt.getText()).toEqual('Home');
    })
});