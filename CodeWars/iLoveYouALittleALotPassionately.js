//URL--
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

//INSTRUCTIONS--
/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

*/

//SOLUTION--
/* I am going to make an array with what the person says each time and return the last one
*/
function howMuchILoveYou(nbPetals) {
    const phrases = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"]
    return phrases[nbPetals % 6]
}
//TESTCASES--
console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")