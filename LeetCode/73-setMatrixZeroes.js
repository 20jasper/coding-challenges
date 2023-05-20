//URL--
// https://leetcode.com/problems/set-matrix-zeroes/

//INSTRUCTIONS--
/* 
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

 

Constraints:

		m == matrix.length
		n == matrix[0].length
		1 <= m, n <= 200
		-231 <= matrix[i][j] <= 231 - 1

 

Follow up:

		A straightforward solution using O(mn) space is probably a bad idea.
		A simple improvement uses O(m + n) space, but still not the best solution.
		Could you devise a constant space solution?


*/

//SOLUTION--
/* 
I thought of two solutions, the first takes O(m+n) space and O(mn) time where m is the number of rows and n is the number of columns and uses a hashSet to record which rows and columns contain a 0 and then iterating through the matrix again and changing everything in those rows and columns to 0s

The next uses o(1) space and O(mn) time. The first element in each row and column can be used as a flag to show if the rest of the column should be converted to a 0
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes1 = function (matrix) {
	const hashSet = new Set()
	//iterate through the matrix and add all rows and columns with 0s in them to the hash set
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			const tile = matrix[row][col]
			if (tile === 0) {
				hashSet.add(`row${row}`)
				hashSet.add(`col${col}`)
			}
		}
	}

	//set all tiles in the same row or column as a 0 to 0
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			//if the row or column is in the hashset, change the tile to 0
			if (hashSet.has(`row${row}`) || hashSet.has(`col${col}`)) {
				matrix[row][col] = 0
			}
		}
	}
};
//TESTCASES--
console.log(setZeroes1([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1]]), [
	[1, 0, 1],
	[0, 0, 0],
	[1, 0, 1]]);
console.log(setZeroes1([
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5]]), [
	[0, 0, 0, 0],
	[0, 4, 5, 0],
	[0, 3, 1, 0]]);

const setZeroes2 = function (matrix) {
	let row0flag = false

	//iterate through the matrix and mark the rows and columns that have 0s
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			const tile = matrix[row][col]
			// set the first tile in the column and row to true to mark it
			if (tile === 0) {
				matrix[0][col] = true
				if (row === 0) {
					row0flag = true
				} else {
					matrix[row][0] = true
				}
			}
		}
	}

	//Starting from the row and column after the flag rows and columns, convert each tile in a flagged row or column to a 0
	for (let row = 1; row < matrix.length; row++) {
		for (let col = 1; col < matrix[0].length; col++) {
			//if the row or column is flagged, set the tile to 0
			if (matrix[0][col] === true || matrix[row][0] === true) {
				matrix[row][col] = 0
			}
		}
	}
	//change all flagged tiles to 0s

	const col0flag = matrix[0][0]
	//row 0 check
	for (let col = 0; col < matrix[0].length; col++) {
		if (matrix[0][col] === true || row0flag === true) {
			matrix[0][col] = 0
		}
	}
	//col 0 ckeck
	for (let row = 0; row < matrix.length; row++) {
		if (matrix[row][0] === true || col0flag === true) {
			matrix[row][0] = 0
		}
	}
	return matrix
};
//TESTCASES--
console.log(setZeroes2([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1]]), [
	[1, 0, 1],
	[0, 0, 0],
	[1, 0, 1]]);
console.log(setZeroes2([
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5]]), [
	[0, 0, 0, 0],
	[0, 4, 5, 0],
	[0, 3, 1, 0]]);
console.log(setZeroes2([
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1]]), [
	[1, 0, 1],
	[0, 0, 0],
	[1, 0, 1]]
);
console.log(setZeroes2([
	[1, 2, 3, 4],
	[5, 0, 7, 8],
	[0, 10, 11, 12],
	[13, 14, 15, 0]]), [
	[0, 0, 3, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]]

);