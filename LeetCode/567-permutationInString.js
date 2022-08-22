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

The time complexity of this solution is O(m*nlogn) and the space complexity is O(m+n) where n is the length of the first string, and m is the length of the second
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion = function (str1, str2) {
	//if the first string is longer than the second, return false
	if (str1.length > str2.length) {
		return false
	}
	const str1Hash = getHash(str1)

	//iterate through the string until the end of the window hits the end
	for (let i = 0; i + str1.length - 1 < str2.length; i++) {
		//hash the current window
		const str2Hash = getHash(str2.slice(i, i + str1.length))
		//if the hashes are the same, return true
		if (str1Hash === str2Hash) {
			return true
		}
	}

	//if no matches are found, return false
	return false
	function getHash(str) {
		//alphabetically sort the string
		return [...str].sort().join("")
	}
};
//TESTCASES--
console.log(checkInclusion("abcdefg", "b"), false);
console.log(checkInclusion("ab", "ba"), true);
console.log(checkInclusion("ab", "boa"), false);
console.log(checkInclusion("abb", "sdfsdbbae"), true);
console.log(checkInclusion("acb", "bcboaase"), false);

//SOLUTION--
/* 
The last solution's hashing function can be optimized by hashing with bucket sort instead of by sorting by character code

The time complexity of this solution is O(m*n) and the space complexity is O(m+n) where n is the length of the first string, and m is the length of the second
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion2 = function (str1, str2) {
	//if the first string is longer than the second, return false
	if (str1.length > str2.length) {
		return false
	}
	const str1Hash = getHash(str1)

	//iterate through the string until the end of the window hits the end
	for (let i = 0; i + str1.length - 1 < str2.length; i++) {
		//hash the current window
		const str2Hash = getHash(str2.slice(i, i + str1.length))
		//if the hashes are the same, return true
		if (str1Hash === str2Hash) {
			return true
		}
	}

	//if no matches are found, return false
	return false
	function getHash(str) {
		const dictionary = Array(26).fill(0)

		for (let i = 0; i < str.length; i++) {
			// increment the appropriate index in the array where a is 0 and z is 25
			const charCode = str.charCodeAt(i);
			const alphaIndex = charCode - 97
			dictionary[alphaIndex]++
		}
		//delimit the string by a non-digit character
		return dictionary.join("|")
	}
};
//TESTCASES--
console.log(checkInclusion2("abcdefg", "b"), false);
console.log(checkInclusion2("ab", "ba"), true);
console.log(checkInclusion2("ab", "boa"), false);
console.log(checkInclusion2("abb", "sdfsdbbae"), true);
console.log(checkInclusion2("acb", "bcboaase"), false);
