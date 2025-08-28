Feature: Product Dashboard Management
  As a logged-in user
  I want to interact with products on the dashboard
  So that I can manage my shopping cart and navigate the application

  Background:
    Given I am logged in to the dashboard

  @smoke @dashboard
  Scenario: Add item to cart
    When I click add to cart button
    Then I should see remove from cart button
    And the item should be added to cart

  @dashboard
  Scenario: Remove item from cart
    Given I add an item to cart
    When I click remove from cart button
    Then I should see add to cart button
    And the item should be removed from cart

  @dashboard
  Scenario: Navigate to shopping cart
    Given I add an item to cart
    When I click on shopping cart icon
    Then I should see shopping cart page

  @smoke @dashboard
  Scenario: User logout functionality
    When I logout from the application
    Then I should be logged out successfully

  @dashboard
  Scenario: Add multiple items and view cart
    When I add an item to cart
    And I navigate to cart
    Then I should see cart icon with badge
    And I should see shopping cart page

  @dashboard
  Scenario: Product catalog verification
    Then I should see products title
    And I should see the dashboard