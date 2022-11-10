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
		//if n pairs of parentheses have been generated
		if (string.length === n * 2) {
			res.push(string)
			return
		}
		//if there are less opening parentheses than the max
		if (opening < n) {
			nextChar(`${string}(`, opening + 1, closing)
		}
		//if there are less closing parentheses than opening parentheses
		//Note this implicitly covers closing < opening
		//This is necessary since '))' can never become valid
		if (closing < opening) {
			nextChar(`${string})`, opening, closing + 1)
		}
	}
};
//TESTCASES--
console.log(generateParenthesis(1), ['()']);
console.log(generateParenthesis(2), ['(())', '()()']);
console.log(generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']);