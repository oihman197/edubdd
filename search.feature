Feature: Scenario Search in Web

  Scenario: User Search with 'some text'
    Given User get homepage
    When User click search and writes 'some text' and submit
    Then User will get search result page
