//URL--
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
//INSTRUCTIONS--
/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

//SOLUTION--
/* 
Make an empty array
I am going to make a loop that starts at n and counts down by 1
    each loop add the current index to the array
return the array
*/
const reverseSeq = n => {
    const arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr;
};
//TESTCASES--
console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
console.log(reverseSeq(1), [1]);
console.log(reverseSeq(7), [7, 6, 5, 4, 3, 2, 1]);