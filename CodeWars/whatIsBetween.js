//URL--
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/

//INSTRUCTIONS--
/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]


*/

//SOLUTION--
/* I am going to use a loop starting at a and ending at b, and add each value to an array
return the value
*/
function between(a, b) {
	const arr = []
	for (let i = a; i <= b; i++) {
		arr.push(i)
	}
	return arr
}
//TESTCASES--
console.log(between(-2, 2), [-2, -1, 0, 1, 2])
console.log(between(1, 4), [1, 2, 3, 4])