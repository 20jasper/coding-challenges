//URL--
// https://leetcode.com/problems/palindrome-number/

//INSTRUCTIONS--
/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

    Constraints:

    -231 <= x <= 231 - 1

*/

//SOLUTION--
/* 
If the number is less than 0, return false
I am going to convert the number to a string and then an array and check if the reversed string is the same as the regular string 
return the result
*/
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    const str = x.toString()
    const revStr = [...str].reverse().join('')
    return str === revStr
};
//TESTCASES--
console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(-10), false);