//URL--
// https://leetcode.com/problems/search-a-2d-matrix/

//INSTRUCTIONS--
/* 
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

		Integers in each row are sorted from left to right.
		The first integer of each row is greater than the last integer of the previous row.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 

Constraints:

		m == matrix.length
		n == matrix[i].length
		1 <= m, n <= 100
		-104 <= matrix[i][j], target <= 104


*/

//SOLUTION--
/* 
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
	//search for a row that could contain the target
	let top = 0
	let bottom = matrix.length - 1
	//while the pointers aren't ovelapping
	while (top < bottom) {
		const middle = top + Math.ceil((bottom - top) / 2)
		const num = matrix[middle][0]
		if (num === target) return true
		else if (num < target) top = middle
		else bottom = middle - 1
	}
	const row = matrix[top]

	//search for the target within the row
	let left = 0
	let right = row.length - 1
	//while the pointers aren't ovelapping
	while (left < right) {
		const middle = left + Math.ceil((right - left) / 2)
		const num = row[middle]
		if (num === target) return true
		else if (num < target) left = middle
		else right = middle - 1
	}
	//if the target isn't in the matrix, return false
	return matrix[0][0] === target
};
//TESTCASES--
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true);
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false);