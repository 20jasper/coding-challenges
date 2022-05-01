//URL--
// https://www.codewars.com/kata/57cff961eca260b71900008f

//INSTRUCTIONS--
/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

//SOLUTION--
/* I am going to make an object with properties that are each letter's character code and values that are that character and then replace the character code with the corresponding value in the array
 */

function isVow(a) {
	const map = {
		97: 'a',
		101: 'e',
		105: 'i',
		111: 'o',
		117: 'u',
	};
	return a.map((x) => map[x] || x);
}
//TESTCASES--
console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])); //[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
