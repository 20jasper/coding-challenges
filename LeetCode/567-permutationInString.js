//URL--
// https://leetcode.com/problems/permutation-in-string/

//INSTRUCTIONS--
/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

 

Constraints:

		1 <= s1.length, s2.length <= 104
		s1 and s2 consist of lowercase English letters.


*/

//SOLUTION--
/* 
The first solution I thought of is doing a sliding window approach where the size of the window is the same as the length of the first string
I will sort the first string and the letters within the window
	if they are the same, return true
if there is no match, return false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {

};
//TESTCASES--
console.log(checkInclusion("abcdefg", "b"), false);
console.log(checkInclusion("ab", "ba"), true);
console.log(checkInclusion("ab", "boa"), false);
console.log(checkInclusion("abb", "sdfsdbbae"), true);
console.log(checkInclusion("abc", "bcboaase"), false);