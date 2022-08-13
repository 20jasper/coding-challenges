//URL--
// https://leetcode.com/problems/longest-consecutive-sequence/

//INSTRUCTIONS--
/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 

Constraints:

		0 <= nums.length <= 105
		-109 <= nums[i] <= 109


*/

//SOLUTION--
/* 
My first thought was to create an array of tuples with the first number being the start number and the next being the end of the interval, but it is pretty complicated, so I took some more time to think of a simpler solution
The time complexity for that solution would be O((n^2)/2+n) or O(n^2) and the space complexity would be O(n) where n is the length of the array

The next thing I thought of was converting the array to a set and checking if the current number is the start of an interval and if so check it's length
return the longest length of these intervals

The time complexity of this solution is O(n) and the space complexity is O(n) as well, where n is the length of the array
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
	const set = new Set(nums)
	let maxLength = 0
	//iterate over the set
	for (const num of set) {
		let intervalLength = 1
		//if it's the start of an interval
		if (!set.has(num - 1)) {
			//while the next number is in the set
			while (set.has(num + intervalLength)) {
				// increment the length of the interval
				intervalLength++
			}
		}
		//set maxLength equal to the bigger of length and maxLength
		maxLength = Math.max(intervalLength, maxLength)
	}
	return maxLength
};
//TESTCASES--
console.log(longestConsecutive([]), 0);
console.log(longestConsecutive([1, 5, 8]), 1);
console.log(longestConsecutive([1, 5, 2]), 2);
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);