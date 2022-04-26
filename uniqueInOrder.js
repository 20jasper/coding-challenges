//URL--
// https://www.codewars.com/kata/54e6533c92449cc251001667

//INSTRUCTIONS--
/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

//SOLUTION--
/* 
I am going to check to see if the input is an array
If not, split it into an array
Then, I am going to loop through the array 
If the current element is the same as the next, remove the current element and subtract one from the index
return the resultant array

After doing it, I realized that since I was separating the strings into arrays with the spread operator inside of an array, I could just do that to the array as well, so I got rid of the check to see the type of the input
*/

// // old version
// const uniqueInOrder = (iterable) => {
//     if (!Array.isArray(iterable)){
//         iterable = [...iterable]
//     }
//     for (let i = 0; i < iterable.length-1; i++) {
//         if(iterable[i]==iterable[i+1]){
//             iterable.splice(i, 1)
//             i--
//         }
//     }
//     return iterable
// }
// refactored version
const uniqueInOrder = (iterable) => {
    iterable = [...iterable]
    for (let i = 0; i < iterable.length - 1; i++) {
        if (iterable[i] == iterable[i + 1]) {
            iterable.splice(i, 1)
            i--
        }
    }
    return iterable
}

//TESTCASES--
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D']);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);