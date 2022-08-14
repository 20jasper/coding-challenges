//URL--
// https://leetcode.com/contest/weekly-contest-306/problems/largest-local-values-in-a-matrix/

//INSTRUCTIONS--
/* 


		User Accepted: 0
		User Tried: 0
		Total Accepted: 0
		Total Submissions: 0
		Difficulty: Easy

You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

		maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.

 

Example 1:

Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

Example 2:

Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

 

Constraints:

		n == grid.length == grid[i].length
		3 <= n <= 100
		1 <= grid[i][j] <= 100


*/

//SOLUTION--
/* 
This solution has a time complexity of O(n^2) and space complexity of O(1) where n is the length of a side of the grid 
*/
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const largestLocal = function (grid) {
	const n = grid.length
	const res = []

	//iterate over the inner square and add the largest local value
	for (let row = 1; row < n - 1; row++) {
		const resRow = []
		for (let col = 1; col < n - 1; col++) {
			resRow.push(getLargestLocalValue(row, col))
		}
		res.push(resRow)
	}

	function getLargestLocalValue(startRow, startCol) {
		let max = -Infinity
		//iterate over the 3x3 area around the start tile and find the largest value
		for (let row = startRow - 1; row < startRow + 2; row++) {
			for (let col = startCol - 1; col < startCol + 2; col++) {
				const tile = grid[row][col]
				max = Math.max(max, tile)
			}
		}
		return max
	}
	return res
};
//TESTCASES--
console.log(largestLocal([
	[9, 9, 8, 1],
	[5, 6, 2, 6],
	[8, 2, 6, 4],
	[6, 2, 2, 2]]), [
	[9, 9],
	[8, 6]]);
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]), [[2, 2, 2], [2, 2, 2], [2, 2, 2]]);