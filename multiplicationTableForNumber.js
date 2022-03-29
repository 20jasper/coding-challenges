//URL--
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
//INSTRUCTIONS--
/* Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

*/

//SOLUTION--
/* I am going to make a loop that adds multiplies numbers 1-10 by a number and displays the calculation
I will add a new line character after all but the last calculation
*/
function multiTable(number) {
	let multiplicationTable = '';
	for (let i = 1; i < 10; i++) {
		multiplicationTable += `${multiply(i, number)}\n`;
	}
	multiplicationTable += multiply(10, number);
	return multiplicationTable;
}
function multiply(number1, number2) {
	return `${number1} * ${number2} = ${number1 * number2}`;
}
//TESTCASES--
console.log(multiTable(5)); //'1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
