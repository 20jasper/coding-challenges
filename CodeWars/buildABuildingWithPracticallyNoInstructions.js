//URL--
// https://www.codewars.com/kata/603ed5320683b40019870500/

//INSTRUCTIONS--
/* Look at the example tests.

The only thing that I can give you is that values are greater than 3.

If you think this was too easy, please tell me what you want me to bump the value up to.

I recommend that you hit the attempt button to get more examples

Good luck!

*/

//SOLUTION--
/* It looks like this problem is giving me a height and a width
I am going to make each floor out of a string with two pipe characters with as many hyphens as the width in the middle
    add height -1 of these to an array
add the base floor made of a string with two pipe characters with as many underscores as the width in the middle
join them together by new line characters and return the result
*/
function build(width, height) {
    const floor = `|${"-".repeat(width)}|`
    const base = `|${"_".repeat(width)}|`
    const allFloors = Array(height - 1).fill(floor)
    allFloors.push(base)
    return allFloors.join("\n")
}
//TESTCASES--
console.log(build(2, 10), "|--|\n|--|\n|--|\n|--|\n|--|\n|--|\n|--|\n|--|\n|--|\n|__|");