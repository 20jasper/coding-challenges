//URL--
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

//INSTRUCTIONS--
/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

//SOLUTION--
/* I am going to convert each string to BigInt and add them
return the result as a string
*/
function sumStrings(a, b) {
	const sum = BigInt(a) + BigInt(b)
	return sum.toString()
}
//TESTCASES--
console.log(sumStrings('123', '456'), '579')
