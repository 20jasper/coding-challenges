//URL--
// https://www.codewars.com/kata/523f5d21c841566fde000009

//INSTRUCTIONS--
/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

//SOLUTION--
/* I am going to get the set of numbers in the second array 
Then I will remove values using filter by checking to see if the element is in the set of the second array
Then I will return the result 

After doing it, I realized I could just use includes to see if the current element was in the list of items to remove
*/
//old version
// function arrayDiff(a, b) {
//     const numbersToRemove = [...new Set(b)]
//     return a.filter(x => {
//         for (let i = 0; i < numbersToRemove.length; i++) {
//             if (x == numbersToRemove[i]) {
//                 return false
//             }
//         }
//         return true
//     })
// }

// optimized version
function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x))
}
//TESTCASES--
console.log(arrayDiff([1, 2], [1]), [2]);
console.log(arrayDiff([1, 2, 2], [1]), [2, 2]);
console.log(arrayDiff([1, 2, 2], [2]), [1]);
console.log(arrayDiff([1, 2, 2], []), [1, 2, 2]);
console.log(arrayDiff([1, 2, 3], [1, 2]), [3]);