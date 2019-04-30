Feature: Login

  As a user
  I want to identify myself
  In order to use the application

Background:
  Given I go to the Login Page
   Then I should see the Login Form

Scenario: Login form
   Then the Login Form should have a Username Input
    And the Login Form should have a Password Input
    And the Login Form should have a Sign In Button
    And the Sign In Button of the Login Form should be disabled

Scenario Outline: Incorrect credentials
  Given I am <account_type>
   When I type my username into the Username Input of the Login Form
    And I type "badpassword" into the Password Input of the Login Form
    And I click on the Sign In Button of the Login Form
   Then I should see a Warning Message
    And I should see the Login Form
   Examples: 
|   account_type  |
| an unknown user |
|a registered user|
| an administrator|
   
Scenario: User login
  Given I am a registered user
   When I type my username into the Username Input of the Login Form
    And I type my password into the Password Input of the Login Form
    And I click on the Sign In Button of the Login Form
   Then I should not see a Warning Message
    And I should leave the Login Page
   
Scenario: Admin login
  Given I am an administrator
   When I type my username into the Username Input of the Login Form
    And I type my password into the Password Input of the Login Form
    And I click on the Sign In Button of the Login Form
   Then I should not see a Warning Message
    And I should leave the Login Page
