//URL--
// https://www.codewars.com/kata/51b6249c4612257ac0000005/

//INSTRUCTIONS--
/* 
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

VII=>7
IV=>4
MCMXC=>1990
MMVIII=>2008

convert roman numerals to decimals

input will always be a valid nonempty string
return the decimal representation as an integer

*/

//SOLUTION--
/* 

*/
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(romanNumerals) {
	//use an object to store the value of each symbol
	const romanToDecimal = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	//initialize the sum as the value of the first character
	const lastIndex = romanNumerals.length - 1
	const char = romanNumerals[lastIndex]
	let sum = romanToDecimal[char]
	//iterate through the string from end to start
	for (let i = lastIndex; i > 0; i--) {

		const currentChar = romanNumerals[i]
		const nextChar = romanNumerals[i - 1]

		const currentValue = romanToDecimal[currentChar]
		const nextValue = romanToDecimal[nextChar]
		//if the value of the next character is more than or equal to the value of the current character, add the value to the sum
		if (nextValue >= currentValue) {
			sum += nextValue
		}
		//else subtract the value of the next character from the sum
		else {
			sum -= nextValue
		}
	}
	//return the sum 
	return sum
}
//TESTCASES--
console.log(romanToInt("VII"), 7);
console.log(romanToInt("IV"), 4);
console.log(romanToInt("MCMXC"), 1990);
console.log(romanToInt("MMVIII"), 2008);
console.log(romanToInt("V"), 5);