//URL--
// https://www.codewars.com/kata/53a8beaca9198e77b9000309

//INSTRUCTIONS--
/* Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = ['click1','click2',null,'','','submitForm'];

the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 


*/

//SOLUTION--
/* 
I am going to make a list of elements to remove containing, null, 0, '', and undefined
I am going to filter the array
    return false is the element is in the list of elementsToRemove
return the resultant array
*/
function squeakyClean(arr) {
    const elementsToRemove = [null, 0, '', undefined]
    return arr.filter(x => !elementsToRemove.includes(x))
}
//TESTCASES--
console.log(squeakyClean([1, 2, 3, -1, 1.1]), [1, 2, 3, -1, 1.1]);
console.log(squeakyClean([null, '2', 3, 0, '', undefined]), ['2', 3]);