//URL--
// https://www.codewars.com/kata/56b29582461215098d00000f

//INSTRUCTIONS--
/* Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
Example

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/

//SOLUTION--
/* I am going to find the maximum and minimum number in the array
Then I will make a new array starting at the minimum that goes up by 1 until it reaches the max number 
*/
function pipeFix(numbers) {
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    return [...Array(max + 1 - min)].map((x, i) => min + i)
}
//TESTCASES--
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]
console.log(pipeFix([-1, 4])); //[-1,0,1,2,3,4]