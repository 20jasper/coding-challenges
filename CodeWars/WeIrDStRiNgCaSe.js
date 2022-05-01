//URL--
// https://www.codewars.com/kata/52b757663a95b11b3d00062d

//INSTRUCTIONS--
/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

//SOLUTION--
/* I am going to split the string into an array by spaces and then use map to make all even indexes of each word lowercase and all odd indexes of each word uppercase
Then I'll join the array into a string by spaces and return it

After doing this, I realized it could be done with only one loop by subtracting one from the count whenever there is a space
*/

// // old version
// function toWeirdCase(string) {
//     const arr = string.split(' ')
//     const weirdCaseArr = arr.map(word => {
//         let weirdString = ''
//         for (let i = 0; i < word.length; i++) {
//             if (i % 2 === 0) {
//                 weirdString += word.charAt(i).toUpperCase()
//             } else {
//                 weirdString += word.charAt(i).toLowerCase()
//             }
//         }
//         return weirdString
//     })
//     return weirdCaseArr.join(' ')
// }

//refactored version
function toWeirdCase(string) {
    const arr = [...string]
    let weirdString = ''
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            count--
        }
        if (i % 2 === 0) {
            weirdString += arr[i].toUpperCase()
        } else {
            weirdString += arr[i].toLowerCase()
        }
        count++
    }
    return weirdString
}
//TESTCASES--
console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');