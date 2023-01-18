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

Then(/^the url will contains the inventory subdirectory$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
              .inventoryUrl()
              .loggedInProducts()
  });
  
  When(/^A user click burger menu$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
              .clickBurgerMenu()
  });
  
  When(/^press Log out$/, function() {
  var inventoryPage = browser.page.inventoryPage()
  inventoryPage
            .clickLogOut()
  });
  
  Then(/^A user return to main page$/, function() {
    var loginPage = browser.page.loginPage()
    loginPage
              .checkLoginUrl()
    });
  
  When(/^A user clicks ADD TO THE CART of an item$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
              .clickAddToTheCart(selectedItem)
  
  });
    
  Then(/^A user can see the cart with a 1$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
              .checkCartItemNumber()
  
  });
  
  When(/^A user clicks to the cart$/, function() {
      var inventoryPage = browser.page.inventoryPage()
      inventoryPage
                .clickToTheCart()
  });