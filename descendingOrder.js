//URL--
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

//INSTRUCTIONS--
/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

//SOLUTION--
/* I am going to convert the numbers to a string then use the spread operator to split it into an array
Then I will sort it and reverse it 
Then I will join it into a string and then convert it to a number again
*/
function descendingOrder(n) {
    const arr = [...String(n)]
    const descendingString = arr
        .sort()
        .reverse()
        .join('')
    return Number(descendingString)
}
//TESTCASES--
console.log(descendingOrder(0), 0);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);