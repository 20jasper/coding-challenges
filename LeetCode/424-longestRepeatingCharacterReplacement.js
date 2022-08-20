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
This solution is O(n) for both time and O(1) for space where n is the length of the string
*/
/**
 * @param {string} str
 * @param {number} maxFlipCount
 * @return {number}
 */
const characterReplacement = function (str, maxFlipCount) {
	//if every char or all but one char can be flipped, return the length of the string 
	if (maxFlipCount >= str.length - 1) {
		return str.length
	}

	const hashMap = {}
	let maxLength = 0
	let maxLetterFrequency = 0

	//iterate from left to right until the right pointer is at the end of the string
	for (let left = 0, right = left; right < str.length; right++) {
		const rightLetter = str[right];
		let length = right - left + 1
		//add the current letter to  the hashmap
		if (hashMap[rightLetter] === undefined) hashMap[rightLetter] = 1
		else hashMap[rightLetter]++

		maxLetterFrequency = Math.max(maxLetterFrequency, hashMap[rightLetter])
		//if there are too many characters that need flipped, move the left pointer right until the window is valid
		while (length - maxLetterFrequency > maxFlipCount) {
			const leftLetter = str[left]
			//decrement the count of the left letter in the hashmap
			hashMap[leftLetter]--
			//increment the left pointer and decrement the current length
			left++
			length--
		}
		//set new max value
		maxLength = Math.max(maxLength, length)
	}
	//return the maxLength
	return maxLength
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
