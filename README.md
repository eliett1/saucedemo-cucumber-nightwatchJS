# Saucedemo-Cucumber-NightwatchJS

## Introduction

This exercise creates an Automation Testing Environment using Cucumber to write scenarios and NighwatchJS as a main framework considering Page Object pattern.

## Instructions for the excercise

Create a project to automate several features from [Saucedemo](https://www.saucedemo.com) considering:

1. With the **standard_user**, the expected flows that should be automated are:

• Log In

• Log Out

• Add an item to Cart

• Remove an item from the Cart

• Checkout an item in the Cart

2. With the **problem_user**, the expected flows that should be automated are:

• Log In

• Log Out

• Add an item to Cart

• Remove an item from the Cart

• Checkout an item in the Cart


## Preparing environment

1. Clone this repository.
2. Run the following command: 

    ```bash
    npm install 
    ```

## Run Test

1. Run Nightwatch with the following command:  

      ```bash
    npx nightwatch --env cucumber-js --tags "@NameOfTag"
    ```
• With tags, tests can be focused on individual parts of the flow. Tags are located inside the **.feature file**

• Tags: **@login**, **@logout**, **@additems**, **@removeitems**, **@checkout**, **@checkout2**

## Notes

• This project runs with **chromedriver 108.0.0** and with **nightwatch 2.6.7** 

    ```bash
    npm i chromedriver@108.0.0
    ```
    
    ```bash
    npm i nightwatch@2.6.7
    ```


