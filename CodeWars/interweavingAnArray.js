//URL--
// https://www.codewars.com/kata/5ad2f0482cba73ed9f000d4f

//INSTRUCTIONS--
/* Given two arrays, interweave them by alternating an element form the array and then one from the second array;

[4, 5, 6] [1, 2, 3] => [4, 1, 5, 2, 6, 3]

The arrays can be of any length, and contain any data type.

Ex.

[1,2,3] [4] => [1,4,2,3]

[1] [2,3,4] => [1,2,3,4]


*/

//SOLUTION--
/* 
I am going to make a for loop that pushes an element from each array into a new array unless the index is more than the length of the array
return the resultant array
*/
function interweave(a, a2) {
    const interweavedArr = []
    for (let i = 0; i < Math.max(a.length, a2.length); i++) {
        if (i < a.length) {
            interweavedArr.push(a[i])
        }
        if (i < a2.length) {
            interweavedArr.push(a2[i])
        }
    }
    return interweavedArr
}
//TESTCASES--
console.log(interweave([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(interweave(["string", 35], [90, 't', 23]), ['string', 90, 35, 't', 23]);