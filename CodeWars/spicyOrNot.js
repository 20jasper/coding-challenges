//URL--
// https://www.codewars.com/kata/59a8aa51c21de20aac0000e3/

//INSTRUCTIONS--
/* You're off to a picnic with two versions of your beloved hummus recipe: spicy and non-spicy.

Write a function that takes a name and preference type and returns an object with those properties. If someone forgets to put a name, default it to "friend of a friend." If someone forgets to put a preference, default it to "non-spicy" just to be safe!

To keep it simple, all preference types will be in lowercase letters and you won't have any friends named "spicy" or "non-spicy."

*/

//SOLUTION--
/* 
if the name is "spicy" or "non-spicy" and type is undefined
    return an object with that preference and the name as "friend of a friend"
if type is undefined
    return an object with that preference and the name as "friend of a friend" and type as "non-spicy"
return the name as the name and the type as the type
*/
function whichKind(name, type) {
    if (type === undefined && (name === 'spicy' || name === 'non-spicy')) {
        return { name: "friend of a friend", type: name }
    }
    if (type === undefined) {
        return { name: "friend of a friend", type: "non-spicy" }
    }
    return { name: name, type: type }
}
//TESTCASES--
console.log(whichKind('spicy'), { name: 'friend of a friend', type: 'spicy' });
console.log(whichKind('Bella'), { name: 'Bella', type: 'non-spicy' });
console.log(whichKind(), { name: 'friend of a friend', type: 'non-spicy' });