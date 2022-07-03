//URL--
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

//INSTRUCTIONS--
/* 
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
Overlapping Intervals

List containing overlapping intervals:

[
	 [1,4],
	 [7, 10],
	 [3, 5]
]

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
Examples:

sumIntervals( [
	 [1,2],
	 [6, 10],
	 [11, 15]
] ); // => 9

sumIntervals( [
	 [1,4],
	 [7, 10],
	 [3, 5]
] ); // => 7

sumIntervals( [
	 [1,5],
	 [10, 20],
	 [1, 6],
	 [16, 19],
	 [5, 11]
] ); // => 19

Random Tests

		100 tests with 1 - 10 intervals from the range [-20, 20]
		100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]
*/

//SOLUTION--
/* 
Merge the intervals then sum them
*/
function sumIntervals(arr) {
	//merge the intervals
	const mergedIntervalArr = merge(arr)
	//sum each interval's sum
	return mergedIntervalArr.reduce((sum, interval) => sum + interval[1] - interval[0], 0)
}
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
const test1 = [[1, 5], [1, 5]];
const test2 = [[1, 4], [7, 10], [3, 5]];
console.log(sumIntervals(test1), 4);
console.log(sumIntervals(test2), 7);

//Optimizations
/*
Instead of saving each intervalin an array, I am going to add the value of the interval to the sum
*/
const sumIntervals2 = function (intervals) {
	//sort array by the starting interval
	intervals.sort((a, z) => a[0] - z[0])
	let currentInterval = intervals[0]
	let sum = 0
	for (let i = 0; i < intervals.length; i++) {
		const nextInterval = intervals[i];
		// if the end of the the current interval is more than the start of the next interval
		if (currentInterval[1] < nextInterval[0]) {
			//add the current interval length to the sum and set the current interval to the next interval
			sum += currentInterval[1] - currentInterval[0]
			currentInterval = nextInterval
		}
		//otherwise, set the end of the current interval to the biggest of the ends of both intervals
		else {
			currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
		}
	}
	//add the length of the final interval to the sum
	sum += currentInterval[1] - currentInterval[0]
	//return the merged array 
	return sum
};

//TESTCASES--
console.log(sumIntervals2(test1), 4);
console.log(sumIntervals2(test2), 7);