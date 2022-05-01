//URL--
// https://www.codewars.com/kata/57a5015d72292ddeb8000b31

//INSTRUCTIONS--
/* Palindrome strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
Examples

isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false


*/

//SOLUTION--
/* I am going to check to see if the reversed version of a string and the regular string are the same
I am going to reverse the string by splitting it into an array, using the reverse method on it and then joining it together again

I needed to convert numbers to a string to be able to split them
*/
function isPalindrome(line) {
	line = String(line);
	return line === line.split('').reverse().join('');
}
//TESTCASES--
console.log(isPalindrome('anna')); //true
console.log(isPalindrome('walter')); //false
console.log(isPalindrome('a')); //true
console.log(isPalindrome(131)); //true
