//URL--
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f
 
//INSTRUCTIONS--
/* Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/ 
 
//SOLUTION--
/* I am going to check to see if the strings are equal, and if so, return draw
If they are not equal, I will use a switch to check to see who wins in each situation
*/ 
const rps = (p1, p2) => {
    if (p1===p2){
      return "Draw!";
    } else { switch (p1) {
        case 'rock' : {
          switch (p2) {
              case 'paper' :
              return 'Player 2 won!';
              case 'scissors' :
              return 'Player 1 won!';
          }
        }
        case 'paper' : {
          switch (p2) {
              case 'scissors' :
              return 'Player 2 won!';
              case 'rock' :
              return 'Player 1 won!';
          }
        }
        case 'scissors' : {
          switch (p2) {
              case 'rock' :
              return 'Player 2 won!';
              case 'paper' :
              return 'Player 1 won!';
          }
        }
    }
      
    }
  };
//TESTCASES--
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
