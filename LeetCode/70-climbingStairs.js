//URL--
// https://leetcode.com/problems/climbing-stairs/

//INSTRUCTIONS--
/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 

Constraints:

		1 <= n <= 45


*/

//SOLUTION--
/* 
My first idea is to check every permutation of steps that can be taken
This solution has a time complexity of O(2^n) and a space complexity of O(1) 
*/
const climbStairs = function (n) {
	let total = 0

	getStepCount(n)

	return total

	function getStepCount(n) {
		//if the end of a branch is reached, add one to the count
		if (n === 0) {
			total++
		}
		//otherwise if n is more than 0, continue
		else if (n > 0) {
			getStepCount(n - 1)
			getStepCount(n - 2)
		}
	}
};
//TESTCASES--
console.log();