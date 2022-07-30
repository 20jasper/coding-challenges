//URL--
// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

//INSTRUCTIONS--
/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

//SOLUTION--
/* 
*/
function position(letter) {
	//make a string of the alphabet
	const alphabet = "abcdefghijklmnopqrstuvwxyz"
	//get the position from the index of the letter + 1
	const position = alphabet.indexOf(letter) + 1
	//return the position at the end of the string
	return `Position of alphabet: ${position}`
}
//TESTCASES--
console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");