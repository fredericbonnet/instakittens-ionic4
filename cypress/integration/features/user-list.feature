Feature: User List

  I want to access the User List

Scenario: Public access
  Given I am not identified
   When I go to the Users Page
   Then I should be redirected to the Login Page

Scenario: User access
  Given I am a registered user
    And I am identified
   When I go to the Users Page
   Then I should see the User List

Scenario: Admin access
  Given I am an administrator
    And I am identified
   When I go to the Users Page
   Then I should see the User List
