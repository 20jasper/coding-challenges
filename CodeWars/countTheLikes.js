//URL--
// https://www.codewars.com/kata/5532686f0408dfe458000117

//INSTRUCTIONS--
/* Your grandfather criticises your overuse of the word 'like', claiming that it makes up more than 5% of the total words you speak.

You argue that it is much lower than this and so to settle the debate, you have been fitted with a recorder that stores every word you say as a string in an array.

Your task is to make an algorithm that returns true if 'like' accounts for more than 5% of words in the array, otherwise false (if no words are spoken, return false also).

evalLikes(['I','am','sooo','like','tired']) // ==> true;
evalLikes(['THIS','IS','LIKE','TERRIBLE']) // ==> true;
evalLikes(['likely','story']) // ==> false;

Your solution must be case-insensitive, but you do not need to worry about punctuation (the device you have been fitted with automatically filters this out).

*/

//SOLUTION--
/* I am going to filter the array 
    if the lowercase versoin of the word is 'like', return true
    return false
divide the length of the filtered array by the length of the original array
check to see if the result is more than 5% and return true if so, and false otherwise
*/
const evalLikes = function (words) {
    const likeArr = words.filter(x => x.toLowerCase() === 'like')
    const percentage = likeArr.length / words.length * 100
    return percentage > 5
}
//TESTCASES--
console.log(evalLikes(['today', 'was', 'so', 'like', 'awesome']), true);
console.log(evalLikes(['yesterday', 'was', 'even', 'ummm', 'better']), false);