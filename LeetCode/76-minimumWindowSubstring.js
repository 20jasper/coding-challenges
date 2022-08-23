//URL--
// https://leetcode.com/problems/minimum-window-substring/

//INSTRUCTIONS--
/* 
76. Minimum Window Substring
Hard

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

 

Constraints:

		m == s.length
		n == t.length
		1 <= m, n <= 105
		s and t consist of uppercase and lowercase English letters.

 
Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

//SOLUTION--
/* 
*/
/**
 * @param {string} str
 * @param {string} str2
 * @return {string}
 */
const minWindow = function (str1, str2) {
	if (str2.length > str1.length) {
		return ""
	}

	let validFrequencyCount = 52

	const dictionary = Array(52).fill(0)
	for (let i = 0; i < str2.length; i++) {
		updateLetterFrequency(str2[i], -1)
	}

	let left = 0
	let right = 0
	while (right < str1.length) {
		updateLetterFrequency(str1[right], 1)
		if (validFrequencyCount === 52) {
			break
		}
		right++
	}

	if (right === str1.length - 1) {
		if (validFrequencyCount !== 52) return ""
		return str2
	}

	let minWindowSize = right + 1
	let minWindowIndices = [0, right]

	while (right < str1.length) {
		const windowSize = right - left + 1
		console.log(str1.slice(left, right + 1))
		console.log(left, right, right - left + 1, validFrequencyCount)
		console.log({ windowSize, minWindowSize, validFrequencyCount })
		//if window is invalid, move right pointer out
		if (validFrequencyCount < 52) {
			updateLetterFrequency(str1[right], 1)
			right++
		}
		//if window is valid and windowSize is smaller than min windowSize
		else if (windowSize < minWindowSize) {
			//update the minimum substring's indices and length
			minWindowIndices = [left, right]
			minWindowSize = windowSize
			//if the window size is the length of the second string, break the loop
			if (minWindowSize === str2.length) {
				break
			}
		}
		//move left pointer in
		updateLetterFrequency(str1[left], -1)
		left++
	}

	return str1.slice(minWindowIndices[0], minWindowIndices[1] + 1)

	//get index of letter in the dictionary where a is 0, z is 25, A is 26, and Z is 51
	function getAlphaIndex(char) {
		const charCode = char.charCodeAt()
		let alphaIndex
		//if letter is lower case
		if (charCode >= 97 && charCode <= 122) {
			alphaIndex = charCode - 97
		}
		//if letter is uppercase
		else {
			alphaIndex = charCode - 65 + 26
		}
		return alphaIndex
	}
	function updateLetterFrequency(char, mod) {
		const alphaIndex = getAlphaIndex(char)
		const temp = dictionary[alphaIndex]
		//update the letter's frequency in the dictionary
		dictionary[alphaIndex] += mod

		//if the frequency was valid and become invalid, decrement the validFrequencyCount
		if (temp === 0 && dictionary[alphaIndex] !== 0) validFrequencyCount--
		//if the frequency was invalid and become valid, increment the validFrequencyCount
		else if (temp !== 0 && dictionary[alphaIndex] === 0) validFrequencyCount++
	}
};
//TESTCASES--
// console.log(minWindow("a", "aa"), "");
// console.log(minWindow("a", "a"), "a");
// console.log(minWindow("abcdefge", "cba"), "abc");
console.log(minWindow("ADOBECODEBANC", "ABC"), "BANC");
// console.log(minWindow("ADOBECODEBANC", "ABCZ"), "");