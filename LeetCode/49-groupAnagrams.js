//URL--
// https://leetcode.com/problems/group-anagrams/

//INSTRUCTIONS--
/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 

Constraints:

		1 <= strs.length <= 104
		0 <= strs[i].length <= 100
		strs[i] consists of lowercase English letters.


*/

//SOLUTION--
/* 
The time complexity of this solution is O(mnlogn) where m is the length of the array and n is the max length of words
The space complexity is O(mn)
*/
/**
 * @param {string[]} arr
 * @return {string[][]}
 */
const groupAnagrams = function (arr) {
	const hashMap = {}
	//iterate through the array of words
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i];
		//sort each word
		const sortedWord = [...word].sort().join('')
		//if the the sorted word isn't a key
		if (hashMap[sortedWord] === undefined) {
			//add it to the hashmap, and set its value to an array of the unsorted word
			hashMap[sortedWord] = [word]
		}
		//otherwise, push the unsorted word to the hashmap
		else {
			hashMap[sortedWord].push(word)
		}
	}
	//return each array of anagrams in an array
	return Object.values(hashMap)
};
//TESTCASES--
console.log(groupAnagrams(["eat", "tea", "tan"]), [["tan"], ["eat", "tea"]]);
console.log(groupAnagrams(["tea", "eat", "tan"]), [["tea", "eat",], ["tan"],]);
console.log(groupAnagrams([""]), [[""]]);
console.log(groupAnagrams(["a"]), [["a"]]);
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);

//Optimization--
/* 
Instead of sorting each string, a hash of the number of characters can be created, lowering the time complexity to O(mn) where m is the length of the array and n is the max length of words
The space complexity is O(mn)
*/
/**
 * @param {string[]} arr
 * @return {string[][]}
 */
const groupAnagrams2 = function (arr) {
	const hashMap = {}
	//iterate through the array of words
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i];
		const hash = makeHash(word)
		//if the the sorted word isn't a key
		if (hashMap[hash] === undefined) {
			//add it to the hashmap, and set its value to an array of the unsorted word
			hashMap[hash] = [word]
		}
		//otherwise, push the unsorted word to the hashmap
		else {
			hashMap[hash].push(word)
		}
	}
	//return each array of anagrams in an array
	return Object.values(hashMap)

	function makeHash(str) {
		//Make an array with 26 slots filled with 0s
		const count = Array(26).fill(0)
		for (let i = 0; i < str.length; i++) {
			const char = str[i]
			//get and increment the index in the alphabet for each character where a is 0 and z is 25
			const alphaIndex = char.charCodeAt() - 97
			count[alphaIndex]++
		}
		//join the string together by a non–digit character
		return count.join("|")
	}
};
//TESTCASES--
console.log(groupAnagrams2(["eat", "tea", "tan"]), [["tan"], ["eat", "tea"]]);
console.log(groupAnagrams2(["tea", "eat", "tan"]), [["tea", "eat",], ["tan"],]);
console.log(groupAnagrams2([""]), [[""]]);
console.log(groupAnagrams2(["a"]), [["a"]]);
console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
