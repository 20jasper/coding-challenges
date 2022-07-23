//URL--
// https://leetcode.com/problems/game-of-life/

//INSTRUCTIONS--
/* 
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

		Any live cell with fewer than two live neighbors dies as if caused by under-population.
		Any live cell with two or three live neighbors lives on to the next generation.
		Any live cell with more than three live neighbors dies, as if by over-population.
		Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

Example 1:

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:

Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

 

Constraints:

		m == board.length
		n == board[i].length
		1 <= m, n <= 25
		board[i][j] is 0 or 1.

 
*/

//SOLUTION--
/* 
*/
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const gameOfLife = function (board) {
	//time complexity of this solution would be O(m*n) where m is number of rows, and n is number of columns.
	// Space complexity is O(1)
	const rowLength = board.length
	const colLength = board[0].length

	//iterate through the array from the top left corner
	for (let row = 0; row < rowLength; row++) {
		for (let col = 0; col < colLength; col++) {
			const tile = board[row][col]
			const liveNeighbors = liveNeighborCount(row, col)
			//if the square is dead and has exactly 3 live neighbors,
			if ((tile === 0 || tile === "deadToLive") && liveNeighbors === 3) {
				//change the number to "deadToLive"
				board[row][col] = "deadToLive"
			}
			//else if it's live and has more than 3 live neighbors or less than 2, change it to "liveToDead"
			else if ((tile === 1 || tile === "liveToDead") && (liveNeighbors > 3 || liveNeighbors < 2)) {
				board[row][col] = "liveToDead"
			}
		}
	}

	//iterate through the array from the top left corner
	for (let row = 0; row < rowLength; row++) {
		for (let col = 0; col < colLength; col++) {
			const tile = board[row][col]
			//change all "liveToDead" to 0
			if (tile === "liveToDead") {
				board[row][col] = 0
			}
			//change all "deadToLive" to 1
			if (tile === "deadToLive") {
				board[row][col] = 1
			}
		}
	}
	function liveNeighborCount(row, col) {
		//future optimization, only count up to 4

		let liveCount = 0

		//if neighbor is live and in bounds, add one to the count

		//middle row check
		const middleRow = board?.[row]
		if (middleRow?.[col + 1] === 1 || middleRow?.[col + 1] === "liveToDead") {
			liveCount++
		}
		if (middleRow?.[col - 1] === 1 || middleRow?.[col - 1] === "liveToDead") {
			liveCount++
		}

		//bottom row check
		const bottomRow = board?.[row + 1]
		if (bottomRow?.[col] === 1 || bottomRow?.[col] === "liveToDead") {
			liveCount++
		}
		if (bottomRow?.[col + 1] === 1 || bottomRow?.[col + 1] === "liveToDead") {
			liveCount++
		}
		if (bottomRow?.[col - 1] === 1 || bottomRow?.[col - 1] === "liveToDead") {
			liveCount++
		}

		//top row check
		const topRow = board?.[row - 1]
		if (topRow?.[col] === 1 || topRow?.[col] === "liveToDead") {
			liveCount++
		}
		if (topRow?.[col + 1] === 1 || topRow?.[col + 1] === "liveToDead") {
			liveCount++
		}
		if (topRow?.[col - 1] === 1 || topRow?.[col - 1] === "liveToDead") {
			liveCount++
		}
		return liveCount
	}
};
//TESTCASES--
console.log(gameOfLife([
	[0, 1, 0],
	[0, 0, 1],
	[1, 1, 1],
	[0, 0, 0]]), [
	[0, 0, 0],
	[1, 0, 1],
	[0, 1, 1],
	[0, 1, 0]]);
console.log(gameOfLife([
	[1, 1],
	[1, 0]]), [
	[1, 1],
	[1, 1]]);
