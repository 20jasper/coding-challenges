//URL--
// https://www.codewars.com/kata/555086d53eac039a2a000083

//INSTRUCTIONS--
/* Description:

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/

//SOLUTION--
/* I am going to check if each is odd or even
If both are odd or both are even, return false
return true
*/
function lovefunc(flower1, flower2) {
    return !(isEvenOrOdd(flower1) === isEvenOrOdd(flower2))
}
function isEvenOrOdd(flower) {
    if (flower % 2 === 0) {
        return 'even'
    }
    return "odd"
}
//TESTCASES--
console.log(lovefunc(1, 4), true)
console.log(lovefunc(2, 2), false)
console.log(lovefunc(0, 1), true)
console.log(lovefunc(0, 0), false)