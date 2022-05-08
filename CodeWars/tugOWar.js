//URL--
// https://www.codewars.com/kata/547fb94931cce5f5de00024f

//INSTRUCTIONS--
/* In this Kata we will play a classic game of Tug-o'-War!

Two teams of 5 members will face off, the strongest of which will prevail. Each team member will be assigned a strength rating (1-9), with the most powerful members having a rating of 9. Your goal is to determine, based on the cumulative strength of the members of each team, which team will win the war.

The teams will be represented by an array of arrays:

[[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26 ; "Team 2 wins!"

Your task is to return a string with which team won or if it was a tie.

    If team one is stronger, return the string "Team 1 wins!"
    If team two is stronger, return the string "Team 2 wins!"

If the two teams are of equal strength, the team with the strongest Anchor (the member furthest from the center of the rope (first member for Team 1, last member for Team 2)) will win. In the above example, the member with strength 5 is team one's Anchor and strength 9 is team two's Anchor.

    If the teams and the Anchors are both of equal strength, return the string "It's a tie!"

The Anchors are members in each end of the rope:

anchors

more examples:

[[1,2,3,4,5], [1,2,3,4,5]] // Team 2 has stronger Anchor ; "Team 2 wins!"
[[1,2,3,4,5], [5,4,3,2,1]] // Teams & Anchors are tied; "It's a tie!"

*/

//SOLUTION--
/* I am going to add up each array and compare them
    If the first sum is more, return team 1 wins
    If the second sum is more, return team 2 wins
    If the sums are equal, compare the first element in the first array, and the last element of the second array
        If the first element is more, return team 1 wins
        If the second element is more, return team 2 wins
        else return it's a tie
*/
function tug_o_war(teams) {
    const sum1 = teams[0].reduce((sum, value) => sum + value, 0)
    const sum2 = teams[1].reduce((sum, value) => sum + value, 0)
    if (sum1 > sum2) {
        return "Team 1 wins!"
    }
    if (sum1 < sum2) {
        return "Team 2 wins!"
    }
    const anchor1 = teams[0][0]
    const anchor2 = teams[1][teams[1].length - 1]
    if (anchor1 > anchor2) {
        return "Team 1 wins!"
    }
    if (anchor1 < anchor2) {
        return "Team 2 wins!"
    }
    return "It's a tie!"
}
//TESTCASES--
console.log(tug_o_war([[1, 2, 3, 4, 6], [5, 4, 3, 2, 1]]), "Team 1 wins!");
console.log(tug_o_war([[1, 2, 3, 4, 6], [5, 4, 9, 2, 1]]), "Team 2 wins!");
console.log(tug_o_war([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]), "It's a tie!");