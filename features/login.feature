Feature: User Authentication
  As a user of the Swag Labs application
  I want to be able to login with my credentials
  So that I can access the product catalog

  Background:
    Given I am on the login page

  @smoke @login
  Scenario: Successful login with valid credentials
    When I login with valid credentials
    Then I should be redirected to dashboard
    And I should see products title

  @negative @login
  Scenario: Login with invalid password
    When I login with invalid credentials
    Then I should see error message "login_error"
    And I should remain on login page

  @negative @login  
  Scenario: Login with empty username
    When I leave username field empty
    And I enter password "valid_password"
    And I click the login button
    Then I should see error message "username_required_error"

  @negative @login
  Scenario: Login with empty password
    When I enter username "standard_user"
    And I leave password field empty
    And I click the login button
    Then I should see error message "password_required_error"

  @negative @login
  Scenario: Login with locked out user
    When I login with username "locked_out_user" and password "valid_password"
    Then I should see error message "locked_out_error"

  @parametrized @login
  Scenario Outline: Login with different invalid credentials
    When I enter invalid username "<username>"
    And I enter invalid password "<password>"
    And I click the login button
    Then I should see error message "<error_message>"

    Examples:
      | username      | password        | error_message   |
      | invalid_user  | invalid_pass    | login_error     |
      | standard_user | wrong_password  | login_error     |
      | wrong_user    | secret_sauce    | login_error     |