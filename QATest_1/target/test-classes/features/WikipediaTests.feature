Feature: WikipediaTests
  As a user
  I want to search a string in wikipedia
  So that I can verify that the results are displayed correctly

@JDK  
Scenario: Search a string in wikipedia

Given I navigate to wikipedia home page
And enter string "Harmony" to search
And I select language "English"
When I click Search button
Then the title in the results page should match the search string "Harmony"
And another language "Italiano" link is displayed
When I click the other language "Italiano" link
Then search results page will display "English" language link