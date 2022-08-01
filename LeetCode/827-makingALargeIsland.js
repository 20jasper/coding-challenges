//URL--
// https://leetcode.com/problems/making-a-large-island/

//INSTRUCTIONS--
/* 
You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.

Return the size of the largest island in grid after applying this operation.

An island is a 4-directionally connected group of 1s.

 

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.

Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can't change any 0 to 1, only one island with area = 4.

 

Constraints:

		n == grid.length
		n == grid[i].length
		1 <= n <= 500
		grid[i][j] is either 0 or 1.

*/

//SOLUTION--
/* 
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {

	const islandSizes = {}
	let maxIslandSize = 0
	//make an island ID to differentiate each island
	let islandID = 2
	const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

	//get the size of each existing island
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			const tile = grid[row][col]
			//if the current tile is untraversed land
			if (tile === 1) {
				const islandSize = getIslandSize(row, col)
				//set max island size to the new maximum island size
				maxIslandSize = Math.max(islandSize, maxIslandSize)
				//increment the islandID 
				islandID++
			}
		}
	}

	//iterate through the grid and change each water tile and see if the island length created is more than the max island size
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			const tile = grid[row][col]
			//if the tile is water
			if (tile === 0) {
				//calculate the new size of the island
				const newIslandSize = getNewIslandSize(row, col)
				//set max island size to the new maximum island size
				maxIslandSize = Math.max(newIslandSize, maxIslandSize)
			}
		}
	}

	//return max island size
	return maxIslandSize

	function getIslandSize(row, col) {
		//if the tile is not untraversed land, return
		if (grid[row]?.[col] !== 1) {
			return
		}
		//set the tile to the new islandID
		grid[row][col] = islandID

		//if island doesn't exist in the hashmap yet
		if (islandSizes[islandID] === undefined) {
			//add it with a value of 1
			islandSizes[islandID] = 1
		}
		else {
			//increment the island size in the hashmap
			islandSizes[islandID]++
		}
		//continue in the 4 cardinal directions
		directions.forEach(([rowMod, colMod]) => getIslandSize(row + rowMod, col + colMod))
		//return the island size
		return islandSizes[islandID]
	}

	function getNewIslandSize(row, col) {
		const visited = new Set()
		//start island size at one since  a water tile changed to land
		let totalArea = 1
		//look in each cardinal direction for islands
		directions.forEach(([rowMod, colMod]) => {
			const islandID = grid[row + rowMod]?.[col + colMod]
			//if the islandID exists and is not water and the island has not been counted yet
			if (islandID !== undefined && islandID !== 0 && !visited.has(islandID)) {
				//add the island size to the total
				totalArea += islandSizes[islandID]
				//add the island to the visited island set
				visited.add(islandID)
			}
		})
		//return the new island size
		return totalArea
	}
};
//TESTCASES--
console.log(largestIsland([
	[1, 0],
	[0, 1]]), 3);
console.log(largestIsland([
	[0, 0],
	[0, 0]]), 1);
console.log(largestIsland([
	[1, 1],
	[1, 0]]), 4);
console.log(largestIsland([
	[1, 1],
	[1, 1]]), 4);
console.log(largestIsland([
	[1, 1, 0, 1],
	[1, 1, 0, 1],
	[0, 0, 0, 1],
	[1, 1, 1, 0],]), 8);
console.log(largestIsland([
	[1, 1, 0, 1],
	[1, 1, 0, 1],
	[0, 1, 0, 1],
	[1, 1, 1, 0],]), 12);
console.log(largestIsland([
	[1, 1, 0, 1],
	[1, 0, 1, 0],
	[0, 1, 0, 1],
	[1, 1, 1, 0],]), 9);