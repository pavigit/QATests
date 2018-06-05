$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ArrayTests.feature");
formatter.feature({
  "line": 1,
  "name": "ArrayTests",
  "description": "As a layman\r\nI want to program\r\nSo that I can find increasingly ordered sub array length in an unordered array of length N \u003e 0",
  "id": "arraytests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Get increasingly ordered sub array length",
  "description": "",
  "id": "arraytests;get-increasingly-ordered-sub-array-length",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I input array with \"\u003cArray\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the program should return the result \"\u003cResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "arraytests;get-increasingly-ordered-sub-array-length;",
  "rows": [
    {
      "cells": [
        "Array",
        "Result"
      ],
      "line": 12,
      "id": "arraytests;get-increasingly-ordered-sub-array-length;;1"
    },
    {
      "cells": [
        "1,4,1,4,2,1,3,5,6,2,3,7",
        "4"
      ],
      "line": 13,
      "id": "arraytests;get-increasingly-ordered-sub-array-length;;2"
    },
    {
      "cells": [
        "3,1,4,1,5,9,2,6,5,3,5",
        "3"
      ],
      "line": 14,
      "id": "arraytests;get-increasingly-ordered-sub-array-length;;3"
    },
    {
      "cells": [
        "2,7,1,8,2,8,1",
        "2"
      ],
      "line": 15,
      "id": "arraytests;get-increasingly-ordered-sub-array-length;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Get increasingly ordered sub array length",
  "description": "",
  "id": "arraytests;get-increasingly-ordered-sub-array-length;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I input array with \"1,4,1,4,2,1,3,5,6,2,3,7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the program should return the result \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1,4,1,4,2,1,3,5,6,2,3,7",
      "offset": 20
    }
  ],
  "location": "ArrayTestsStepDefinitions.i_input_array_with(String)"
});
formatter.result({
  "duration": 4502250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 38
    }
  ],
  "location": "ArrayTestsStepDefinitions.the_program_should_return_the_result(String)"
});
formatter.result({
  "duration": 102657,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get increasingly ordered sub array length",
  "description": "",
  "id": "arraytests;get-increasingly-ordered-sub-array-length;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I input array with \"3,1,4,1,5,9,2,6,5,3,5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the program should return the result \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3,1,4,1,5,9,2,6,5,3,5",
      "offset": 20
    }
  ],
  "location": "ArrayTestsStepDefinitions.i_input_array_with(String)"
});
formatter.result({
  "duration": 171095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 38
    }
  ],
  "location": "ArrayTestsStepDefinitions.the_program_should_return_the_result(String)"
});
formatter.result({
  "duration": 100213,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get increasingly ordered sub array length",
  "description": "",
  "id": "arraytests;get-increasingly-ordered-sub-array-length;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I input array with \"2,7,1,8,2,8,1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the program should return the result \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2,7,1,8,2,8,1",
      "offset": 20
    }
  ],
  "location": "ArrayTestsStepDefinitions.i_input_array_with(String)"
});
formatter.result({
  "duration": 164740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "ArrayTestsStepDefinitions.the_program_should_return_the_result(String)"
});
formatter.result({
  "duration": 108034,
  "status": "passed"
});
formatter.uri("WikipediaTests.feature");
formatter.feature({
  "line": 1,
  "name": "WikipediaTests",
  "description": "As a user\r\nI want to search a string in wikipedia\r\nSo that I can verify that the results are displayed correctly",
  "id": "wikipediatests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Search a string in wikipedia",
  "description": "",
  "id": "wikipediatests;search-a-string-in-wikipedia",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@JDK"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter string \"Harmony\" to search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select language \"English\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Search button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the title in the results page should match the search string \"Harmony\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "another language \"Italiano\" link is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click the other language \"Italiano\" link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "search results page will display \"English\" language link",
  "keyword": "Then "
});
formatter.match({
  "location": "WikiTestsStepDefinitions.i_navigate_to_wikipedia_home_page()"
});
formatter.result({
  "duration": 78191513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harmony",
      "offset": 14
    }
  ],
  "location": "WikiTestsStepDefinitions.enter_string_to_search(String)"
});
formatter.result({
  "duration": 228098829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 19
    }
  ],
  "location": "WikiTestsStepDefinitions.i_select_language(String)"
});
formatter.result({
  "duration": 388464464,
  "status": "passed"
});
formatter.match({
  "location": "WikiTestsStepDefinitions.i_click_Search_button()"
});
formatter.result({
  "duration": 1935096722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harmony",
      "offset": 62
    }
  ],
  "location": "WikiTestsStepDefinitions.the_title_in_the_results_page_should_match_the_search_string(String)"
});
formatter.result({
  "duration": 230496607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italiano",
      "offset": 18
    }
  ],
  "location": "WikiTestsStepDefinitions.another_language_link_is_displayed(String)"
});
formatter.result({
  "duration": 191615452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italiano",
      "offset": 28
    }
  ],
  "location": "WikiTestsStepDefinitions.i_click_the_other_language_link(String)"
});
formatter.result({
  "duration": 1367595730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 34
    }
  ],
  "location": "WikiTestsStepDefinitions.search_results_page_will_display_language_link(String)"
});
formatter.result({
  "duration": 270577872,
  "status": "passed"
});
});