Feature: Test flow login and add pelanggan in the "kasirAja" website

  Background:
    Given the user is on the "kasirAja" login page

  Scenario Outline: Unsuccessful login with invalid credentials
    When the user enters the email "<email>" and password "<password>"
    And the user clicks the login button
    Then an error message "<error_message>" should be displayed

    Examples:
      | email         | password | error_message                         |
      | a@gmail.com   | haniaaaa | Kredensial yang Anda berikan salah    |


  Scenario Outline: Successful login
    When the user enters the email "<email>" and password "<password>"
    And the user clicks the login button
    Then the user should be redirected to the dashboard page

    Examples:
      | email                         | password |
      | hania.pratiwi.hpn@gmail.com   | haniates |


Scenario Outline: Fail to add new pelanggan due to missing  name information
    When the user is on dashboard page
    And the user clicks the "pelanggan" menu
    And the user clicks the "tambah" button
    And the user enters nama as "<nama>" and no.hp as "<no_hp>" and alamat as "<alamat>" and keterangan as "<keterangan>"
    And the user clicks the "simpan" button
    Then the user should see an error message

   Examples:
  | nama           | no_hp          | alamat               | keterangan       | 
  |                | 081234567890   | Jl. Merdeka No. 10   | Pelanggan tetap  | 


  Scenario Outline: Add new pelanggan successfully
    When the user is on dashboard page
    And the user clicks the "pelanggan" menu
    And the user clicks the "tambah" button
    And the user enters nama as "<nama>" and no.hp as "<no_hp>" and alamat as "<alamat>" and keterangan as "<keterangan>"
    And the user clicks the "simpan" button
    Then the user should see a success message
    
    Examples:
      | nama           | no_hp          | alamat               | keterangan       |
      | Budi Santoso   | 081234567890   | Jl. Merdeka No. 10   | Pelanggan tetap  | 
      
