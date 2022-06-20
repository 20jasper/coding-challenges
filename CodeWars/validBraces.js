//URL--
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/javascript

//INSTRUCTIONS--
/* Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False


*/

//SOLUTION--
/* 
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
console.log("()", true);
console.log("[]", true);
console.log("{}", true);
console.log("(){}[]", true);
console.log("([{}])", true);
console.log("(}", false);
console.log("[(])", false);
console.log("({})[({})]", true);
console.log("(})", false);
console.log("(({{[[]]}}))", true);
console.log("{}({})[]", true);
console.log(")(}{][", false);
console.log("())({}}{()][][", false);
console.log("(((({{", false);
console.log("}}]]))}])", false);