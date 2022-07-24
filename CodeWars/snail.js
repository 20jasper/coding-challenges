//URL--
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

//INSTRUCTIONS--
/* Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
				 [4,5,6],
				 [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
				 [8,9,4],
				 [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/

//SOLUTION--
/* 
*/
const snail = function (arr) {
	const res = []

	//set the bounds of the arr
	let rowTop = 0
	let rowBottom = arr.length - 1
	let colLeft = 0
	let colRight = arr[0].length - 1

	const arrSize = arr.length * arr[0].length

	//while there are still more elements in the spiral array not in the resultant array
	while (res.length < arrSize) {
		//iterate from bound to bound in a spiral pattern and push each element to the array

		//iterate right through the top row
		for (let col = colLeft; col <= colRight; col++) {
			res.push(arr[rowTop][col])
		}
		//lower the top row bound
		rowTop++

		//iterate down through the right column
		for (let row = rowTop; row <= rowBottom; row++) {
			res.push(arr[row][colRight])
		}
		//move the right column bound left
		colRight--

		//if every element has been iterated over, end the loop
		if (res.length >= arrSize) {
			break
		}

		//iterate left through the bottom row
		for (let col = colRight; col >= colLeft; col--) {
			res.push(arr[rowBottom][col])
		}
		//raise the bottom row bound
		rowBottom--

		//iterate up through the left column
		for (let row = rowBottom; row >= rowTop; row--) {
			res.push(arr[row][colLeft])
		}
		//move the left column bound to the right
		colLeft++
	}
	//return the resultant array
	return res
};
//TESTCASES--
console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);