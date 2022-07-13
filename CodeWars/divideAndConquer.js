//URL--
// https://www.codewars.com/kata/57eaec5608fed543d6000021/

//INSTRUCTIONS--
/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/

//SOLUTION--
/* 
Use reduce to iterate through the array
if the value is a string, subtract the number from the total
else, add to the number
*/
function divCon(x) {
	return x.reduce((total, num) => {
		//if it's a string, subtract from the total
		if (typeof num === "string") {
			return total - num
		}
		//otherwise, add to the total
		return total + num
	}, 0)
}
//TESTCASES--
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
