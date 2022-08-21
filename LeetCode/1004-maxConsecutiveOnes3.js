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
This solution is O(n) for time and O(1) for space where n is the length of the array
*/
/**
 * @param {number[]} nums
 * @param {number} maxFlipCount
 * @return {number}
 */
const longestOnes = function (nums, maxFlipCount) {
	//if all nums can be flipped, return the length of the array
	if (maxFlipCount >= nums.length) return nums.length

	let left = 0
	let flipCount = 0

	//iterate through the string from left to right
	for (let right = left; right < nums.length; right++) {
		const rightNum = nums[right];
		//increment the flipCount if the num is 0
		if (rightNum === 0) flipCount++

		//if too many nums need flipped
		if (flipCount > maxFlipCount) {
			const leftNum = nums[left]
			//decrement the flipCount if the num is 0
			if (leftNum === 0) {
				flipCount--
			}
			//move the left pointer right
			left++
		}
	}
	//return the window size
	return nums.length - left
};
//TESTCASES--
console.log(longestOnes([1], 1), 1);
console.log(longestOnes([1, 0, 1, 0], 1), 3);
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);