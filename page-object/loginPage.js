module.exports = {
    url: 'https://www.saucedemo.com/',
    elements: {
        usernameField: '#user-name',
        passwordField: '#password',
        loginBtn: '#login-button'
    },
    commands: [{
        login : function(username, password){
            return this.setValue('@usernameField', username)
                        .setValue('@passwordField', password)
                        .click('@loginBtn');
        },
    
        checkLoginUrl: function() {
            return this.waitForElementVisible('@usernameField', 1000)
                       .assert.visible('@usernameField')
        }
    }]
    };