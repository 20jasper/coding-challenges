//URL--
// https://leetcode.com/problems/3sum/

//INSTRUCTIONS--
/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

 

Constraints:

		0 <= nums.length <= 3000
		-105 <= nums[i] <= 105


*/

//SOLUTION--
/* 
The first solution that comes to mind is using a triply nested for loop and just check if they all add up to 0
This solution is O(n^3) for time and O(1) for space where n is the length of the array
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
	const res = []
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				const num1 = array[i];
				const num2 = array[j];
				const num3 = array[k];

				if (num1 + num2 + num3 === 0) {
					res.push([num1, num2, num3])
				}
			}
		}
	}
	return res
};
//TESTCASES--
console.log(threeSum([0, 1, 1]), []);
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);