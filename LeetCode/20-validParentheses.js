//URL--
// https://leetcode.com/problems/valid-parentheses/

//INSTRUCTIONS--
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'
*/

//SOLUTION--
/* 
If the string is less than two long, return false
I am going to make an empty array called stack
Iterate through the string
    If the character is any opening character, add it to the stack
    If the character is a closing character, check to see if the correct character is at the top of the stack
        If so, pop the top character off the stack
        else return true
if stack length is 0, return true
else return false
    
*/


//original code
/**
 * @param {string} s
 * @return {boolean}
 */

// const isValid = function (s) {
//     const stack = []
//     function doBracesMatch(brace) {
//         const pairs = {
//             "}": "{",
//             "]": "[",
//             ")": "(",
//         }
//         const stackTop = stack.slice(-1)[0]
//         if (stackTop === pairs[brace]) {
//             return true
//         } else {
//             return false
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         const character = s[i];
//         if (character === "{" || character === "[" || character === "(") {
//             stack.push(character)
//         } else {
//             if (doBracesMatch(character)) {
//                 stack.pop()
//             }
//             else {
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// };

//optimizations
/*
I did not need the check to see if the string is less than two long, so I removed it

//I removed the separate function to check if the top of the stack is a valid pair, and instead replaced with just checking to see if what is popped off the function is a valid pair

I added a check to see if the string has an odd length to get rid of unncessary calculations
*/

//optimized code
/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
    //if string length is odd, return false
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = []
    //pairs of valid brackets
    const pairs = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    const openingBrackets = Object.values(pairs)
    //iterate through the string
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        //if the current character is an opening bracket, add it to the stack
        if (openingBrackets.includes(character)) {
            stack.push(character)
        }
        //else, pop the top value off the stack
        else {
            const stackTop = stack.pop()
            //if the value isn't a valid opening bracket for the current closing bracket, return false
            if (stackTop !== pairs[character]) {
                return false
            }
        }
    }
    //if the stack is 0, return false, else return true
    return stack.length === 0
};

//TESTCASES--
console.log(isValid("("), false);
console.log(isValid("(("), false);
console.log(isValid("((("), false);
console.log(isValid("()"), true);
console.log(isValid("(){}[]"), true);
console.log(isValid("(]"), false);
console.log(isValid("(())"), true);
console.log(isValid("(([][][]{}))"), true);
console.log(isValid("(([][][]{}))}"), false);