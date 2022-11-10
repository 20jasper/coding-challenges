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
The time and space complexity of this solution is O(4^n) where n is the number of pairs of parentheses since there are 2 decisions per parenthesis (I definitely did not just Google the singular form of parentheses), and there are 2 parentheses per pair, or 4^n possible pairs to check through. The actual number is closer to 3.7^n since a decision that will make invalid parentheses will not be made
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