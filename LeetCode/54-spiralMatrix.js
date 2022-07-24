//URL--
// https://leetcode.com/problems/spiral-matrix/

//INSTRUCTIONS--
/* 
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

 

Constraints:

		m == matrix.length
		n == matrix[i].length
		1 <= m, n <= 10
		-100 <= matrix[i][j] <= 100


*/

//SOLUTION--
//This solution has a time complexity of O(m*n) and a space complexity of O(m*n) where m is the number of rows and n is the number of columns in the matrix
const spiralOrder = function (matrix) {
	const arr = []

	//set the bounds of the matrix
	let rowTop = 0
	let rowBottom = matrix.length - 1
	let colLeft = 0
	let colRight = matrix[0].length - 1

	const matrixSize = matrix.length * matrix[0].length

	//while there are still more elements in the matrix not in the resultant array
	while (arr.length < matrixSize) {
		//iterate from bound to bound in a spiral pattern and push each element to the array

		//iterate right through the top row
		for (let col = colLeft; col <= colRight; col++) {
			arr.push(matrix[rowTop][col])
		}
		//lower the top row bound
		rowTop++

		//iterate down through the right column
		for (let row = rowTop; row <= rowBottom; row++) {
			arr.push(matrix[row][colRight])
		}
		//move the right column bound left
		colRight--

		//if every element has been iterated over, end the loop
		if (arr.length >= matrixSize) {
			break
		}

		//iterate left through the bottom row
		for (let col = colRight; col >= colLeft; col--) {
			arr.push(matrix[rowBottom][col])
		}
		//raise the bottom row bound
		rowBottom--

		//iterate up through the left column
		for (let row = rowBottom; row >= rowTop; row--) {
			arr.push(matrix[row][colLeft])
		}
		//move the left column bound to the right
		colLeft++
	}
	//return the resultant array
	return arr
};
//TESTCASES--
console.log(spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]]),
	[1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(spiralOrder([
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]]),
	[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);