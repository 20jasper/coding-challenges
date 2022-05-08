//URL--
// https://www.codewars.com/kata/529bf0e9bdf7657179000008

//INSTRUCTIONS--
/* Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)
Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false


*/

//SOLUTION--
/* I'm going to check if each row contains numbers 1 through 9
    if one of the numbers is missing, return false
Then I'm going to check each column for numbers 1 through 9
    if one of the numbers is missing, return false
Then I'm going to check each 3x3 section for numbers 1 through 9
    if one of the numbers is missing, return false
return true

*/
function validSolution(board) {
    const nums = '123456789'
    //row check
    for (let i = 0; i < 9; i++) {
        const row = board[i].slice(0)
        const rowSorted = row.sort((a, z) => a - z).join('')
        if (rowSorted !== nums) {
            return false
        }
    }
    //column check
    for (let y = 0; y < 9; y++) {
        const column = []
        for (let x = 0; x < 9; x++) {
            column.push(board[x][y])
        }
        const columnSorted = column.sort((a, z) => a - z).join('')
        if (columnSorted !== nums) {
            return false
        }
    }
    //box check
    for (let x = 0; x < 9; x += 3) {
        const sliceRangeStart = x
        const sliceRangeEnd = x + 3
        for (let y = 0; y < 9; y += 3) {
            const box = [
                ...board[y]
                    .slice(sliceRangeStart, sliceRangeEnd),
                ...board[y + 1]
                    .slice(sliceRangeStart, sliceRangeEnd),
                ...board[y + 2]
                    .slice(sliceRangeStart, sliceRangeEnd)]
            const boxSorted = box.sort((a, z) => a - z).join('')
            if (boxSorted !== nums) {
                return false
            }
        }
    }
    return true
}
//TESTCASES--
console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);
// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 4, 1, 9, 5, 3, 1, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]), false);
// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 8],
//     [6, 7, 2, 1, 9, 5, 3, 4, 2],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]]), false);
// console.log(validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 0, 3, 4, 8],
//     [1, 0, 0, 3, 4, 2, 5, 6, 0],
//     [8, 5, 9, 7, 6, 1, 0, 2, 0],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 0, 1, 5, 3, 7, 2, 1, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);