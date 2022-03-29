//URL--
// https://www.codewars.com/kata/57cc975ed542d3148f00015b

//INSTRUCTIONS--
/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

//SOLUTION--
/* I am going to use the includes method to see if the array contains the given value
If so, return true, and if not, return false
*/
function check(a, x) {
	return a.includes(x);
}
//TESTCASES--
console.log(check([66, 101], 66)); //true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //false
