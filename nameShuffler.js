//URL--
// https://www.codewars.com/kata/559ac78160f0be07c200005a

//INSTRUCTIONS--
/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

//SOLUTION--
/* I am going to split the string into an array by spaces and then reverse it
Then I will join it into a string again by spaces and return it
*/
function nameShuffler(str) {
	return str.split(' ').reverse().join(' ');
}
//TESTCASES--
console.log(nameShuffler('john McClane')); //'McClane john'
