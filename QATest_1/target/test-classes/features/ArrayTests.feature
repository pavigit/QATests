Feature: ArrayTests
  As a layman
  I want to program
  So that I can find increasingly ordered sub array length in an unordered array of length N > 0

Scenario Outline: Get increasingly ordered sub array length

Given I input array with "<Array>"
Then the program should return the result "<Result>"
    
Examples:
| 		Array    		|	Result   	|
|1,4,1,4,2,1,3,5,6,2,3,7|		4	   	|
|3,1,4,1,5,9,2,6,5,3,5	| 		3	   	|
|	2,7,1,8,2,8,1		|		2		|