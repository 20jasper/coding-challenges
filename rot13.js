//URL--
// https://www.codewars.com/kata/530e15517bc88ac656000716

//INSTRUCTIONS--
/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

//SOLUTION--
/* I am going to make a string of the alphabet
I am going to convert the string to be translated into an array
I am going to get the index of each letter and then replace it with the character that is that index + 13 % 26

I forgot to make it case insensitive, so I separated the alphabet to lower and uppercase based on whether the letter is upper or lowercase

I forgot to join the array back into a string, so I used the join method to do so

I didn't account for non letter characters so I added logic to check if either alphabet included the character, and if not leave it unchanged
*/
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
const alphabetUpper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
function rot13(message) {
    const newMessage = [...message].map((x) => {
        if (alphabetLower.includes(x) || alphabetUpper.includes(x)) {
            if (x.toUpperCase() == x) {
                return alphabetUpper[(alphabetUpper.indexOf(x) + 13) % 26]
            } else {
                return alphabetLower[(alphabetLower.indexOf(x) + 13) % 26]
            }
        } else {
            return x;
        }
    })
    return newMessage.join('')
}
//TESTCASES--
console.log(rot13("test"), "grfg");
console.log(rot13("Test"), "Grfg");
console.log(rot13("Test test"), "Grfg grfg");