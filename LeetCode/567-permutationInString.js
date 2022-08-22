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
	for (let left = 0, right = left + str1.length - 1; right < str2.length; left++, right++) {
		//hash the current window
		const str2Hash = getHash(str2.slice(left, right + 1))
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
console.log(checkInclusion("adc", "dcda"), true);


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
	for (let left = 0, right = left + str1.length - 1; right < str2.length; left++, right++) {
		//hash the current window
		const str2Hash = getHash(str2.slice(left, right + 1))
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
console.log(checkInclusion2("adc", "dcda"), true);


//SOLUTION--
/* 
This time, I will use a rolling dictionary and only compare them when the frequencies of the changed letters is the same in both dictionaries

The time complexity of this solution is O(m) and the space complexity is O(1) where m is the length of the second string
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion3 = function (str1, str2) {
	//if the first string is longer than the second, return false
	if (str1.length > str2.length) {
		return false
	}

	//create dictionaries recording each letter's frequency in the initial window 
	const str1Dictionary = Array(26).fill(0)
	const str2Dictionary = Array(26).fill(0)
	for (let i = 0; i < str1.length; i++) {
		updateLetterFrequency(str1Dictionary, str1[i], 1)
		updateLetterFrequency(str2Dictionary, str2[i], 1)
	}

	if (isPermutation()) {
		return true
	}

	//iterate through the string until the end of the window hits the end
	for (let left = 0, right = left + str1.length; right < str2.length; left++, right++) {
		//update the letter frequency for the new window
		updateLetterFrequency(str2Dictionary, str2[left], -1)
		updateLetterFrequency(str2Dictionary, str2[right], 1)

		//if the frequencies of the changed letters are the same and the current window is a permutation
		if (haveSameFrequency(str2[left]) && haveSameFrequency(str2[right]) && isPermutation()) {
			return true
		}
	}

	//if no matches are found, return false
	return false

	//get the index of a letter in the dictionary
	function getAlphaIndex(char) {
		const charCode = char.charCodeAt();
		return charCode - 97
	}
	//update the frequency of a letter in the dictionary
	function updateLetterFrequency(dictionary, char, mod) {
		// update the appropriate index in the array where a is 0 and z is 25
		const alphaIndex = getAlphaIndex(char)
		dictionary[alphaIndex] += mod
	}
	//check if the current window is a permutation of the first string
	function isPermutation() {
		//check if all letter frequencies are equal
		for (let i = 0; i < 26; i++) {
			//if the current letter's frequencies are different return false
			if (str1Dictionary[i] !== str2Dictionary[i]) {
				return false
			}
		}
		//if all letter's frequencies are the same, return true
		return true
	}
	//check if the frequency of a certain char is the sam in both dictionaries
	function haveSameFrequency(char) {
		const alphaIndex = getAlphaIndex(char)
		return str1Dictionary[alphaIndex] === str2Dictionary[alphaIndex]
	}
};
//TESTCASES--
console.log(checkInclusion3("abcdefg", "b"), false);
console.log(checkInclusion3("ab", "ba"), true);
console.log(checkInclusion3("ab", "boa"), false);
console.log(checkInclusion3("abb", "sdfsdbbae"), true);
console.log(checkInclusion3("acb", "bcboaase"), false);
console.log(checkInclusion3("adc", "dcda"), true);

//SOLUTION--
/* 
This time, I will use a rolling dictionary and keep track of how many differences in frequency there are

The time complexity of this solution is O(m) and the space complexity is O(1) where m is the length of the second string
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion4 = function (str1, str2) {
	//if the first string is longer than the second, return false
	if (str1.length > str2.length) {
		return false
	}

	let sameFrequencyCount = 26

	//create dictionaries recording each letter's frequency in the initial window 
	const str1Dictionary = Array(26).fill(0)
	const str2Dictionary = Array(26).fill(0)
	for (let i = 0; i < str1.length; i++) {
		updateLetterFrequency(str1Dictionary, str1[i], 1)
		updateLetterFrequency(str2Dictionary, str2[i], 1)
	}

	//if all letters have the same frequency in both dictionaries
	if (sameFrequencyCount === 26) {
		return true
	}

	//iterate through the string until the end of the window hits the end
	for (let left = 0, right = left + str1.length; right < str2.length; left++, right++) {
		//update the letter frequency for the new window
		updateLetterFrequency(str2Dictionary, str2[left], -1)
		updateLetterFrequency(str2Dictionary, str2[right], 1)

		//if all letters have the same frequency in both dictionaries
		if (sameFrequencyCount === 26) {
			return true
		}
	}

	//if no matches are found, return false
	return false

	//update the frequency of a letter in the dictionary
	function updateLetterFrequency(dictionary, char, mod) {
		// get the index in the array where a is 0 and z is 25
		const charCode = char.charCodeAt();
		const alphaIndex = charCode - 97
		//if the frequencies are equal before they are changed, decrement sameFrequencyCount
		if (str1Dictionary[alphaIndex] === str2Dictionary[alphaIndex]) {
			sameFrequencyCount--
		}
		//change the character frequency
		dictionary[alphaIndex] += mod
		//if the frequencies are equal after they are changed, increment sameFrequencyCount
		if (str1Dictionary[alphaIndex] === str2Dictionary[alphaIndex]) {
			sameFrequencyCount++
		}
	}
};
//TESTCASES--
console.log(checkInclusion4("abcdefg", "b"), false);
console.log(checkInclusion4("ab", "ba"), true);
console.log(checkInclusion4("ab", "boa"), false);
console.log(checkInclusion4("abb", "sdfsdbbae"), true);
console.log(checkInclusion4("acb", "bcboaase"), false);
console.log(checkInclusion4("adc", "dcda"), true);

//SOLUTION--
/* 
This time, I will only store the difference in letter frequency instead of each dictionary

The time complexity of this solution is O(m) and the space complexity is O(1) where m is the length of the second string
*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion5 = function (str1, str2) {
	//if the first string is longer than the second, return false
	if (str1.length > str2.length) {
		return false
	}

	let sameFrequencyCount = 26

	//create dictionaries recording each letter's frequency in the initial window 
	const dictionary = Array(26).fill(0)
	for (let i = 0; i < str1.length; i++) {
		updateLetterFrequency(str1[i], -1)
		updateLetterFrequency(str2[i], 1)
	}

	//if all letters have the same frequency in both dictionaries
	if (sameFrequencyCount === 26) {
		return true
	}

	//iterate through the string until the end of the window hits the end
	for (let left = 0, right = left + str1.length; right < str2.length; left++, right++) {
		//update the letter frequency for the new window
		updateLetterFrequency(str2[left], -1)
		updateLetterFrequency(str2[right], 1)

		//if all letters have the same frequency in both dictionaries
		if (sameFrequencyCount === 26) {
			return true
		}
	}

	//if no matches are found, return false
	return false

	//update the frequency of a letter in the dictionary
	function updateLetterFrequency(char, mod) {
		// get the index in the array where a is 0 and z is 25
		const charCode = char.charCodeAt();
		const alphaIndex = charCode - 97
		//if the frequencies are equal before they are changed, decrement sameFrequencyCount
		if (dictionary[alphaIndex] === 0) {
			sameFrequencyCount--
		}
		//change the character frequency
		dictionary[alphaIndex] += mod
		//if the frequencies are equal after they are changed, increment sameFrequencyCount
		if (dictionary[alphaIndex] === 0) {
			sameFrequencyCount++
		}
	}
};
//TESTCASES--
console.log(checkInclusion5("abcdefg", "b"), false);
console.log(checkInclusion5("ab", "ba"), true);
console.log(checkInclusion5("ab", "boa"), false);
console.log(checkInclusion5("abb", "sdfsdbbae"), true);
console.log(checkInclusion5("acb", "bcboaase"), false);
console.log(checkInclusion5("adc", "dcda"), true);
