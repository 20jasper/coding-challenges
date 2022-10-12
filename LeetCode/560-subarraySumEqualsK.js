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

//SOLUTION--
/* 
The running sum at any index i - the running sum at another index j shows gives us the running sum from i to j

For example for array `[-1, 1, 2, 3, 6]`, the running sums at each index would be `[-1, 0, 2, 5, 11]`, so if we wanted to get the sum of the numbers between the 2nd and 4th index, we can just subtract 11-2 and get 9, and checking back in the original array, 3+6 is indeed 9.

So to solve this problem, we need to find each pair i and j where i-j =k and each time a running sum is k
This solution has a space complexity of O(n) and a time complexity of O(n) where n is the length of the array
*/
const subarraySum2 = function (nums, k) {
	let total = 0
	let sum = 0
	//get frequencies of each running sum
	const hashMap = {}
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (sum === k) total++
		//Get the amount of complementary sums in the hashmap
		const sumFrequency = hashMap[sum - k]
		if (sumFrequency !== undefined) total += sumFrequency
		//update the frequency of the sum in the hashMap
		if (hashMap[sum] === undefined) hashMap[sum] = 1
		else hashMap[sum]++
	}
	return total
};
//TESTCASES--
console.log(subarraySum2([1, 1, 1], 2), 2);
console.log(subarraySum2([1, 2, 3], 3), 2);
console.log(subarraySum2([0, 1, -1], 0), 3);
console.log(subarraySum2([-2, 2, 0, 4, 5], 4), 3);
console.log(subarraySum2([-1, 1, 2, 3, 6], 6), 2);
