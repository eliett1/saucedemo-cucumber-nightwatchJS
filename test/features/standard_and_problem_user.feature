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

