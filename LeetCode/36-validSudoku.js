//URL--
// https://leetcode.com/problems/valid-sudoku/

//INSTRUCTIONS--
/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

		Each row must contain the digits 1-9 without repetition.
		Each column must contain the digits 1-9 without repetition.
		Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

		A Sudoku board (partially filled) could be valid but is not necessarily solvable.
		Only the filled cells need to be validated according to the mentioned rules.

*/

//SOLUTION--
/* 
	This solution has O(n^2) time complexity and O(n) apace complexity where n is the length of a side of the array
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
	return validRows() && validCols() && validBoxes()

	function validRows() {
		//check if each number is unique for each row
		for (let row = 0; row < board.length; row++) {
			//make a set to track seen numbers
			const rowSet = new Set()
			for (let col = 0; col < board[0].length; col++) {
				const tile = board[row][col]
				//if tile is not valid, return false
				if (!isValid(rowSet, tile)) {
					return false
				}
			}
		}
		//if all numbers in the row are unique, return true
		return true
	}
	function validCols() {
		//check if each number is unique for each col
		for (let col = 0; col < board[0].length; col++) {
			//make a set to track seen numbers
			const colSet = new Set()
			for (let row = 0; row < board.length; row++) {
				const tile = board[row][col]
				//if tile is not valid, return false
				if (!isValid(colSet, tile)) {
					return false
				}
			}
		}
		//if all numbers in the box are unique, return true
		return true
	}
	function validBoxes() {
		//iterate through each box
		for (let row = 0; row < board.length; row += 3) {
			for (let col = 0; col < board[0].length; col += 3) {
				//if the box is not valid, return false
				if (!validBox(row, col)) {
					return false
				}
			}
		}
		//if all boxes are valid, return true
		return true

		function validBox(startRow, startCol) {
			//make a set to track seen numbers
			const boxSet = new Set()
			//iterate through the 3x3 box
			for (let row = startRow; row < startRow + 3; row++) {
				for (let col = startCol; col < startCol + 3; col++) {
					const tile = board[row][col]
					//if tile is not valid, return false
					if (!isValid(boxSet, tile)) {
						return false
					}
				}
			}
			//if all numbers in the box are unique, return true
			return true
		}
	}
	function isValid(hashSet, tile) {
		//if tile isn't empty
		if (tile !== ".") {
			//if the number has already been seen, return false
			if (hashSet.has(tile)) {
				return false
			}
			//else add it to the set
			hashSet.add(tile)
		}
		//return true if the tile is valid
		return true
	}
};
//TESTCASES--
console.log(isValidSudoku(
	[
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"]])
	, true);
// invalid first box
console.log(isValidSudoku(
	[
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "3", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"]])
	, false);
console.log(isValidSudoku(
	[
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", "8", ".", "8", ".", ".", "7", "9"]])
	, false);
console.log(isValidSudoku(
	[
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		["5", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"]])
	, false);
console.log(isValidSudoku(
	[
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"]])
	, false);