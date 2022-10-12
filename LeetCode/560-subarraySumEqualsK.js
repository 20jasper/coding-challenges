//URL--
// https://leetcode.com/problems/subarray-sum-equals-k/

//INSTRUCTIONS--
/* 
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

 

Constraints:

		1 <= nums.length <= 2 * 104
		-1000 <= nums[i] <= 1000
		-107 <= k <= 107


*/

//SOLUTION--
/* 
This solution has a space complexity of O(1) and a time complexity of O(n^2) where n is the length of the array
*/
const subarraySum = function (nums, k) {
	let total = 0
	for (let i = 0; i < nums.length; i++) {
		let sum = nums[i]
		//if the first number is the target, add one to the total
		if (sum === k) total++
		//iterate over the rest of the array
		for (let j = i + 1; j < nums.length; j++) {
			sum += nums[j]
			if (sum === k) total++
		}
	}
	return total
};
//TESTCASES--
console.log(subarraySum([1, 1, 1], 2), 2);
console.log(subarraySum([1, 2, 3], 3), 2);
console.log(subarraySum([0, 1, -1], 0), 3);

