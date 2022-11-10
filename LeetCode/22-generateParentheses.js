//URL--
// https://leetcode.com/problems/generate-parentheses/

//INSTRUCTIONS--
/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

		1 <= n <= 8
*/

//SOLUTION--
/* 
*/
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
	const res = []

	nextChar('(', 1, 0)
	return res

	function nextChar(string, opening, closing) {
		if (string.length === n * 2) {
			res.push(string)
			return
		}
		if (opening < n) {
			nextChar(`${string}(`, opening + 1, closing)
		}
		if (closing < opening) {
			nextChar(`${string})`, opening, closing + 1)
		}
	}
};
//TESTCASES--
console.log(generateParenthesis(3));