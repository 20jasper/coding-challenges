//URL--
// https://www.codewars.com/kata/57e3f79c9cb119374600046b

//INSTRUCTIONS--
/* Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"


*/

//SOLUTION--
/* 
if the string is "" or undefined, return "Hello, World!"
I am going to return the first character to upper case ooncatenated with the rest of the characters to upper case
*/
let hello = (x) => {
    if (x === undefined || x === '') {
        return 'Hello, World!'
    }
    return `Hello, ${x[0].toUpperCase()}${x.slice(1).toLowerCase()}!`
}

//TESTCASES--
console.log(hello('alice'), 'Hello, Alice!');
console.log(hello(''), 'Hello, World!');
console.log(hello(), 'Hello, World!');