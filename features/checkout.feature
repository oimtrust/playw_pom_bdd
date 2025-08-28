Feature: Checkout Process
  As a customer with items in my cart
  I want to complete the checkout process
  So that I can purchase the selected products

  Background:
    Given I have items in my cart

  @smoke @checkout
  Scenario: Complete checkout process successfully
    When I click checkout button
    And I fill valid checkout information
    And I click continue button
    And I click finish button
    Then I should see thank you message
    And the order should be completed successfully

  @checkout
  Scenario: Navigate through checkout steps
    When I proceed to checkout
    Then I should see checkout information page
    When I fill checkout information with first name "John", last name "Doe", and postal code "12345"
    And I proceed to overview
    Then I should see checkout overview page
    When I complete the order
    Then I should see order completion page

  @checkout
  Scenario: Checkout with detailed information
    When I click checkout button
    Then I should be on checkout information page
    When I enter checkout information:
      | firstName | lastName | postalCode |
      | Jane      | Smith    | 54321      |
    And I click continue button
    Then I should be on checkout overview page
    When I click finish button
    Then I should see order completion page

  @checkout
  Scenario: Return to products after successful checkout
    When I click checkout button
    And I fill checkout information with first name "Test", last name "User", and postal code "00000"
    And I click continue button
    And I click finish button
    And I click back home button
    Then I should return to products page

  @checkout
  Scenario: Verify checkout flow from cart
    Given I am on the cart page with items
    When I proceed to checkout
    Then I should see checkout information page
    When I fill valid checkout information
    And I proceed to overview
    Then I should see checkout overview page