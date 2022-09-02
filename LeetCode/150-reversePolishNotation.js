//URL--
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

//INSTRUCTIONS--
/* Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

 

Constraints:

		1 <= tokens.length <= 104
		tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].


*/

//SOLUTION--
/*
This solution has a time complexity of O(n) and a space complexity of O(n) where n is the length of the array 
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
	const stack = []
	//lookup table for callback functions
	const operations = {
		"*": (num1, num2) => num1 * num2,
		"+": (num1, num2) => num1 + num2,
		"/": (num1, num2) => Math.trunc(num1 / num2),
		"-": (num1, num2) => num1 - num2,
	}
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		//if the token is an operation
		if (operations[token] !== undefined) {
			//take the first 2 nums off the top of the stack
			const rightNum = stack.pop()
			const leftNum = stack.pop()
			const operation = operations[token]
			//replace them with the result of the operation
			stack.push(operation(leftNum, rightNum))
		}
		//convert to a string then push the number onto the stack
		else stack.push(Number(token))
	}
	//return the top element on the stack
	return stack[0]
};
//TESTCASES--
console.log(evalRPN(["2", "1", "+", "3", "*"]), 9);
console.log(evalRPN(["4", "13", "5", "/", "+"]), 6);
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22);
