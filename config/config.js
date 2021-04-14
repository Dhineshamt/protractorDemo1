exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec1.js'],
    capabilities: {
        'browserName': 'chrome'
      },
      directConnect: false,
      // allScriptsTimeout: 20000,
      SELENIUM_PROMISE_MANAGER: false,
      onPrepare() {
        browser.waitForAngularEnabled(true);
      }
  };