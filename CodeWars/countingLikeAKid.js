//URL--
// https://www.codewars.com/kata/58e8c25806db4de3da00011c

//INSTRUCTIONS--
/* My best friend has an adorable 3 year old kid. Everytime I go to visit them, she wants to impress me by showing off her counting skill. Up till now, she is able to count up to n. However, there is a problem with her counting: she always forgets even numbers. Your task in this kata is to be able to count like her. For convenience let's put the numbers she is able to count in an array. Good luck mate!

When 0 is passed in, return [].

Example:

kidoCount(10) => should return [1,3,5,7,9]
kidoCount(9) => should return [1,3,5,7,9]
kidoCount(0) => should return []
*/

//SOLUTION--
/* I am going to make an array with a length of the input number divided by 2 rounded up
    each number will be twice its index + 1
    return the array
*/
function kidoCount(n) {
    const arrayLength = Math.ceil(n / 2)
    return Array.from({ length: arrayLength }, (x, i) => i * 2 + 1);
}
//TESTCASES--
console.log(kidoCount(10), [1, 3, 5, 7, 9]);
console.log(kidoCount(9), [1, 3, 5, 7, 9]);
console.log(kidoCount(3), [1, 3]);
console.log(kidoCount(4), [1, 3]);