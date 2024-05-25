Feature: Test flow add new pelanggan at "kasirAja" website

  Background:
    Given the user is on the "kasirAja" dashboard

  Scenario Outline: Add new pelanggan successfully
    When the user clicks the "pelanggan" button
    And the user clicks the "tambah" button
    And the user enters "<nama>" in the "nama" input field
    And the user enters "<no_hp>" in the "no.hp" input field
    And the user enters "<alamat>" in the "alamat" input field
    And the user enters "<keterangan>" in the "keterangan" input field
    And the user clicks the "simpan" button
    Then the user should see a success message "Item ditambahkan"
    
    Examples:
      | nama           | no_hp          | alamat               | keterangan       |
      | Budi Santoso   | 081234567890   | Jl. Merdeka No. 10   | Pelanggan tetap  |
      | Siti Aisyah    | 081298765432   | Jl. Sudirman No. 20  | Pelanggan baru   |

  Scenario Outline: Fail to add new pelanggan due to missing  name information
    When the user clicks the "pelanggan" button
    And the user clicks the "tambah" button
    And the user enters "<nama>" in the "nama" input field
    And the user enters "<no_hp>" in the "no.hp" input field
    And the user enters "<alamat>" in the "alamat" input field
    And the user enters "<keterangan>" in the "keterangan" input field
    And the user clicks the "simpan" button
    Then the user should see an error message "'name' is not allowed to be empty"

    Examples:
      | nama           | no_hp          | alamat               | keterangan       |
      |                | 081234567890   | Jl. Merdeka No. 10   | Pelanggan tetap  |
