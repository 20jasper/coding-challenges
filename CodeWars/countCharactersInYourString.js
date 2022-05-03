//URL--
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

//INSTRUCTIONS--
/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

//SOLUTION--
/* 
I am going to make an empty object
Then I am going to split the string into an array using the spread operator
Then I will use a forEach loop to count all of the characters in the string
    If the character is a not key in the object, set its value to 1
    If the character is a key in the object, add one to its value
return the object
*/
function count(string) {
    const object = {}
    const arr = [...string]
    arr.forEach(x => {
        if (!object[x]) {
            return object[x] = 1
        }
        return object[x]++
    })
    return object;
}
//TESTCASES--
console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});