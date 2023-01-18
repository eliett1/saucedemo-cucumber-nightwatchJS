module.exports = {
    elements: {
        firstNameField: {
            selector : '#first-name'
        },
        lastNameField: {
            selector :'#last-name'
        },
        zipField: {
          selector :'#postal-code'
        },
        continueBtn: {
          selector :'#continue'
        }
    },
    commands: [{
          checkOutUrl: function() {
            return this.assert.urlContains('/checkout-step-one.html')

            },
          typeFirstName: function(firstName){
            return this.setValue('@firstNameField', firstName)
          },
          typeLastName: function(lastName){
            return this.setValue('@lastNameField', lastName)
          },
          typeZip: function(zip){
            return this.setValue('@zipField', zip)
          },
          clickContinue: function(){
            return this.waitForElementVisible('@continueBtn', 1000)
                       .click('@continueBtn')
          }
        }
    ]
    
};