//URL--
//https://www.codewars.com/kata/5300901726d12b80e8000498/

//INSTRUCTIONS--
/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

 */

//SOLUTION--
/* I am going to create an empty array
Then I will check whether n numbers is divisible by 3, 5, both, or neither
If it is divisible by both, add FizzBuzz to the end of the array
If it is divisible by 3, add Fizz to the end of the array
If it is divisible by 5, add Buzz to the end of the array
If it is divisible by neither, add the number to the end of the array
 */
// function fizzbuzz(n) {
// 	let arr = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 5 === 0 && i % 3 === 0) {
// 			arr.push('FizzBuzz');
// 		} else if (i % 5 === 0) {
// 			arr.push('Buzz');
// 		} else if (i % 3 === 0) {
// 			arr.push('Fizz');
// 		} else arr.push(i);
// 	}
// 	return arr;
// }

// function fizzbuzz(n) {
// 	let arr = Array(n);
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 5 === 0 && i % 3 === 0) {
// 			arr[i - 1] = 'FizzBuzz';
// 		} else if (i % 5 === 0) {
// 			arr[i - 1] = 'Buzz';
// 		} else if (i % 3 === 0) {
// 			arr[i - 1] = 'Fizz';
// 		} else arr[i - 1] = i;
// 	}
// 	return arr;
// }

function fizzbuzz(n) {
	return [...Array(n)].map((x, i) => {
		++i;
		if (i % 5 === 0 && i % 3 === 0) {
			return 'FizzBuzz';
		}
		if (i % 5 === 0) {
			return 'Buzz';
		}
		if (i % 3 === 0) {
			return 'Fizz';
		}
		return i;
	});
}
//TESTCASES--
console.log(fizzbuzz(15));
