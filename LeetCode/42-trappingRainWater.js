//URL--
// https://leetcode.com/problems/trapping-rain-water/

//INSTRUCTIONS--
/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

 

Constraints:

		n == height.length
		1 <= n <= 2 * 104
		0 <= height[i] <= 105


*/

//SOLUTION--
/* 
This solution has a time complexity of O(n) and a space complexity of O(1) where n is the length of the array
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
const trap = function (heights) {
	let total = 0

	let left = 0
	let right = heights.length - 1

	let leftSide = heights[left]
	let rightSide = heights[right]
	while (left < right) {

		//if left side is the limiting factor
		if (leftSide < rightSide) {
			//move the left pointer inwards 
			left++
			//if the containter side is taller than the current height
			if (leftSide > heights[left]) {
				//add the area filled to by water blocks to the total
				total += leftSide - heights[left]
			}
			//otherwise, set the container side to the current height
			else {
				leftSide = heights[left]
			}
		}
		//if the right side or both sides are the limiting factor
		else {
			//move the right pointer inwards 
			right--
			//if the containter side is taller than the current height
			if (rightSide > heights[right]) {
				//add the area filled to by water blocks to the total
				total += rightSide - heights[right]
			}
			//otherwise, set the container side to the current height
			else {
				rightSide = heights[right]
			}
		}
	}
	return area
};
//TESTCASES--
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);