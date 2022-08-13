//URL--
// https://leetcode.com/problems/container-with-most-water/

//INSTRUCTIONS--
/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

 

Constraints:

		n == height.length
		2 <= n <= 105
		0 <= height[i] <= 104


*/

//SOLUTION--
/* 
Start with two pointers at the left and right of the array
while the left pointer is less than the right 
	move the lowest of the two pointers inwards until it hits a higher element 
		if they are the same, move them both inward
	calculate that area, and if it's higher than the max area, set it as the max area
	
The logic behind this solution is that there is no need to calculate the area again if the height of the container is not increased 

The time complexity of this solution is O(n) and the space complexity is O(1) where n is the length of the array 
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = function (heights) {
	let left = 0
	let right = heights.length - 1
	let maxArea = getArea(left, right)

	while (left < right) {
		const leftHeight = heights[left]
		const rightHeight = heights[right]
		//if the left side is the limiting factor, move the left pointer right until the height can be increased or the width is 0
		if (leftHeight < rightHeight) {
			while (leftHeight >= heights[left] && left < right) left++
		}
		//if the right side is the limiting factor, move the right pointer left until the height can be increased or the width is 0
		else if (leftHeight > rightHeight) {
			while (rightHeight >= heights[right] && left < right) right--
		}
		//if neither side is limiting container height, move both pointers inwards until the height limit increases or the width is 0
		else {
			while (leftHeight >= heights[left] && left < right) left++
			while (rightHeight >= heights[right] && left < right) right--
		}
		maxArea = Math.max(maxArea, getArea(left, right))
	}
	return maxArea

	function getArea(left, right) {
		const width = right - left
		const height = Math.min(heights[left], heights[right])
		return width * height
	}
};
//TESTCASES--
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log(maxArea([1, 8, 100, 2, 5, 99999999, 100, 3, 7]), 400);
console.log(maxArea([1, 1]), 1);