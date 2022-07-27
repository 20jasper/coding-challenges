//URL--
// https://leetcode.com/problems/number-of-islands/

//INSTRUCTIONS--
/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
	["1","1","1","1","0"],
	["1","1","0","1","0"],
	["1","1","0","0","0"],
	["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
	["1","1","0","0","0"],
	["1","1","0","0","0"],
	["0","0","1","0","0"],
	["0","0","0","1","1"]
]
Output: 3

 

Constraints:

		m == grid.length
		n == grid[i].length
		1 <= m, n <= 300
		grid[i][j] is '0' or '1'.


*/

//SOLUTION--
/* 
This solution is O(n) space complexity and O(n) where n is the number of tiles in the grid
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
	let count = 0
	//if there is no grid or no tiles in the grid
	if (!grid) {
		return count
	}
	const visited = {}
	const rowCount = grid.length
	const colCount = grid[0].length
	//starting at the top left of the grid
	for (let row = 0; row < rowCount; row++) {
		for (let col = 0; col < colCount; col++) {
			//if it's a one and non traversed
			if (grid?.[row]?.[col] === "1" && visited[`${row}-${col}`] === undefined) {
				// increment the island count by one 
				count++
				searchNeighbors(row, col)
			}
		}
	}
	function searchNeighbors(row, col) {
		//if the tile is in bounds and non traversed
		if (grid?.[row]?.[col] === "1" && visited[`${row}-${col}`] === undefined) {
			//mark the tile as visited
			visited[`${row}-${col}`] = "visited"
			//search the vertically and horizontally adjacent tiles
			searchNeighbors(row + 1, col)
			searchNeighbors(row - 1, col)
			searchNeighbors(row, col + 1)
			searchNeighbors(row, col - 1)
		}
	}
	//return the island count
	return count
}

//TESTCASES--
console.log(numIslands([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
]), 1);
console.log(numIslands([
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
]), 3);
console.log(numIslands([
	["1", "0", "1", "1", "0", "1", "1"]
]), 3);

//optimizations--
/* 
In this solution, I changed each traversed land tile to an arbitrary value that is not "1" so that no extra space was required
This solution is O(n) for time complexity where n is the number of tiles in the grid and O(1) for space complexity
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands2 = function (grid) {
	let numOfIslands = 0
	//iterate through each island from the top left corner
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			//if the tile is equal to 1 
			if (grid[row][col] === "1") {
				dfs(row, col)
				//add one to the island count
				numOfIslands++
			}
		}
	}
	function dfs(row, col) {
		//if the tile is in bounds and land
		if (grid?.[row]?.[col] === "1") {
			//set the tile to an arbitrary value that isn't "1" or undefined
			grid[row][col] = "2"

			//check each horizonantal and vertical neighbor
			dfs(row + 1, col)
			dfs(row - 1, col)
			dfs(row, col + 1)
			dfs(row, col - 1)
		}
	}
	//return numOfIslands
	return numOfIslands
}

//TESTCASES--
console.log(numIslands2([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
]), 1);
console.log(numIslands2([
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
]), 3);
console.log(numIslands2([
	["1", "0", "1", "1", "0", "1", "1"]
]), 3);
