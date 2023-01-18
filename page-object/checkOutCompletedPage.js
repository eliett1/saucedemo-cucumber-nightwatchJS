module.exports = {
    elements: {
        infoCompleted: {
            selector : '.complete-header'
        },
        errorMsg: {
            selector : '.error-message-container'
          }
    },
    commands: [{
          checkOutCompletedUrl: function() {
            return this.assert.urlContains('/checkout-complete.html')
            },
          completedInfo: function(message){
            return this.waitForElementVisible('@infoCompleted', 1000)
                       .assert.containsText("@infoCompleted", message); 
            },
          checkErrorMsg: function(message){
            return this.waitForElementVisible('@errorMsg', 1000)
                       .assert.containsText("@errorMsg", message);
          }
        }
    ]
    
};