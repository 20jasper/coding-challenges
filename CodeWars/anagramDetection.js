//URL--
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript

//INSTRUCTIONS--
/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


*/

//SOLUTION--
/* 
*/
const isAnagram = function (str, strTest) {
    // if the string has a different number of letters than the test string, return false
    if (str.length !== strTest.length) {
        return false
    }
    // count all the letters case insensitively in the first string in an object
    const letters = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        //if the key doesn't exist, set it equal to 0
        if (letters[char] === undefined) {
            letters[char] = 1
        }
        //otherwise increment the key by 1
        else {
            letters[char]++
        }
    }
    for (let i = 0; i < strTest.length; i++) {
        //convert the character to lowercase
        const char = strTest[i].toLowerCase();
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
console.log(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
console.log(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
console.log(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
console.log(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
console.log(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
console.log(isAnagram("apple", "pale"), false, 'Same letters, but different count')