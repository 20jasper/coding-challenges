//URL--
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

//INSTRUCTIONS--
/* 
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3

Example 2:

Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

Example 3:

Input: s = "1111"
Output: 3

 

Constraints:

		2 <= s.length <= 500
		The string s consists of characters '0' and '1' only.


*/

//SOLUTION--
/* 
The time complexity of this solution is O(n) and the space complexity is O(1) where n is the length of the string
*/
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
	let score = 0
	//calculate score when left substring is one long
	if (s[0] === "0") score++
	for (let i = 1; i < s.length; i++) {
		if (s[i] === "1") score++
	}

	let maxScore = score

	//calculate scores for each other split
	for (let i = 1; i < s.length - 1; i++) {
		//if a 0 is aadded to the left portion
		if (s[i] === "0") score++
		//if a 1 is removed from the right portion
		else score--
		maxScore = Math.max(score, maxScore)
	}
	return maxScore
};
//TESTCASES--
console.log(maxScore("011101"), 5);
console.log(maxScore("00111"), 5);
console.log(maxScore("111"), 2);

//SOLUTION--
/* 
The time complexity of this solution is O(n) and the space complexity is O(1) where n is the length of the string, but it does remove one pass

We are looking for the maximum of leftZeros + rightOnes, and rightOnes is the same as totalOnes-leftOnes, so we can rewrite the equation as leftZeros + totalOnes-leftOnes

totalOnes is constant, so we just need to find the split with the maximum leftZeros-leftOnes
*/
/**
 * @param {string} s
 * @return {number}
 */
var maxScore2 = function (s) {
	let maxScore = -Infinity
	let zeros = 0
	let ones = 0

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === "0") zeros++
		else ones++

		maxScore = Math.max(zeros - ones, maxScore)
	}

	if (s.at(-1) === "1") ones++
	return maxScore + ones
};
//TESTCASES--
console.log(maxScore2("011101"), 5);
console.log(maxScore2("00111"), 5);
console.log(maxScore2("111"), 2);