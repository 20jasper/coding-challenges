//URL--
// https://leetcode.com/problems/max-consecutive-ones-iii/

//INSTRUCTIONS--
/* 
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

 

Constraints:

		1 <= nums.length <= 105
		nums[i] is either 0 or 1.
		0 <= k <= nums.length


*/

//SOLUTION--
/* 
*/
/**
 * @param {number[]} nums
 * @param {number} maxFlips
 * @return {number}
 */
const longestOnes = function (nums, maxFlips) {
	//iterate through the string from left to right
	//move the right pointer right
		//if the subarray is invalid, move the left pointer right
	//return the window size
};
//TESTCASES--
console.log(longestOnes([1], 1), 1);
console.log(longestOnes([1, 0, 1, 0], 1), 3);
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);