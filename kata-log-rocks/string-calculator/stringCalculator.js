//URL--
// https://osherove.com/tdd-kata-1/

//INSTRUCTIONS--
/*
1. Create a simple String calculator with a method signature:

———————————————

int Add(string numbers)

———————————————

The method can take up to two numbers, separated by commas, and will return their sum.

for example “” or “1” or “1,2” as inputs.

(for an empty string it will return 0)

Hints:

——————

 - Start with the simplest test case of an empty string and move to one and two numbers

 - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about

 - Remember to refactor after each passing test

2 Allow the Add method to handle an unknown amount of numbers

3 Allow the Add method to handle new lines between numbers (instead of commas).

		the following input is ok: “1\n2,3” (will equal 6)

		the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)
4 Support different delimiters

		to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .

		the first line is optional. all existing scenarios should still be supported
5 Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed. 

if there are multiple negatives, show all of them in the exception message.
*/

//SOLUTION--
/* 
*/
function Add(numberString) {
	let numbersArr = null

	// if custom delimiter
	if (numberString.startsWith('//')) {
		const customDelimiter = numberString[2]
		const numbers = numberString.slice(4)

		numbersArr = numbers.split(customDelimiter)
	}

	else {
		// split by newline char or comma
		numbersArr = numberString.split(/,|\n/)
	}

	throwIfNegative(numbersArr)

	const sum = numbersArr.reduce((total, num) => total + Number(num)
		, 0)

	return sum
}

function throwIfNegative(numbersArr) {
	const negativesArr = []

	numbersArr.forEach(num => {
		if (num.startsWith('-')) {
			negativesArr.push(num)
		}
	})

	let errorMessage = 'negatives not allowed'

	if (negativesArr.length === 1) {
		throw Error(errorMessage)
	}
	else if (negativesArr.length > 1) {
		errorMessage += ' offending numbers are '

		negativesArr.forEach(num => {
			errorMessage += `${num}, `
		})

		throw Error(errorMessage)
	}
}

module.exports = { Add }