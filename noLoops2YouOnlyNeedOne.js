//URL--
// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

//INSTRUCTIONS--
/* *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

//SOLUTION--
/* I am going to use the includes method to see if the array contains the desired value
 */
function check(a, x) {
	return a.includes(x);
}
//TESTCASES--
console.log(check([66, 101], 66)); //true
console.log(check(['t', 'e', 's', 't'], 'e')); //true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); //false
