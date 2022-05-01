//URL--
// https://www.codewars.com/kata/55c45be3b2079eccff00010f

//INSTRUCTIONS--
/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

//SOLUTION--
/* I am going to check to see if it's an empty string
If so return an empty string
If not, split the words by spaces
Then sort the array by the number that's contained within it
Find the number in the string by splitting it into an array and iterating through it
*/
function order(words) {
    if (words.length === 0) {
        return ''
    }
    const sortedArr = words
        .split(' ')
        .sort((a, z) => {
            function findNumber(string) {
                const array = [...string]
                for (let i = 0; i < array.length; i++) {
                    if (!isNaN(array[i])) {
                        return array[i]
                    }
                }
            }
            return findNumber(a) - findNumber(z)
        })
    return sortedArr.join(' ')
}
//TESTCASES--
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order(""), "");