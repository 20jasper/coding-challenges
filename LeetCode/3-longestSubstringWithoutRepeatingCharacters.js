//URL--
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

//INSTRUCTIONS--
/* 
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

		0 <= s.length <= 5 * 104
		s consists of English letters, digits, symbols and spaces.


*/

//SOLUTION--
/* 
For this solution, iterate over the string until the a repeated char is reached. Then move the left pointer to the right to the character after the next instance of the char in the string

The time complexity of this solution is O(n) and the space complexity is O(n) where n is the length of the string
*/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
	let set = new Set()
	let maxLength = 0

	for (let left = 0, right = 0; right < s.length; right++) {
		const char = s[right];

		if (set.has(char)) {
			//set new max length
			maxLength = Math.max(maxLength, set.size)
			//move the left pointer right to the next instance of the repeated char and remove any chars before it from the set
			while (s[left] !== char) {
				set.delete(s[left])
				left++
			}
			//move the left pointer past the repeated char
			left++
		}
		//otherwise add the char to the set
		else set.add(char)
	}
	return Math.max(maxLength, set.size)
};
//TESTCASES--
console.log(lengthOfLongestSubstring(""), 0);
console.log(lengthOfLongestSubstring("a"), 1);
console.log(lengthOfLongestSubstring("helm"), 4);
console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
console.log(lengthOfLongestSubstring("advdfa"), 4);