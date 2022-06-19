//URL--
// https://leetcode.com/problems/maximum-subarray/

//INSTRUCTIONS--
/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

 

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

*/

//SOLUTION--
/* 

Set the first number to the current largest sum
Iterate through the array 
    if the current sum is less than 0, set the current sum to the current number
    else, add the number to the current sum
    if the current sum is more than the max sum, set the max sum equal to the current sum
return the max sum
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let currentSum = nums[0]
    let maxSum = currentSum
    for (let i = 1; i < nums.length; i++) {
        // if the current sum is less than 0, set the current sum to the current number
        if (currentSum < 0) {
            currentSum = nums[i]
        }
        //else, add the number to the current sum
        else {
            currentSum += nums[i]
        }
        // if the current sum is more than the max sum, set the max sum equal to the current sum
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    //return the max sum
    return maxSum
};
//TESTCASES--
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([-2]), -2);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);