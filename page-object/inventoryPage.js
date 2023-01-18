module.exports = {
    elements: {
        selectedItem:{
            locateStrategy:'xpath',
            selector: '//*[@id="header_container"]/div[2]/span', 
        },
        burgerMenuIcon: {
            selector : '#react-burger-menu-btn'
        },
        logOutBtn: {
            selector :'#logout_sidebar_link'
        },
        cartBtn: {
          selector :'.shopping_cart_link'
        },
        numberInCart: {
          selector :'.shopping_cart_badge',
          
        },
        infoNameItem: {
          locateStrategy:'xpath',
          selector :'//*[@id="item_4_title_link"]/div'
        }
    },
    commands: [{
          inventoryUrl: function() {
            return this.assert.urlContains('/inventory.html')

            },
          loggedInProducts: function(){
            return this.useXpath()
                       .assert.visible('@selectedItem')
          },
          clickBurgerMenu: function(){
            return this.waitForElementVisible('@burgerMenuIcon', 1000)
                        .click('@burgerMenuIcon')
          },
          clickLogOut: function(){
            return this.waitForElementVisible('@logOutBtn', 1000)
                       .click('@logOutBtn')
          },
          clickAddToTheCart: function(selectedItem){
            xpath = '//*[contains(text(),"' + selectedItem + '")]/../../../div[@class="pricebar"]/button[@id="add-to-cart-sauce-labs-backpack"]'
            return this.useXpath()
                        .waitForElementVisible(xpath, 1000)
                        .click(xpath)
          },
          clickRemoveFromCart: function(selectedItem){
            xpath = '//*[contains(text(),"' + selectedItem + '")]/../../../div[@class="pricebar"]/button[@id="remove-sauce-labs-backpack"]'
            return this.useXpath()
                        .waitForElementVisible(xpath, 1000)
                        .click(xpath)
          },          
          checkCartItemNumber: function(){
            return this.waitForElementVisible('@numberInCart', 1000)
                       .assert.containsText("@numberInCart", "1"); 
          },
          clickToTheCart: function(){
            return this.waitForElementVisible('@cartBtn', 1000)
                        .click('@cartBtn')
          }       
          
        }
    ]
    
};