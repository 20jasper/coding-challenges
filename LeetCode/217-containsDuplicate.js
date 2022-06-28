//URL--
// https://leetcode.com/problems/contains-duplicate/

//INSTRUCTIONS--
/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

		1 <= nums.length <= 105
		-109 <= nums[i] <= 109


*/

//SOLUTION--
/* 
iterate over the array
	if the number exists in the array, return true
	else add the key to the hashmap
return false
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
	const obj = {}
	for (let i = 0; i < nums.length; i++) {
		// if the number exists in the array, return true
		if (obj[nums[i]] === undefined) {
			obj[nums[i]] = true
		}
		// else add the key to the hashmap
		else {
			return true
		}
	}
	//return false if no duplicates are found
	return false
};
//TESTCASES--
console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);