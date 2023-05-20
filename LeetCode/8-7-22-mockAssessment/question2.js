//URL--
// 

//INSTRUCTIONS--
/* 
Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
	[0,1,1,1],
	[1,1,1,1],
	[0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

Example 2:

Input: matrix = 
[
	[1,0,1],
	[1,1,0],
	[1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.

 

Constraints:

		1 <= arr.length <= 300
		1 <= arr[0].length <= 300
		0 <= arr[i][j] <= 1


*/

//SOLUTION--
/* 
iterate through the matrix
Find the biggest square
If the square side length is more than 1, add all the smaller squares inside (if it is 3x3, add 1 for the big square, then 4 for the 2x2 and then 9 for the 1x1 squares)

Find the minimum between m and n, and start searching for squares with sides that long
iterate through the whole array and check for squares at each index
repeat until the size square is 0

return the num of squares

The time complexity of the solution is O(m*n*minSideLength) where m is the number of rows, n is the number of columns, and minSideLength is the minimum between the rows and lengths
The space complexity is 0(1)
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix, count = 0, maxLength = Math.min(matrix.length, matrix[0].length)) {
	if (maxLength === 0) {
		return count
	}

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			if (isSquare(row, col)) {
				count++
			}
		}
	}

	return countSquares(matrix, count, maxLength - 1)

	function isSquare(startRow, startCol) {
		for (let row = startRow; row < startRow + maxLength; row++) {
			for (let col = startCol; col < startCol + maxLength; col++) {
				//if the tile is out of bounds or a 0
				if (matrix[row]?.[col] !== 1) {
					return false
				}
			}
		}
		//if all tiles are 0s, return true
		return true
	}
};
//TESTCASES--
console.log(countSquares([
	[0, 1, 1, 1],
	[1, 1, 1, 1],
	[0, 1, 1, 1]
]), 15);
console.log(countSquares([
	[1, 0, 1],
	[1, 1, 0],
	[1, 1, 0]
]), 7);