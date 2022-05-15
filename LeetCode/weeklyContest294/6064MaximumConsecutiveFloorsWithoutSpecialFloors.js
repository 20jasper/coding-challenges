//URL--
// https://leetcode.com/contest/weekly-contest-293/problems/maximum-consecutive-floors-without-special-floors/

//INSTRUCTIONS--
/* 

Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.

You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

Return the maximum number of consecutive floors without a special floor.

 

Example 1:

Input: bottom = 2, top = 9, special = [4,6]
Output: 3
Explanation: The following are the ranges (inclusive) of consecutive floors without a special floor:
- (2, 3) with a total amount of 2 floors.
- (5, 5) with a total amount of 1 floor.
- (7, 9) with a total amount of 3 floors.
Therefore, we return the maximum number which is 3 floors.

Example 2:

Input: bottom = 6, top = 8, special = [7,6,8]
Output: 0
Explanation: Every floor rented is a special floor, so we return 0.

 

Constraints:

    1 <= special.length <= 105
    1 <= bottom <= special[i] <= top <= 109
    All the values of special are unique.


*/

//SOLUTION--
/* I am going to sort the special floor array
Then I will check the number of normal floors before a special floor is reached
    I will make a variable for the max number of floors without a special floor and initialize it to 0
    Then I will check if the first special floor - bottom is more than the current max number
        if so, set max equal to the result
    Then I will check if top - the last special floor is more than the current max number
        if so, set max equal to the result
    Then I will loop through the special numbers
        If the next special floor - the current special floor - 1 is more than the max, then set the max to the result
return the max
*/
const maxConsecutive = function (bottom, top, special) {
    const specialSorted = special.sort((a, z) => a - z)
    let max = 0
    if (specialSorted[0] - bottom > max) {
        max = special[0] - bottom
    }
    if (top - specialSorted.slice(-1) > max) {
        max = top - specialSorted.slice(-1)
    }
    for (let i = 0; i < specialSorted.length - 1; i++) {
        const currentFloor = specialSorted[i];
        const nextFloor = specialSorted[i + 1];
        if (nextFloor - currentFloor - 1 > max) {
            max = nextFloor - currentFloor - 1
        }
    }
    return max
};
//TESTCASES--
console.log(maxConsecutive(bottom = 2, top = 9, special = [4, 6]), 3);
console.log(maxConsecutive(bottom = 2, top = 6, special = [5]), 3);
console.log(maxConsecutive(bottom = 2, top = 11, special = [5]), 6);
console.log(maxConsecutive(bottom = 2, top = 12, special = [5, 11]), 5);
console.log(maxConsecutive(bottom = 6, top = 8, special = [7, 6, 8]), 0);