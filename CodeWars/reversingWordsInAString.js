//URL--
// https://www.codewars.com/kata/57a55c8b72292d057b000594

//INSTRUCTIONS--
/* You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

*/

//SOLUTION--
/* I am going to split the array by spaces 
Then I will use the reverse method to reverse it and join it by spaces again
*/
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}


//TESTCASES--
console.log(reverse('I am an expert at this')); //'this at expert an am I'