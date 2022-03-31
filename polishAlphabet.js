//URL--
// https://www.codewars.com/kata/57ab2d6072292dbf7c000039

//INSTRUCTIONS--
/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


*/

//SOLUTION--
/* I am going to make a Map of the values we want to replace and what to replace them with
Then I will split the word into an array of characters and then replace each letter accordingly
Then I will join the array into a string and return its value
*/
const Map = {
	ą: 'a',
	ć: 'c',
	ę: 'e',
	ł: 'l',
	ń: 'n',
	ó: 'o',
	ś: 's',
	ź: 'z',
	ż: 'z',
};
function correctPolishLetters(string) {
	return string
		.split('')
		.map((x) => Map[x] || x)
		.join('');
}
//TESTCASES--
console.log(correctPolishLetters('Jędrzej Błądziński')); //"Jedrzej Bladzinski"
console.log(correctPolishLetters('Lech Wałęsa')); //"Lech Walesa"
console.log(correctPolishLetters('Maria Skłodowska-Curie')); //"Maria Sklodowska-Curie"
