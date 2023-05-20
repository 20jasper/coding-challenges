//URL--
// https://leetcode.com/problems/toeplitz-matrix/

//INSTRUCTIONS--
/* Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Example 2:

Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.

 

Constraints:

		m == matrix.length
		n == matrix[i].length
		1 <= m, n <= 20
		0 <= matrix[i][j] <= 99

*/

//SOLUTION--
/* 
Loop through the top row 
	while the number is still in bounds, check if the square down and to the right is the same as the first square
		if not, return false
Do the same, but looping through the left most column starting one sqaure down

if all the squares pass the test, return true

This solution is O(r*c) time complexity where r is the amount of rows and c is the amount of columns
It is 0(1) space complexity
*/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function (matrix) {
	//loop through first row
	for (let row = 0; row < matrix.length - 2; row++) {
		for (let col = 0; col < matrix[0].length - 1; col++) {
			const num = matrix[row + 1][col + 1]
			console.log(num)
			const firstNum = matrix[0][col]
			console.log(firstNum)
		}
	}
	return true
}
// TESTCASES--
// console.log(isToeplitzMatrix([
// 	[1, 2],
// 	[2, 2]]), false);
// console.log(isToeplitzMatrix([
// 	[1, 2],
// 	[2, 1]]), true);
console.log(isToeplitzMatrix([
	[1, 2, 3, 4],
	[5, 1, 2, 3],
	[9, 5, 1, 2]]), true);
// console.log(isToeplitzMatrix([
// 	[1, 2, 3, 4],
// 	[5, 1, 2, 3],
// 	[9, 6, 1, 2]]), false);