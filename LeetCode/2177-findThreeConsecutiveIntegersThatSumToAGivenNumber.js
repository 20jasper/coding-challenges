//URL--
// https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/

//INSTRUCTIONS--
/* 
2177. Find Three Consecutive Integers That Sum to a Given Number
Medium

Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

 

Example 1:

Input: num = 33
Output: [10,11,12]
Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].

Example 2:

Input: num = 4
Output: []
Explanation: There is no way to express 4 as the sum of 3 consecutive integers.

 

Constraints:

		0 <= num <= 10^15


*/

//SOLUTION--
/* 
x=a+b+c

a=a
b=a+1
c=a+2

x=a+(a+1)+(a+2)
x=3a+3
x=3(a+1)
x/3=a+1
x/3-1=a

b=a+1
c=a+2


*/
/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = function (target) {
	const firstNum = target / 3 - 1
	//if the first number is not an integer
	if (firstNum % 1 !== 0) {
		return []
	}
	return [firstNum, firstNum + 1, firstNum + 2]
};
//TESTCASES--
console.log(sumOfThree(4), []);
console.log(sumOfThree(33), [10, 11, 12]);