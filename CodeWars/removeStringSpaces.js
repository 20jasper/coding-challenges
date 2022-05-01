//URL--
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//INSTRUCTIONS--
/* Simple, remove the spaces from the string, then return the resultant string.
 */

//SOLUTION--
/* I am going to split the string by spaces and then join it by an empty character
 */
function noSpace(x) {
	return x.split(' ').join('');
}
//TESTCASES--
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); //'8j8mBliB8gimjB8B8jlB'
