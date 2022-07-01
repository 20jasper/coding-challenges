//URL--
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

//INSTRUCTIONS--
/* Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

 

Constraints:

		2 <= numbers.length <= 3 * 104
		-1000 <= numbers[i] <= 1000
		numbers is sorted in non-decreasing order.
		-1000 <= target <= 1000
		The tests are generated such that there is exactly one solution.


*/

//SOLUTION--
/* 
Since the solution must use constant space, I won't use a hashmap to store any values
iterate through the array
	check if any of the elements after the current element + the current element add up to target
		if so, return the indices + 1 of each element in an array
		else go on to the next element
This solution is O(n^2) time complexity and O(1) space complexity
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
	//iterate through the array
	for (let left = 0; left < numbers.length; left++) {
		const leftNum = numbers[left];
		//iterate through the array starting from the element after the current left element
		for (let right = left + 1; right < numbers.length; right++) {
			const rightNum = numbers[right];
			//if the left and right number add up to the target, return the indices incremented by one in an array
			if (rightNum + leftNum === target) {
				return [left + 1, right + 1]
			}
		}
	}
};
console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);
console.log(twoSum([2, 3, 4], 6), [1, 3]);
console.log(twoSum([-1, 0], -1), [1, 2]);
console.log(twoSum([0, 0], 0), [1, 2]);
//optimization
/*
To optimize this function, I will start one pointer at the start of the array and another at the end
iterate through the array
	forever
		if the left and right number add up to the target, return the indices incremented by one in an array
		If the sum is more than the target, increment the left pointer
		if the sum is less than the target, decrement the right pointer

This solution is O(n) time complexity and O(1) space complexity
*/
const twoSum2 = function (numbers, target) {
	let left = 0;
	let right = numbers.length - 1
	//forever
	while (true) {
		const leftNum = numbers[left];
		const rightNum = numbers[right];
		const sum = leftNum + rightNum
		// if the sum is equal to the target, return the indices incremented by one in an array
		if (sum === target) {
			return [left + 1, right + 1]
		}
		// If the sum is more than the target, increment the left pointer
		else if (sum > target) {
			right--
		}
		// if the sum is less than the target, decrement the right pointer
		else {
			left++
		}
	}
};
//TESTCASES--
console.log(twoSum2([2, 7, 11, 15], 9), [1, 2]);
console.log(twoSum2([2, 3, 4], 6), [1, 3]);
console.log(twoSum2([-1, 0], -1), [1, 2]);
console.log(twoSum2([0, 0], 0), [1, 2]);