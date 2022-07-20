//URL--
// https://leetcode.com/problems/count-and-say/

//INSTRUCTIONS--
/* 
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

		countAndSay(1) = "1"
		countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

 

Constraints:

		1 <= n <= 30


*/

//SOLUTION--
/* 
*/
/**
 * @param {number} n
 * @return {string}
 */
/*
The time complexity would be n*l where l is the length of the string at each step and n is the number of times the string is changed
The space complexity is the longest string length
This solution iterates through the string until the next number is different and adds to the string, then continues until there are no more characters left
Repeat this n-1 times
*/
//Iterative approach
// const countAndSay = function (n) {
// 	//start str at 1
// 	let str = "1"
// 	//change the string n-1 times
// 	for (let i = 1; i < n; i++) {
// 		let newStr = ''
// 		//iterate through the string
// 		for (let j = 0; j < str.length; j++) {
// 			//initialize the count as 1
// 			let count = 1
// 			//while the current number is equal to the next
// 			while (str[j] === str[j + 1]) {
// 				count++
// 				j++
// 			}
// 			//add the number of letters then the number to the new string
// 			newStr += `${count}${str[j]}`
// 		}
// 		//set the value of the string to the new string
// 		str = newStr
// 	}
// 	//return the string
// 	return str
// };
//Recursive approach
const countAndSay = function (n, str = "1") {
	//if n is one, return the string
	if (n === 1) {
		return str
	}
	let newStr = ''
	//iterate through the string
	for (let j = 0; j < str.length; j++) {
		//initialize the count as 1
		let count = 1
		//while the current number is equal to the next
		while (str[j] === str[j + 1]) {
			count++
			j++
		}
		//add the number of letters then the number to the new string
		newStr += `${count}${str[j]}`
	}
	//decrement n by 1
	n--
	// run the function again with the new string
	return countAndSay(n, newStr)
};

//TESTCASES--
console.log(countAndSay(1), "1");
console.log(countAndSay(4), "1121");