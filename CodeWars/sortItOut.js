//URL--
// https://www.codewars.com/kata/58d12885d9e7e6221c00005c/train/javascript

//INSTRUCTIONS--
/* You've spent the last few hours entering your film collection into an array of objects where each film is an object with a "film" and "rating" property, where "film" is the title and "rating" is an integer on a scale from 1 to 10, as below:

var filmCollection = [{film: "Nausicaa of the Valley of the Wind", rating: 7}, {film: "Whisper of the Heart", rating: 6}, {film: "Spirited Away", rating: 8}, {film: "Kiki's Delivery Service", rating: 7}, {film: "Castle in the Sky", rating: 7}]

After finishing, you realise that you want the films to be sorted in descending order from highest rating to lowest, and alphabetically within that. Luckily, you decided to forgo using special characters in the titles of the films and so you only have to deal with the 26 characters of the English alphabet. (upper and lower-case)

Write a function that takes an array as an argument and returns a new sorted array.

function sortCollection(filmCollection)

should return:

[{film: "Spirited Away", rating: 8}, {film: "Castle in the Sky", rating: 7}, {film: "Kiki's Delivery Service", rating: 7},  {film: "Nausicaa of the Valley of the Wind", rating: 7}, {film: "Whisper of the Heart", rating: 6}]

Empty arrays, null and undefined inputs should be returned as they are.

*/

//SOLUTION--
/* If the array is empty, null or undefined, return it

*/
// return a sorted film array
// highest rating first, alphabetically within the same ratings
function sortCollection(array) {
    if (array === undefined || array === null || array.length === 0) {
        return array
    }
    array.sort((a, z) => {
        const difference = z.rating - a.rating
        if (difference === 0) {
            return a.film.localeCompare(z.film)
        }
        return z.rating - a.rating
    })
    return array;
}
//TESTCASES--
console.log(sortCollection([
    { film: "Nausicaä of the Valley of the Wind", rating: 7 },
    { film: "Whisper of the Heart", rating: 6 },
    { film: "Spirited Away", rating: 8 },
    { film: "Kiki\'s Delivery Service", rating: 7 },
    { film: "Castle in the Sky", rating: 7 }]),

    [{ film: "Spirited Away", rating: 8 },
    { film: "Castle in the Sky", rating: 7 },
    { film: "Kiki's Delivery Service", rating: 7 },
    { film: "Nausicaä of the Valley of the Wind", rating: 7 },
    { film: "Whisper of the Heart", rating: 6 }]);
console.log(sortCollection([]), []);
console.log(sortCollection(undefined), undefined);
