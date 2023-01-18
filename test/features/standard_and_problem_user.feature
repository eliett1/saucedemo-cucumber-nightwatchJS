Feature: Saucedemo 
Background: Someone use Chrome to visit Saucedemo

  @login
  Scenario Outline: Log in
  Given A user is in saucedemo
  When A user enters the username <user> and password <pass>
  Then the url will contains the inventory subdirectory
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @logout
  Scenario Outline: Log out
  Given A user is in saucedemo
  When A user enters the username <user> and password <pass>
  Then the url will contains the inventory subdirectory
  When A user click burger menu
  And press Log out
  Then A user return to main page
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @additems  
  Scenario Outline: Add items
  Given A user is in saucedemo
  When A user enters the username <user> and password <pass>
  Then the url will contains the inventory subdirectory
  When A user clicks ADD TO THE CART of an item
  Then A user can see the cart with a 1
  When A user clicks to the cart
  Then A user can see the selected item in the cart
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @removeitems
  Scenario Outline: Remove item from the cart
  Given A user is in saucedemo
  When A user enters the username <user> and password <pass>
  Then the url will contains the inventory subdirectory
  When A user clicks ADD TO THE CART of an item
  Then A user can see the cart with a 1
  When A user clicks on REMOVE to unselect an item that it is already in the cart  
  Examples:
      |user           |pass          |
      |"standard_user"|"secret_sauce"|
      |"problem_user" |"secret_sauce"|

  @checkout
  Scenario Outline: Checkout
  Given A user is in saucedemo
  When A user enters the username <user> and password <pass>
  Then the url will contains the inventory subdirectory
  When A user clicks ADD TO THE CART of an item
  Then A user can see the cart with a 1
  When A user clicks to the cart
  Then A user can see the selected item in the cart
  When A user clicks CHECKOUT btn
  And A user enters firstName <firstName> lastName <lastName> and zip <zip>
  And A user clicks CONTINUE btn
  Then A user can check Item, Shipping and Cost information
  When A user clicks FINISH btn
  Then The message "THANK YOU FOR YOUR ORDER" is displayed
  Examples:
      |user           |pass          |firstName |lastName |zip    |
      |"standard_user"|"secret_sauce"|"Testing" |"Person" |"1111" |
      |"problem_user" |"secret_sauce"|"Problen" |"User"   |"1111" |
