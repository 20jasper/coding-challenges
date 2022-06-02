//URL--
// https://www.codewars.com/kata/5843baa8673ea2668c0001e4

//INSTRUCTIONS--
/* In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change: Cards:

 +1: 2, 3, 4, 5, 6
  0: 7, 8, 9
 -1: 10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter and increment or decrement the local count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.

Example Output :

"-3 Hold"
"5 Bet"
*/

//SOLUTION--
/* I am going to reduce the array to find the count
    If the number is 2-6, add 1
    if the number is 7-9, add 0
    else, add -1
If the count is less than 1, make the player decision "Hold"
    Else make the decision, "Bet"
return the count and the decision separated by a space
*/
function cc(card) {
    const count = card.reduce((sum, card) => {
        if (card < 7) {
            return ++sum
        }
        if (card < 10) {
            return sum
        }
        return --sum
    }, 0)
    let decision
    if (count < 1) {
        decision = "Hold"
    } else {
        decision = "Bet"
    }
    return `${count} ${decision}`
};
//TESTCASES--
console.log(cc([2, 3, 4, 5, 6]), "5 Bet");
console.log(cc([2, 7, 4, "Q"]), "1 Bet");
console.log(cc([2, "K", 4, "Q", "A"]), "-1 Hold");