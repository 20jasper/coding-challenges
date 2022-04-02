//URL--
// https://www.codewars.com/kata/57e1e61ba396b3727c000251

//INSTRUCTIONS--
/* Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

*/

//SOLUTION--
/* I am going to split the string by an empty character and then filter anything that is a number
Then I will join the array into a string again

It turned out filtering out anything that was not not a number would also get rid of spaces, so I ended up filtering out anything that wasn't a space or that wasn't not a number
*/
function stringClean(s) {
	return s
		.split('')
		.filter((x) => x === ' ' || isNaN(x))
		.join('');
}
//TESTCASES--
console.log(stringClean('')); //''
console.log(stringClean('123456789')); //''
console.log(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!')); //'Dsa cdsc csa!!! I Am cool!'
console.log(stringClean('(E3at m2e2!!)')); //'(Eat me!!)'
