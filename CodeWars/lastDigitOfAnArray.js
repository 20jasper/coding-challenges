//URL--
// https://www.codewars.com/kata/58dd95d4b4b74ca604000068

//INSTRUCTIONS--
/* Write a function that returns the last digit of rightmost integer in the given array. Be careful - there might be numbers that aren't integers in the arrays!

[1,2,3] --> 3
["a", 45, "b", 67, "c"] --> 7
[-17, -4, -12] --> 2
["g", 12, "h", 4.5, "i"] --> 2
["a", "b", "c"] --> "No integers found."


*/

//SOLUTION--
/* 
I am going to iterate backwards through the array
    If a number is an integer, return the last digit of the number as a number
        convert the number to a string and get the last character to find the last digit
return "No integers found."
*/
function lastDigit(arr) {
    const lastIndex = arr.length - 1
    for (let i = lastIndex; i >= 0; i--) {
        const element = arr[i]
        if (Number.isInteger(element)) {
            const str = element.toString()
            const lastDigit = str[str.length - 1]
            return Number(lastDigit)
        }
    }
    return "No integers found."
}
//TESTCASES--
console.log(lastDigit([1, 2, 3]), 3);
console.log(lastDigit(["a", 45, "b", 67, "c"]), 7);
console.log(lastDigit(["a", "b", "c"]), "No integers found.");