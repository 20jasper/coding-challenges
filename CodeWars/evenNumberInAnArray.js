//URL--
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/

//INSTRUCTIONS--
/* 
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


*/

//SOLUTION--
/* 
The time complexity of this solution is O(n+r) and the space complexity is O(1) where n is the length of the original array, and r is the length of the resultant array
*/
function evenNumbers(arr, numsLeft) {
	const res = []
	let i = arr.length - 1
	//while the resultant array isn't full yet
	while (numsLeft > 0) {
		//if the number is even
		if (arr[i] % 2 === 0) {
			res.push(arr[i])
			numsLeft--
		}
		i--
	}
	//reverse the resultant array to put them in their original order
	return res.reverse()
}
//TESTCASES--
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);