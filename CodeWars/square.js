//URL--
// https://www.codewars.com/kata/599b23c7d7dd7216640000a6

//INSTRUCTIONS--
/* Square

Given an array of positive integers, find if the sum of the integers in the array is a perfect square. If it is a perfect square, return the square root, otherwise return the sum. If an empty array is passed, return 0. To improve your problem solving experience, use the suggested functions to solve the problem.

Concepts
Javascript Functions(forEach, Math)

Suggested Functions

    forEach()

arrayName.forEach(function callback(currentItem){              
    //your iterator           
})     

The forEach() method executes a provided function once for each array element.

var arr = ['I', 'study', 'at', 'Bloc'];
arr.forEach(function(element) {
    console.log(element);
});
// The above code would print, 'I', 'study', 'at', 'Bloc', to the console.

    Math.sqrt()

Math.sqrt(number)           

The Math object allows you to perform mathematical tasks such as finding the square root of a number.

Math.sqrt(25) // Returns the square root of 25 which is 5
Math.sqrt(2) // Returns the square root of 2 which is approximately 1.414213562373095


*/

//SOLUTION--
/* I am going to find the sum of the array using reduce
If it is a perfect square return the square root
    Check for this by seeing if the square root is an integer
else, return the sum
*/
function squareRoot(numbers) {
    const sum = numbers.reduce((sum, value) => sum + value, 0)
    const squareRoot = Math.sqrt(sum)
    if (Number.isInteger(squareRoot)) {
        return squareRoot
    }
    return sum
}

//TESTCASES--
console.log(squareRoot([4, 6, 7, 7, 1]), 5);
console.log(squareRoot([]), 0);
console.log(squareRoot([4, 3, 6, 1, 3, 6, 1, 3, 4, 5, 6, 1, 2, 3, 5, 1, 1]), 55);