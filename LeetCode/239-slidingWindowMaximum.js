//URL--
// https://leetcode.com/problems/sliding-window-maximum/

//INSTRUCTIONS--
/* 
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

//SOLUTION--
/* 
The first solution I thought of was brute force 
iterate through the window
	add the max to a resultant array

The time complexity of this solution is O((n-(k-1))*k)) or O(nk) and the space complexity is O(1) where n is the length of the array and k is the length of the window

A more optimized solution would be to keep a record of how many of each number exist in a hashmap

Iterate through the first window and get the maximum
then subtract the number to the left and add the number to the right from the hashmap
	if the right number is more than the max, set it to the max
	else if the left number is the max, reset the hashmap and iterate through the window again

	The time complexity of this solution is still O((n-(k-1))*k)) or O(nk), but the space complexity is O(n) where n is the length of the array and k is the length of the window
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
	let left = 0
	let right = 0
	const res = []
	//while the window is in bounds
	while (left + k - 1 < nums.length) {
		let max = -Infinity
		//while the right pointer is in the window
		while (right - left < k) {
			max = Math.max(max, nums[right])
			right++
		}
		res.push(max)
		//increment the left pointer and reset the right pointer
		left++
		right = left
	}
	return res
};
//TESTCASES--
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7, -1], 3), [3, 3, 5, 5, 6, 7, 7]);
console.log(maxSlidingWindow([1], 1), [1]);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow2 = function (nums, k) {
	let left = 0
	let right = 0
	let max = -Infinity
	const res = []
	let hashMap = {}

	getWindowMax()
	res.push(max)

	//while the window is in bounds
	while (left + k < nums.length) {
		const leftNum = nums[left]
		const rightNum = nums[right]
		updateFrequency(leftNum, -1)
		left++
		updateFrequency(rightNum, 1)
		right++
		//if the right num is more than or equal to the max, set it equal to the max 
		if (rightNum >= max) max = rightNum
		//otherwise, if the left num's frequency is 0 and the left num is the max iterate over the window to get the max
		else if (hashMap[leftNum] === 0 && leftNum === max) getWindowMax()

		res.push(max)
		//shift the window right
	}
	return res

	function updateFrequency(num, mod) {
		if (hashMap[num] === undefined) hashMap[num] = 0
		hashMap[num] += mod
	}
	function getWindowMax() {
		hashMap = {}
		max = -Infinity
		right = left
		while (right - left < k) {
			updateFrequency(nums[right], 1)

			max = Math.max(max, nums[right])

			right++
		}
	}
};
//TESTCASES--
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7, -1], 3), [3, 3, 5, 5, 6, 7, 7]);
console.log(maxSlidingWindow2([1], 1), [1]);
console.log(maxSlidingWindow2([1, -1], 1), [1, -1]);
console.log(maxSlidingWindow2([-1], 1), [-1]);