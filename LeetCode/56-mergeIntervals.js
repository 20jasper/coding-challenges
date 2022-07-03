//URL--
// https://leetcode.com/problems/merge-intervals/

//INSTRUCTIONS--
/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 

Constraints:

		1 <= intervals.length <= 104
		intervals[i].length == 2
		0 <= starti <= endi <= 104


*/

//SOLUTION--
/* 
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
	//sort array by the starting interval
	intervals.sort((a, z) => a[0] - z[0])
	//initialize a new array with the interval with the lowest start
	const mergedArr = [intervals[0]]
	for (let i = 0, j = 0; i < intervals.length; i++) {
		const currentInterval = mergedArr[j];
		const nextInterval = intervals[i];
		// if the end of the the current interval is more than the start of the next interval
		if (currentInterval[1] < nextInterval[0]) {
			//push the next interval to the array and set that element as the new current element
			mergedArr.push(nextInterval)
			j++
		}
		//otherwise, set the end of the current interval to the biggest of the ends of both intervals
		else {
			currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
		}
	}
	//return the merged array 
	return mergedArr
};
//TESTCASES--
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
console.log(merge([[1, 4], [4, 5]]), [[1, 5]]);
console.log(merge([[1, 4], [2, 3]]
), [[1, 4]]);