//URL--
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

//INSTRUCTIONS--
/* Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

//SOLUTION--
/* 
I am going to make a loop that runs n times
    The length of each string will be 1 less than 2 times the number of floors
    The starting number of stars is one
    Each loop the number of stars goes up by 2, and the number of spaces goes down by 2
    Push a string with spaces + stars + spaces
return the array
*/
function towerBuilder(nFloors) {
    const arr = []
    for (let i = 0; i < nFloors; i++) {
        const length = 2 * (nFloors) - 1
        const stars = '*'.repeat(1 + 2 * i)
        const spaces = ' '.repeat((length - stars.length) / 2)
        arr.push(spaces + stars + spaces)
    }
    return arr
}
//TESTCASES--
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);