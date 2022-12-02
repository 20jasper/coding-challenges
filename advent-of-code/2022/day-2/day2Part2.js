//URL--
// https://adventofcode.com/2022/day/2

//INSTRUCTIONS--
/*
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

		In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
		In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
		In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

//SOLUTION--
/* 
*/
const { readFileSync } = require("fs")

function rockPaperScissors(rounds) {

	const totalPoints = rounds.reduce((total, [opponentShape, yourShape]) => {
		const shapePoints = { rock: 1, paper: 2, scissors: 3 }
		const winningShape = { rock: 'paper', paper: 'scissors', scissors: 'rock' }

		let points = 0

		points += shapePoints[yourShape]

		// tie
		if (opponentShape === yourShape) {
			points += 3
		}
		// you win
		else if (winningShape[opponentShape] === yourShape) {
			points += 6
		}

		return total + points
	}, 0)

	return totalPoints
}

function parseInput(relativePath) {
	const data = readFileSync(`${__dirname}/${relativePath}`, { encoding: 'utf8' })

	const rounds = data.trimEnd().split('\n')
	const formattedRounds = rounds.map(round => {
		const convertToRPS = { A: 'rock', X: 'rock', B: "paper", Y: "paper", C: "scissors", Z: "scissors" }

		const options = round.split(' ')
		return options.map(option => convertToRPS[option])
	})
	return formattedRounds
}

module.exports = { rockPaperScissors, parseInput }