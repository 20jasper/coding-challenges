//URL--
// https://www.codewars.com/kata/5866d90edbca9ae420000145

//INSTRUCTIONS--
/* This Kata is intended as a small challenge for my students

All Star Code Challenge #26

All of Raj's once loner friends are now happily in a relationship. Even Sheldon!
Raj has hired you to manually change his group status to "In a relationship," so he can show it to his friends!
Create a function called missionImpossible() that takes a Group object as input that changes the "Raj" key, if it exists, to "In a relationship". The, now altered, object should be returned.

var wholeGroup = { Leonard: 'Married',
  Penny: 'Married',
  Howard: 'Married',
  Bernadette: 'Married',
  Sheldon: 'In a relationship',
  Amy: 'In a relationship',
  Raj: 'Single' }
missionImpossible(wholeGroup);
// =>
// { Leonard: 'Married',
//  Penny: 'Married',
//  Howard: 'Married',
//  Bernadette: 'Married',
//  Sheldon: 'In a relationship',
//  Amy: 'In a relationship',
//  Raj: 'In a relationship' }

Note: If Raj is not part of the input group, he should NOT be added to it.

*/

//SOLUTION--
/* If the Raj property exists, set the Raj property to "In a relationship"
return the object
*/
function missionImpossible(obj) {
    if (obj["Raj"]) {
        obj["Raj"] = 'In a relationship'
    }
    return obj
}
