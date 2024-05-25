Feature: Test flow login at "kasirAja" website

  Background:
    Given the user is on the "kasirAja" login page

  Scenario Outline: Unsuccessful login with invalid or empty credentials
    When the user enters the email "<email>" and password "<password>"
    And the user clicks the login button
    Then an error message "<error_message>" should be displayed

    Examples:
      | email         | password | error_message                         |
      | a@gmail.com   | haniaaaa | Kredensial yang Anda berikan salah    |
      |               |          | "email" is not allowed to be empty    |
      |               | bbbb     | "email" is not allowed to be empty    |
      | a@gmail.com   |          | "password" is not allowed to be empty |


  Scenario Outline: Successful login
    When the user enters the email "<email>" and password "<password>"
    And the user clicks the login button
    Then the user should be redirected to the dashboard page

    Examples:
      | email                         | password |
      | hania.pratiwi.hpn@gmail.com   | haniates |
      
