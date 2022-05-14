//URL--
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

//INSTRUCTIONS--
/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
*/

//SOLUTION--
/* 
I am going to check if both the owner and the name are the same
    If so, return 'Hello guest'
    else, return "Hello boss"
*/
function greet(name, owner) {
    if (name === owner) {
        return 'Hello boss'
    }
    return 'Hello guest'
}
//TESTCASES--
console.log(greet('Daniel', 'Daniel'), 'Hello boss');
console.log(greet('Greg', 'Daniel'), 'Hello guest');