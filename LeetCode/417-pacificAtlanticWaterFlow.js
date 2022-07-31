//URL--
// https://leetcode.com/problems/pacific-atlantic-water-flow/

//INSTRUCTIONS--
/* 
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:

Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]

 

Constraints:

		m == heights.length
		n == heights[r].length
		1 <= m, n <= 200
		0 <= heights[r][c] <= 105


*/

//SOLUTION--
/* 
This solution is O(mn) for both time and space complexity where m is the number of rows and n is the number of columns
*/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
	function canReachOcean(hashMap, row, col, lastVal = -Infinity) {
		const currVal = heights[row]?.[col]
		//if the current tile is in bounds, nontraversed, and its value is more than or equal to the last tile's value
		if (
			currVal !== undefined &&
			hashMap[`${row}-${col}`] === undefined &&
			currVal >= lastVal
		) {
			//add it to the hashmap with a value that is not undefined
			hashMap[`${row}-${col}`] = "visited"
			canReachOcean(hashMap, row + 1, col, currVal)
			canReachOcean(hashMap, row - 1, col, currVal)
			canReachOcean(hashMap, row, col + 1, currVal)
			canReachOcean(hashMap, row, col - 1, currVal)
		}
	}
	const pacificHashMap = {}
	const canReachPacific = (row, col) => canReachOcean(pacificHashMap, row, col)
	const atlanticHashMap = {}
	const canReachAtlantic = (row, col) => canReachOcean(atlanticHashMap, row, col)

	//top and bottom row check
	for (let col = 0; col < heights[0].length; col++) {
		canReachPacific(0, col)
		canReachAtlantic(heights.length - 1, col)
	}
	//left and right col check
	for (let row = 0; row < heights.length; row++) {
		canReachPacific(row, 0)
		canReachAtlantic(row, heights[0].length - 1)
	}

	//check which tiles intersect between the atlantic and pacific and add them to the resultant array
	const intersectionArr = []
	//iterate through each visited tile in the atlantic hash map
	for (const coordinate in atlanticHashMap) {
		//if that tile is also in the pacific hashmap
		if (pacificHashMap[coordinate] !== undefined) {
			//convert the string to a tuple of numbers and push it to the array
			const arr = coordinate.split("-")
			const [row, col] = arr
			intersectionArr.push([+row, +col])
		}
	}
	//return the array
	return intersectionArr
};
//TESTCASES--
console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]), [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]);
console.log(pacificAtlantic([[2, 1], [1, 2]]), [[[0, 0], [0, 1], [1, 0], [1, 1]]]);

