//URL--
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

//INSTRUCTIONS--
/* You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

//SOLUTION--
/* I am going to sort the array alphabetically and then take the first value
Then I will split it into an array of every character
Then I will join it by '***'
*/
function twoSort(s) {
	const firstWord = s.sort()[0];
	return firstWord.split('').join('***');
}
//TESTCASES--
console.log(twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])); // 'b***i***t***c***o***i***n'
