//URL--
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/

//INSTRUCTIONS--
/* Write a function that checks if a given string (case insensitive) is a palindrome.
*/

//SOLUTION--
/* 
*/
const isPalindrome = function (s) {
	//if empty string or one character long return true
	if (s.length < 2) {
		return true
	}
	let left = 0
	let right = s.length - 1
	//while the left character is to the left of the right character
	while (left < right) {
		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
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
//TESTCASES--
console.log(isPalindrome("a"), true)
console.log(isPalindrome("aba"), true)
console.log(isPalindrome("Abba"), true)
console.log(isPalindrome("hello"), false)
console.log(isPalindrome("Bob"), true)
console.log(isPalindrome("Madam"), true)
console.log(isPalindrome("AbBa"), true)
console.log(isPalindrome(""), true)