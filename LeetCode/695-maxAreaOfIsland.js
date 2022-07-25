//URL--
// 

//INSTRUCTIONS--
/* 
*/

//SOLUTION--
/* 
*/
const maxAreaOfIsland = function (grid) {
	let maxArea = 0
	let currArea = 0

	//iterate through the grid starting at the top left corner
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			//set the current area to 0
			currArea = 0
			if (grid[row][col] === 1) {
				//check the horizontal and vertical neighbors for island tiles
				neighborCheck(row, col)
			}
			//set the max to the higher of the max and the current max
			maxArea = Math.max(maxArea, currArea)
		}
	}
	function neighborCheck(row, col) {
		//if the tile is in bounds and is non-traversed land
		if (grid?.[row]?.[col] === 1) {
			//increment the current land area
			currArea++
			//set the tile to an arbitrary value that isn't 1
			grid[row][col] = 2

			//check the horizontal and vertical neighbors for island tiles
			neighborCheck(row + 1, col)
			neighborCheck(row - 1, col)
			neighborCheck(row, col + 1)
			neighborCheck(row, col - 1)
		}
	}
	//return the max area
	return maxArea
}
//if the tile is land, mark it as traversed, add one to the current max area, and check the neighbors
//if the current max is more than the max area, set the current max as the max 
//set the current max area to 0

//TESTCASES--
console.log();