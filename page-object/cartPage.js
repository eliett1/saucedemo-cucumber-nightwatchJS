module.exports = {
    elements: {
        itemInfor:{
            locateStrategy:'xpath',
            selector: '//*[@id="item_4_title_link"]/div', 
        },
        removeItemBtn: {
            selector : '#remove-sauce-labs-backpack'
        },
        checkOutBtn: {
            selector :'#checkout'
        }
    },
    commands: [{
          cartPageUrl: function() {
            return this.assert.urlContains('/cart.html')

            },
          itemInfo: function(itemInfo){
            return this.useXpath()
                       .assert.visible('@itemInfor')
                       .assert.containsText("@itemInfor", itemInfo); 
          },
          //clickRemoveItem: function(){
           // return this.waitForElementVisible('@removeItemBtn', 1000)
           //             .click('@removeItemBtn')
          //},
          checkout: function(){
            return this.waitForElementVisible('@checkOutBtn', 1000)
                       .click('@checkOutBtn')
          }
        }
    ]
    
};