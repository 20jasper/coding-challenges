//URL--
// https://www.codewars.com/kata/57a6633153ba33189e000074/

//INSTRUCTIONS--
/* 
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

//SOLUTION--
/* 
*/
const orderedCount = function (text) {
	const arr = []
	//make a hashmap to record the indexes of each char in the array
	const hashMap = {}
	let uniqueCharCount = 0
	//iterate through the string
	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const tupleIndex = hashMap[char]
		//if the tuple exists in the hashmap
		if (tupleIndex !== undefined) {
			const tuple = arr[tupleIndex]
			//add one to the character count in the tuple
			tuple[1]++
		}
		else {
			//add the tuple to the array
			arr.push([char, 1])
			//record the tuple's index in the array
			hashMap[char] = uniqueCharCount
			//increment the current number of indexes in the hashMap
			uniqueCharCount++
		}
	}
	//return the resultant array
	return arr;
}

//TESTCASES--
console.log(orderedCount("abracadabra"), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]])
console.log(orderedCount("Code Wars"), [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]])
console.log(orderedCount("233312"), [['2', 2], ['3', 3], ['1', 1]])