//URL--
// https://leetcode.com/problems/longest-repeating-character-replacement/

//INSTRUCTIONS--
/* 
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

 

Constraints:

		1 <= s.length <= 105
		s consists of only uppercase English letters.
		0 <= k <= s.length


*/

//SOLUTION--
/* 

*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
	//if k is can change at least k-1 letters, then all can be changed to one letter
	if (k >= s.length - 1) {
		return k
	}
	const hashMap = {}
	let maxLength = 0
	for (let left = 0, right = 0; right < array.length; right++) {
		const element = array[left];

	}
	//iterate through the string from left to right
	//add the value of the current letter to the hashmap
	//if there are too many characters that need flipped, move the left pointer right until the window is valid
	//set new max value

	//return the maxLength


};
//TESTCASES--
//longest is the first character
console.log(characterReplacement("ABAB", 2), 4);
// // longest is first character, but the flips are used up before the end of the string
console.log(characterReplacement("ABA", 1), 3);
console.log(characterReplacement("ABABCB", 2), 5);
console.log(characterReplacement("AABABBA", 1), 4);
console.log(characterReplacement("AAAANBBB", 0), 4);
console.log(characterReplacement("AAAA", 2), 4);
console.log(characterReplacement("ABBB", 2), 4);
