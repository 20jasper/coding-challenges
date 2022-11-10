//URL--
// https://leetcode.com/problems/length-of-last-word/solutions/

//INSTRUCTIONS--
/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

 

Constraints:

		1 <= s.length <= 104
		s consists of only English letters and spaces ' '.
		There will be at least one word in s.


*/

//SOLUTION--
/* 
This solution has a time complexity of O(n) and a space complexity of O(1) where n is the length of the string
*/
var lengthOfLastWord = function (s) {
	//start at the end of the string
	let i = s.length - 1

	//skip spaces before first word
	while (s[i] === " ") {
		i--
	}

	let wordLength = 0

	//count word length until end or the char is a space
	while (i >= 0 && s[i] !== " ") {
		wordLength++
		i--
	}

	return wordLength
};
//TESTCASES--
console.log(lengthOfLastWord('ss'), 2);
console.log(lengthOfLastWord(' s'), 1);
console.log(lengthOfLastWord('s '), 1);