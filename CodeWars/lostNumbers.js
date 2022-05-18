//URL--
// https://www.codewars.com/kata/5aa28655b005a8fcd10027df

//INSTRUCTIONS--
/* Numbers are lost somewhere in the arrays, help them find each other!

In this kata you'll be given 2 n-deep arrays with one number somewhere in there (or no number, just empty n-deep array). Write a function, that finds those numbers and return their sum

example

findAndSumm([[[[[2]]]]], [[[5]]]) / -> 7
findAndSumm([[[6]]], [[[[[3]]]]]) / -> 9


*/

//SOLUTION--
/* I am going to use the flat method with a depth of infinity on each array
Then add the two numbers
return the result

I did not account for empty arrays, so I added logic that sets each undefined value to 0
*/
const findAndSumm = (arr1, arr2) => {
    let num1 = arr1.flat(Infinity)[0]
    let num2 = arr2.flat(Infinity)[0]
    if (num1 === undefined) {
        num1 = 0
    }
    if (num2 === undefined) {
        num2 = 0
    }
    return num1 + num2
}
//TESTCASES--
console.log(findAndSumm([[[[3]]]], [[5]]), 8);
console.log(findAndSumm([[[[[9]]]]], [[[4]]]), 13);
console.log(findAndSumm([[[[[[[]]]]]]], [[[9]]]), 9);
console.log(findAndSumm([-1], [[0]]), -1);