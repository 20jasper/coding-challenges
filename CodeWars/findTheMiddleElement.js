//URL--
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/

//INSTRUCTIONS--
/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

//SOLUTION--
/* I am going to sort the array and then return the index of the element at index 1 in the original array
*/
function gimme(triplet) {
    middleElement = triplet.slice(0).sort((a, z) => a - z)[1]
    return triplet.indexOf(middleElement)
}
//TESTCASES--
console.log(gimme([2, 3, 1]), 0);
console.log(gimme([-2, -3, -1]), 0);
console.log(gimme([2, 3, 1]), 0);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-2, -1.5, -1]), 1);