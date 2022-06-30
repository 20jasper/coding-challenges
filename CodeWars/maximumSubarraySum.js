//URL--
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/

//INSTRUCTIONS--
/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

//SOLUTION--
/* 
*/
const maxSequence = function (nums) {
	if (nums.length === 0) {
		return 0
	}
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
	if (maxSum < 0) {
		return 0
	}
	//return the max sum
	return maxSum
};
//TESTCASES--
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([]), 0);
console.log(maxSequence([-1]), 0);