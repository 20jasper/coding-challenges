//URL--
// https://leetcode.com/problems/valid-palindrome/

//INSTRUCTIONS--
/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.


*/

//SOLUTION--
/* 
If the string is 0 or 1 long, return true
Go to the next character until the first and last character of the string is an alphanumberic character 
    check if their lowercase versions are the same
        return false if not
    go through the function again with the middle of the two characters
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//recursive version
const isPalindrome = function (s) {
    //if empty string or one character long return true
    if (s.length < 2) {
        return true
    }
    const firstChar = s[0]
    const lastChar = s[s.length - 1]
    //if the first character is not alphanumeric, run the function again with the string after the first character
    if (!isAlphanumeric(firstChar)) {
        return isPalindrome(s.slice(1))
    }
    //if the last character is not alphanumeric, run the function again with the string before the last character
    if (!isAlphanumeric(lastChar)) {
        return isPalindrome(s.slice(0, -1))
    }
    //if first and last characters are the same, put the string between the first and last character back through the function
    if (firstChar.toLowerCase() === lastChar.toLowerCase()) {
        return isPalindrome(s.slice(1, -1))
    }
    //if first and last characters aren't the same, return false
    return false
};
function isAlphanumeric(character) {
    return /[a-z0-9]/i.test(character)
}
//TESTCASES--
console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("aaa"), true);
console.log(isPalindrome(" "), true);
console.log(isPalindrome("race a car"), false);
console.log(isPalindrome("0P"), false);

//SOLUTION--
/* 
If the string is 0 or 1 long, return true
Go to the next character until the first and last character of the string is an alphanumberic character 
    check if their lowercase versions are the same
        return false if not
    go through the function again with the middle of the two characters
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//iterative version
const isPalindrome2 = function (s) {
    //if empty string or one character long return true
    if (s.length < 2) {
        return true
    }
    let left = 0
    let right = s.length - 1
    //while the left character is to the left of the right character
    while (left < right) {
        //if the first character is not alphanumeric, move the pointer right
        if (!isAlphanumeric(s[left])) {
            left++
        }
        //if the first character is not alphanumeric, move the pointer left
        else if (!isAlphanumeric(s[right])) {
            right--
        }
        else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            //if first and last characters aren't the same, return false
            return false
        }
        else {
            left++
            right--
        }
    }
    return true
};
function isAlphanumeric(character) {
    return /[a-z0-9]/i.test(character)
}
//TESTCASES--
console.log(isPalindrome2("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome2("aaa"), true);
console.log(isPalindrome2(" "), true);
console.log(isPalindrome2("0P"), false);
console.log(isPalindrome2("race a car"), false);