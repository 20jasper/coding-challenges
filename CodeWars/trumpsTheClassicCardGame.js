//URL--
// https://www.codewars.com/kata/53e0d0c15e2d6edc6c000dfc

//INSTRUCTIONS--
/* Trumps or Top Trumps is a card game, in which each card contains a list of numerical data, and the aim of the game is to compare these values to try to trump and win an opponent's card. A wide variety of different packs of Top Trumps have been published over the years.

Given the following card class:

function Card(stats) {
  this.stats = stats;
}

In which 'stats' is an array of integers, your method "checkWinner" must calculate whether the player or the opponent wins for a given index of the stats array (the highest value wins) and return either "player", "opponent" or "tie". If the stat index is out of bounds of the stats array for the player or opponent card return "invalid".

For example:

var playerCard = new Card([181, 78, 76, 5, 1987]);
var opponentCard = new Card([185, 98, 85, 12, 1985]);

//Returns 'opponent'
var winner = checkWinner(playerCard, opponentCard, 0);


*/

//SOLUTION--
/* 
If either card is undefined, return "invalid"
I am going to check if the card at the index in each players hand is more than the other
    If the player wins, return "player"
    If the opponent wins, return "opponent"
    If it's a tie, return "tie"
*/
function checkWinner(playerCard, opponentCard, statIdx) {
    const player = playerCard.stats[statIdx]
    const opponent = opponentCard.stats[statIdx]
    if (player === undefined || opponent === undefined) {
        return "invalid"
    }
    if (player > opponent) {
        return "player"
    }
    if (player < opponent) {
        return "opponent"
    }
    return "tie"
}
//TESTCASES--
const cards = [{ stats: [181, 78, 76, 5, 1987] },
{ stats: [185, 98, 85, 12, 1985] },
{ stats: [169, 92, 67, 21, 1987] },
{ stats: [174, 89, 48, 6, 1992] },
{ stats: [181, 74, 82, 17, 1984] },
{ stats: [111, 55, 99, 2, 1973, 60, 8483, 32] }]
console.log(checkWinner(cards[0], cards[1], 0), "opponent");
console.log(checkWinner(cards[1], cards[2], 1), "player");
console.log(checkWinner(cards[0], cards[1], 7), "invalid");
console.log(checkWinner(cards[2], cards[2], 1), "tie");