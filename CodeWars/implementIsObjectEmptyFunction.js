//URL--
// 

//INSTRUCTIONS--
/* You should implement isObjectEmpty function that returns true if the object is empty and false if the object has properties.
Examples

isObjectEmpty({}); // -> true
isObjectEmpty({a: 1}); // -> false

Notes

    We don't have to check Symbol properties in this kata
    We don't have to check prototype properties in this kata


*/

//SOLUTION--
/* I am going to check if the amount of keys in the object is 0, and return the truth value
*/
const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0
};
//TESTCASES--
console.log(isObjectEmpty({}), true);
console.log(isObjectEmpty({ a: 1 }), false);
console.log(isObjectEmpty({ '': false }), false);
console.log(isObjectEmpty({ '0': false }), false);
console.log(isObjectEmpty({ 0: false }), false);
console.log(isObjectEmpty({ fasle: '' }), false);