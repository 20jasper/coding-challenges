//URL--
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

//INSTRUCTIONS--
/* A format for expressing an ordered list of integers is to use a comma separated list of either

		individual integers
		or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

//SOLUTION--
/* 
*/
const solution = function (nums) {
	const rangeArr = []
	let startRange = nums[0]
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const nextNum = nums[i + 1];
		//if the current number and the next number aren't consecutive
		if (currentNum + 1 !== nextNum) {
			//if the start and end of the range is the same, push the current number to the range array
			if (startRange === currentNum) {
				rangeArr.push(currentNum)
			}
			//if the start and end of the range is the same are one apart, push the start of the range and the current number to the range array
			else if (currentNum - startRange === 1) {
				rangeArr.push(startRange, currentNum)
			}
			//else, push the the start of the range and the current number joined by '-' to the range array
			else {
				rangeArr.push(`${startRange}-${currentNum}`)
			}
			//set the new start range to the next number in the array
			startRange = nextNum
		}
	}
	//return the ranges joined by commas
	return rangeArr.join(',')
};
//TESTCASES--
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
