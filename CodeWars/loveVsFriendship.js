//URL--
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/

//INSTRUCTIONS--
/* 
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

*/

//SOLUTION--
/* 
*/
function wordsToMarks(string) {
	//generate value hashmap for each letter in the alphabet
	const valueMap = {}
	for (let i = 0; i < 26; i++) {
		const letter = String.fromCharCode(i + 97)
		valueMap[letter] = i + 1
	}
	//add up the value of the word
	let total = 0
	for (let i = 0; i < string.length; i++) {
		const letter = string[i]
		total += valueMap[letter]
	}
	return total
}
//TESTCASES--
console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);