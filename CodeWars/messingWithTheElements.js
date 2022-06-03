//URL--
// https://www.codewars.com/kata/58288cc7ef8d44e3df000296

//INSTRUCTIONS--
/* The objective of this kata is to take a given array and replace an element within it with the first element of a second array at the index of the number given as the second element of the second array. For example:

[4,2,7,5][2,3] should return [4,2,7,2] i.e. 2 the first element of the second array was placed at index 3 of the first array

The second array will only contain 2 elements. If the second element of the second array i.e the index to move to does not exist return the first array unchanged

*/

//SOLUTION--
/* 
If the length of the array is longer than the second element of the second array
    set the value at the index second element of the second array equal to the first element of the second array
return the first array
*/
function elShuffle(arr1, [value, index]) {
    if (arr1.length > index) {
        arr1[index] = value
    }
    return arr1
}
//TESTCASES--
console.log(elShuffle([9, 5, 8, 3], [6, 2]), [9, 5, 6, 3]);
console.log(elShuffle([3, 3, 4, 2], [4, 9]), [3, 3, 4, 2]);