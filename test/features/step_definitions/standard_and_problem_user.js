const {Given, Then, When, Before} = require('@cucumber/cucumber');



Given(/^A user is in saucedemo$/, function() {
  var loginPage = browser.page.loginPage()
  loginPage
            .navigate()
});

When(/^A user enters the username "(.*?)" and password "(.*?)"$/, function(user, pass) {
  var loginPage = browser.page.loginPage()
  loginPage
            .checkLoginUrl()
            .login(user,pass)
});