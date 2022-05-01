//URL--
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

//INSTRUCTIONS--
/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


*/

//SOLUTION--
/* I am going to add an underscore to the end of the array if it has an odd length
Then I will iterate through the string, pushing a string consisting of the character at the current index and next index to the array then incrementing the step by 2 until the step count isn't less than the length of the string
*/
function solution(str) {
    if (str.length % 2 == 1) {
        str += '_'
    }
    const arr = []
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str[i] + str[i + 1])
    }
    return arr
}
//TESTCASES--
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution(""), []);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);