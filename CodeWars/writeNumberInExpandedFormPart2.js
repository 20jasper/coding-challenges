//URL--
// https://www.codewars.com/kata/58cda88814e65627c5000045

//INSTRUCTIONS--
/* Write Number in Expanded Form - Part 2

This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
*/

//SOLUTION--
/* 
take in a number can go up to a million with precision as low as a thousandth
do something
return the string converted to expanded form

*/
function expandedForm(num) {
	//convert to a string
	const str = String(num)
	//Then split it by a period
	const arr = str.split('.')

	//for the first array
	//Split the string by an empty character
	const integerArr = arr[0].split('')
	const convertedIntegerArr = integerArr
		.map((str, i) => {
			const num = Number(str)
			//multiply by 10 to the power of the length of the array - 1 - current index
			return num * 10 ** (integerArr.length - 1 - i)
		})
		.filter((num) => num !== 0)
	//if there is no decimal, return the integer array joined by ' + '
	if (arr.length === 1) {
		return convertedIntegerArr.join(' + ')
	}
	//for the second array
	//Split the string by an empty character
	const fractionArr = arr[1].split('')
	const convertedFractionArr = fractionArr
		.map((str, i) => {
			const num = Number(str)
			//multiply by 10 to the power of the length of the array - 1 - current index
			return `${num}/${10 ** (i + 1)}`
		})
		.filter((num) => !num.startsWith("0"))
	//concatenate the arrays and join by ' + '
	const numArr = [...convertedIntegerArr, ...convertedFractionArr]
	return numArr.join(' + ')
}
//TESTCASES--
console.log(expandedForm(.304), '3/10 + 4/1000');
console.log(expandedForm(807.304), '800 + 7 + 3/10 + 4/1000');
console.log(expandedForm(1.24), '1 + 2/10 + 4/100');
console.log(expandedForm(4.28), '4 + 2/10 + 8/100');
console.log(expandedForm(7.304), '7 + 3/10 + 4/1000');
console.log(expandedForm(8_765_887.314), '8000000 + 700000 + 60000 + 5000 + 800 + 80 + 7 + 3/10 + 1/100 + 4/1000');
console.log(expandedForm(234), '200 + 30 + 4')
console.log(expandedForm(2), '2')
console.log(expandedForm(0), '0');
console.log(expandedForm(1), '1');
