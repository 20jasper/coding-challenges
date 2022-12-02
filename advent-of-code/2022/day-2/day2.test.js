// cases
// win/loss/tie
// decode rock paper scissors for you/opponent
// add points for shape selected
// parse input file
const { rockPaperScissors } = require('./day2')


describe('Rock paper Scissors', () => {
	it('should award points for shape you selected', () => {
		//opponent: paper, you: rock
		expect(rockPaperScissors([['B', 'X']])).toBe(1)
		//opponent: scissors, you: paper
		expect(rockPaperScissors([['C', 'Y']])).toBe(2)
		//opponent: rock, you: scissors
		expect(rockPaperScissors([['A', 'Z']])).toBe(3)
	});

	it('should add points based on round outcome', () => {
		//opponent: rock, you: paper => win
		expect(rockPaperScissors([['A', 'Y']])).toBe(8)
		//oponent: rock, you: rock => tie
		expect(rockPaperScissors([['A', 'X']])).toBe(4)
	});
});