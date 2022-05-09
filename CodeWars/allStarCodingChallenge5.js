//URL--
// https://www.codewars.com/kata/5864152183f7e6e834000160

//INSTRUCTIONS--
/* This Kata is intended as a small challenge for my students

All Star Code Challenge #5

Create a function, called randomMovies, that takes in an array of movie strings and returns one of those movies randomly

var rockySeries = ["Rocky", "Rocky II", "Rocky III", "Rocky IV"];
randomMovies(rockySeries) // => "Rocky"

*/

//SOLUTION--
/* I am going to return the element at a random index
    I am going to get that index by multiplying Math.Random() by the length of the array and rounding it down
*/
function randomMovies(movies) {
    const randomIndex = Math.floor(Math.random() * movies.length)
    return movies[randomIndex]
}
//TESTCASES--
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
console.log(randomMovies(["Rocky", "Rocky II", "Rocky III", "Rocky IV"]));
