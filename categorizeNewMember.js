//URL--
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

//INSTRUCTIONS--
/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


*/

//SOLUTION--
/* 
I will use map to replace the array with the appropriate string
I will check to see if the player is 55 or older and if if the player's handicap is greater than 7
If not return 'Open'
If so, return 'Senior'

After finding out about destructuring, I refactored my solution
*/

// original solution
// function openOrSenior(data) {
//     return data.map(player => {
//         const age = player[0]
//         const handicap = player[1]
//         if (age >= 55 && handicap > 7) {
//             return 'Senior'
//         }
//         return 'Open'
//     })
// }

//refactored version
function openOrSenior(data) {
    return data.map(([age, handicap]) => {
        if (age >= 55 && handicap > 7) {
            return 'Senior'
        }
        return 'Open'
    })
}

//TESTCASES--
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior']);
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]), ['Open', 'Open', 'Open', 'Open']);
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open']);