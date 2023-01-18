const {Given, Then, When, Before} = require('@cucumber/cucumber');

selectedItem = "Sauce Labs Backpack"
shippingInfo = "FREE PONY EXPRESS DELIVERY!"
totalPrice = "32.39"

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

Then(/^A user can see the selected item in the cart$/, function() {
    var cartPage = browser.page.cartPage()
    cartPage
             .cartPageUrl()
             .itemInfo(selectedItem)
  });

When(/^A user clicks on REMOVE to unselect an item that it is already in the cart$/, function() {
    var inventoryPage = browser.page.inventoryPage()
    inventoryPage
             .clickRemoveFromCart(selectedItem)
});


When(/^A user clicks CHECKOUT btn$/, function() {
    var cartPage = browser.page.cartPage()
    cartPage
            .checkout()
});

When(/^A user enters firstName "(.*?)" lastName "(.*?)" and zip "(.*?)"$/, function(firstName, lastName, zipCode) {
  var checkOutInfoPage = browser.page.checkOutInfoPage()
  checkOutInfoPage
            .checkOutUrl()
            .typeFirstName(firstName)
            .typeLastName(lastName)
            .typeZip(zipCode)
});

When(/^A user clicks CONTINUE btn$/, function() {
  var checkOutInfoPage = browser.page.checkOutInfoPage()
  checkOutInfoPage
            .clickContinue()
});

Then(/^A user can check Item, Shipping and Cost information$/, function() {
  var checkOutOverviewPage = browser.page.checkOutOverviewPage()
  checkOutOverviewPage
          .checkoutOverviewUrl()
          .checkItemInfo(selectedItem)
          .checkShippingInfo(shippingInfo)
          .checkTotalInfo(totalPrice)
            
});

When(/^A user clicks FINISH btn$/, function() {
  var checkOutOverviewPage = browser.page.checkOutOverviewPage()
  checkOutOverviewPage
            .clickFinishBtn()
});

Then(/^The message "([^"]*)" is displayed$/, function(message) {
  var checkOutCompletedPage = browser.page.checkOutCompletedPage()
  checkOutCompletedPage
            .checkOutCompletedUrl()
            .completedInfo(message)
});

Then(/^The error message "([^"]*)" is displayed$/, function(message) {
  var checkOutCompletedPage = browser.page.checkOutCompletedPage()
  checkOutCompletedPage
            .checkErrorMsg(message)
});