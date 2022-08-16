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
if the right pointer hits the end of the string, break

if (maxLength >= right - left || right === length - 1) {
				return maxLength
			}
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

	let maxLength = 0
	const length = s.length
	let left = 0, right = 0;

	while (right < length) {
		const char = s[left];
		let flipCount = 0

		//while more flips can be done and the right pointer is in bounds
		while (right < length && flipCount < k) {
			right++
			//if the right char is different than the left char
			if (s[right] !== char) {
				//increase the number of flips
				flipCount++
			}
		}

		while (right < length && s[right] === char) {
			right++
		}

		maxLength = Math.max(maxLength, right - left + 1)
		//move the left pointer until it's on a different character
		while (s[left] === char) {
			left++
		}
		right = left
	}
	return Math.max(maxLength, right - left + 1)
};
//TESTCASES--
console.log(characterReplacement("ABAB", 2), 4);
console.log(characterReplacement("ABABCB", 2), 5);
console.log(characterReplacement("AABABBA", 1), 4);
