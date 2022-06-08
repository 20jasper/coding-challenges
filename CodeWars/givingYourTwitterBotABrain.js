//URL--
// https://www.codewars.com/kata/5b4668d03da310b649000013

//INSTRUCTIONS--
/* Now that you've hooked up your twitter bot to the Twitter API, you need to give your bot a 'brain' by telling it what to say.

Bad news though: Twitter doesn't like bots on their platform, and their rules recently got even more restrictive.
The Rules

    tweets cannot be more than 180 characters
    you cannot tweet identical text
    tweets must be longer than 1 character

The task

create a function, newTweet, that returns a new, unique string every time it's called. This tweet must always be within the length limitations
hints

This is a fundamentals puzzle rather than a computer science puzzle, so assume that 'never repeats' really means 'very unlikely to repeat the first million times it's called' and not 'will never repeat before the heat death of the universe'

*/

//SOLUTION--
/* I am going to make a program that makes strings of 180 random characters
    I will get a random number from 32 to 591 and get the unicode character with that character code
    add this character to the string until it is 180 characters long
return the string

I was unsure of the safe unicode characters I could use, but it turns out, any of them are fine for what it wants, so I updated the program to pick from any of the possible unicode characters
*/
// function newTweet() {
//     let tweet = ''
//     for (let i = 0; i < 180; i++) {
//         const random = Math.floor(Math.random() * 559) + 32
//         tweet += String.fromCharCode(random)
//     }
//     return tweet
// }

function newTweet() {
    let tweet = ''
    for (let i = 0; i < 180; i++) {
        const random = Math.floor(Math.random() * 144, 697)
        tweet += String.fromCharCode(random)
    }
    return tweet
}

//TESTCASES--
console.log(newTweet())
console.log((newTweet() !== newTweet()))
console.log((newTweet() !== newTweet()))
console.log((newTweet() !== newTweet()))
console.log((newTweet() !== newTweet()))
console.log((newTweet() !== newTweet()))
console.log((newTweet() !== newTweet()))