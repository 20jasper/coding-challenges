//URL--
// https://www.codewars.com/kata/583203e6eb35d7980400002a

//INSTRUCTIONS--
/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

//SOLUTION--
/* If the array is empty, return 0
Then I will filter the array
    if the first character is not ':' or ';', return false
    if the last character is ot ')' or 'D', return false
    return true
return the length of the array

I forgot to check to see if the nose was a valid nose, so I added logic to check if the length of the string was 3 and the nose was either '-' or '~' and return true if so
I forgot to check for smiley faces longer than 3 characters, so I added logic to return false if it is more than 3 characters long
*/
function countSmileys(arr) {
    if (arr.length === 0) {
        return 0
    }
    const smileyArr = arr.filter(x => {
        const firstChar = x[0]
        const middleChar = x[1]
        const lastChar = x[x.length - 1]
        if (x.length > 3) {
            return false
        }
        if (!(firstChar === ':' || firstChar === ';')) {
            return false
        }
        if (!(lastChar === ')' || lastChar === 'D')) {
            return false
        }
        if (x.length === 3) {
            if (!(middleChar === '-' || middleChar === '~')) {
                return false
            }
        }
        return true
    })
    return smileyArr.length
}
//TESTCASES--
console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
console.log(countSmileys([';eD']), 0);
console.log(countSmileys([';--D']), 0);