//URL--
// https://leetcode.com/problems/valid-anagram/

//INSTRUCTIONS--
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

*/

//SOLUTION--
/* 
if the string has a different number of letters than the test string, return false
count all the letters in the first string in a hashmap
iterate through the test string
    if the key doesn't exist or the key's value is 0, return false
    else decrement the key's value by one
return true

This solution has a time complexity of O(n) and a space complexity of O(1)
*/
/**
 * @param {string} str
 * @param {string} strTest
 * @return {boolean}
 */
const isAnagram = function (str, strTest) {
    // if the string has a different number of letters than the test string, return false
    if (str.length !== strTest.length) {
        return false
    }
    // count all the letters in the first string in an object
    const letters = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        //if the key doesn't exist, set it equal to 1
        if (letters[char] === undefined) {
            letters[char] = 1
        }
        //otherwise increment the key by 1
        else {
            letters[char]++
        }
    }
    for (let i = 0; i < strTest.length; i++) {
        const char = strTest[i];
        //if the letter is not in letters, or there are 0 letters left, return false
        if (letters[char] === undefined || letters[char] === 0) {
            return false
        }
        //otherwise decrement the count of that letter
        letters[char]--
    }
    //return true if all letters in both strings
    return true
}

//TESTCASES--
console.log(isAnagram("anagram", "n"), false)
console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("rat", "car"), false)
console.log(isAnagram("aacc", "ccac"), false)