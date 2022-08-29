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
	//if 2nd string is bigger than the first or the second string is empty, return an empty string
	if (str2.length > str1.length || str2 === "") return ""

	const set = new Set()
	const hashMap = {}
	let invalidFrequencies = 0
	//add all the letters in the second string to a set and update their frequencies in the hashMap
	for (let i = 0; i < str2.length; i++) {
		set.add(str2[i])
		updateLetterFrequency(str2[i], -1)
	}

	let minWindowSize = Infinity
	let minWindowIndices = [-1, -1]

	//iterate over the string until the right pointer hits the end
	for (let left = 0, right = 0; right < str1.length; right++) {
		updateLetterFrequency(str1[right], 1)
		//while the window is valid
		while (invalidFrequencies === 0) {
			const windowSize = right - left + 1
			//if the current window is less than the minimum
			if (windowSize < minWindowSize) {
				//update the min window size and indices
				minWindowSize = windowSize
				minWindowIndices = [left, right]
				//if the window is the minimum possible valid size, break
				if (minWindowSize === str2.length) break
			}
			//move the left pointer in and update the letter's frequency 
			updateLetterFrequency(str1[left], -1)
			left++
		}
	}
	//if there is no valid window, return empty string
	if (minWindowSize === Infinity) return ""
	//return the window
	return str1.slice(minWindowIndices[0], minWindowIndices[1] + 1)

	function updateLetterFrequency(char, mod) {
		//if the char isn't in the second string, break out of the function
		if (!set.has(char)) return
		//if the character doesn't exist yet in the hashmap, set its value to 0
		if (hashMap[char] === undefined) hashMap[char] = 0

		const temp = hashMap[char]
		hashMap[char] += mod
		const curr = hashMap[char]
		//if the frequency was valid and became invalid, increment invalidFrequencies
		if (temp === 0 && curr === -1) invalidFrequencies++
		//if the frequency was invalid and became valid, decrement invalidFrequencies
		else if (temp === -1 && curr === 0) invalidFrequencies--
	}
};
//TESTCASES--
console.log(minWindow("", ""), "")
console.log(minWindow("", "a"), "")
console.log(minWindow("a", ""), "")
console.log(minWindow("a", "aa"), "");
console.log(minWindow("a", "a"), "a");
console.log(minWindow("a", "b"), "");
console.log(minWindow("ab", "a"), "a");
console.log(minWindow("abcdefge", "cba"), "abc");
console.log(minWindow("ADOBECODEBANC", "ABC"), "BANC");
console.log(minWindow("ADOBECODEBANC", "ABCZ"), "");