//URL--
// https://leetcode.com/problems/summary-ranges/

//INSTRUCTIONS--
/* You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

		"a->b" if a != b
		"a" if a == b

 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

*/

//SOLUTION--
/* 
if num is less than 2 long, return nums
initialize an empty array
set the start and end range to the first number
iterate over the array
	if the next number in the array is one more than the last number in the current range, set the last number in the current range to the next number
	else, push the current range to the array and set the current range to the next number
return the resultant array
*/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
	//if the array has one or no numbers, return the array with the values converted to strings
	if (nums.length < 2) {
		return nums.map(String)
	}
	const rangeArr = []
	let startRange = nums[0]
	let endRange = nums[0]
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const nextNum = nums[i + 1];
		//if the current number and the next number are consecutive, set the end of the range to the next number
		if (currentNum + 1 === nextNum) {
			endRange = nextNum
		}
		//if the current number and the next number are not consecutive
		else {
			//if the start and end of the range is the same, push the start of the range converted to a string to the range array
			if (startRange === endRange) {
				rangeArr.push(startRange.toString())
			}
			//if the start and end of the range is not the same, push the the start of the range and the end of the range joined by '->' as a string to the range array
			else {
				rangeArr.push(`${startRange}->${endRange}`)
			}
			//set the new start and end range to the next number in the array
			startRange = nextNum
			endRange = nextNum
		}
	}
	//return the ranges 
	return rangeArr
};
//TESTCASES--
console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
console.log(summaryRanges([9]), ["9"]);

//optimizations
/*
Holding the end of the range isn't necessary since the end of the range is the same as the current number 
The length check at the beginning is also unneccesary, so I removed it
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges2 = function (nums) {
	const rangeArr = []
	let startRange = nums[0]
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const nextNum = nums[i + 1];
		//if the current number and the next number aren't consecutive
		if (currentNum + 1 !== nextNum) {
			//if the start and end of the range is the same, push the current number as a string to the range array
			if (startRange === currentNum) {
				rangeArr.push(currentNum.toString())
			}
			//else, push the the start of the range and the current number joined by '->' as a string to the range array
			else {
				rangeArr.push(`${startRange}->${currentNum}`)
			}
			//set the new start range to the next number in the array
			startRange = nextNum
		}
	}
	//return the ranges 
	return rangeArr
};
//TESTCASES--
console.log(summaryRanges2([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
console.log(summaryRanges2([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
console.log(summaryRanges2([9]), ["9"]);
console.log(summaryRanges2([]), []);