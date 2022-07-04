//URL--
// https://www.codewars.com/kata/55911ef14065454c75000062/

//INSTRUCTIONS--
/* This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

		The arguments are passed as strings.
		The numbers may be way very large
		Answer should be returned as a string
		The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!

*/

//SOLUTION--
/* I am going to convert each string to BigInt and multiply them
return the result as a string
*/
function multiply(a, b) {
	const product = BigInt(a) * BigInt(b)
	return product.toString()
}
//TESTCASES--
console.log(multiply("98765", "56894"), "5619135910");
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
console.log(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
console.log(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");