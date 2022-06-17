//URL--
// https://leetcode.com/problems/binary-search/

//INSTRUCTIONS--
/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 

Constraints:

    1 <= nums.length <= 104
    -104 < nums[i], target < 104
    All the integers in nums are unique.
    nums is sorted in ascending order.


*/

//SOLUTION--
/* 
I am going to check if the middle number is more than, equal to or less than the original number
    if it's equal, return the current index
    if it's less than, set the end to one less than the index
    if it's more than, set the start to one more than the index
repeat until the start index is not less than the end index
return -1 if the number is not found
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    //while start is before or equal to the end
    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        // if the target is equal to the middle, return the current index
        if (nums[middle] === target) {
            return middle
        }
        // if the middle is more than the target, set the end to one less than the middle 
        else if (nums[middle] > target) {
            end = middle - 1
        }
        // if the middle is less than the target, set the start to one more than the middle
        else {
            start = middle + 1
        }
    }
    // if the number is not found, return -1
    return -1
};
//TESTCASES--
console.log(search([-1], -1), 0)
console.log(search([-1, 0, 3, 5, 9, 12], 9), 4)
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1)
console.log(search([-1, 0], -1), 0)
console.log(search([-1, 0, 1, 1], 1), 2)