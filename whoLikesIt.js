//URL--
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

//INSTRUCTIONS--
/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

//SOLUTION--
/* 
If the length of the array is 0, return "no one likes this"
If the length of the array is 1, return "name1 likes this"
If the length of the array is 2, return "name1 and name2 like this"
If the length of the array is 3, return "name1, name2 and name3 like this"
If the length of the array is 4 or more, return "name1, name2 and the length -2 like this"
*/
function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    }
    if (names.length === 1) {
        return `${names[0]} likes this`
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
//TESTCASES--
console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Sarah', 'Jim']), 'Alex, Jacob and 4 others like this');