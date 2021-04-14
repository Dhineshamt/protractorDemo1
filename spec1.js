const fetch = require('node-fetch');

describe('angularjs homepage todo list', function() {
  // it('should add a todo', function() {
  //   browser.get('https://angularjs.org');

  //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   element(by.css('[value="add"]')).click();

  //   var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual('write first protractor test');

  //   // You wrote your first test, cross it off the list
  //   todoList.get(2).element(by.css('input')).click();
  //   var completedAmount = element.all(by.css('.done-true'));
  //   expect(completedAmount.count()).toEqual(2);
  // });

  beforeAll(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  });

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