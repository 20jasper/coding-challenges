//URL--
// 

//INSTRUCTIONS--
/* Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

//SOLUTION--
/* 
If the array length is 0, return the array
I am going to make a new array of odd numbers and sort it in ascending order
Then I am going to map the original array
If the number is even, leave it
If it is odd, replace it with the next item in the sorted array of odd numbers

I checked for odds by seeing if the modulus of the number was 1, but negative odd numbers modulus 2 give -1 as the answer, so I changed the check to see if the number modulus 2 was not 0
*/
function sortArray(array) {
    if (array.length == 0) {
        return array
    }
    const oddArr = array
        .filter(x => x % 2 !== 0)
        .sort((a, z) => a - z)
    let count = 0
    return array.map(x => {
        if (x % 2 === 0) {
            return x
        }
        return oddArr[count++]
    })
}
//TESTCASES--
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([-5, -3, -1, -8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
console.log(-2 % 2)