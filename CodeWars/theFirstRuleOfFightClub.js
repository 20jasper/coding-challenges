//URL--
// https://www.codewars.com/kata/5826d9d9392e28d0bd000125

//INSTRUCTIONS--
/* "Welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you DO NOT talk about Fight Club!"

Fight Club members now have a WhatsApp group. It has been called "Knitting Club" to disguise what it's really about. Members must use the words "Knitting Club" instead of "Fight Club" in all conversations in case prying eyes fall upon a member's chat history.

So for example, if a member wants to message "I had to get 8 stitches on my face after Fight Club last week" they will instead message "I had to get 8 stitches on my face after Knitting Club last week". This will be sure to not cause any suspicion if read by a non-member.

Tyler Durden is not happy! He has found that Fight Club members are slipping up and using the phrase "fight club" despite his rule, especially after a few drinks.

He wants you to write a function that will strip the words "Fight Club" from a text message and replace it with "Knitting Club".

It must work for either upper or lower case. It must also work for multiple occurences of the phrase.

*/

//SOLUTION--
/* I am going to use replace everything matching a regular expression with "Knitting Club"
    I am going to use a regular expression searching for "fight club" globally and case insensitively
return the new string
*/
function stripWords(text) {
    return text.replace(/fight club/gi, "Knitting Club")
}
//TESTCASES--
console.log(stripWords("I love Fight Club"), "I love Knitting Club");
console.log(stripWords("I saw a fight at a club last night."), "I saw a fight at a club last night.");
console.log(stripWords("Fight Club FigHt Club."), "Knitting Club Knitting Club.");