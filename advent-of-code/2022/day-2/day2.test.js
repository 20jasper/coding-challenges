// cases
// win/loss/tie
// decode rock paper scissors for you/opponent
// add points for shape selected
// parse input file
const { rockPaperScissors } = require('./day2')


describe('Rock paper Scissors', () => {
	it('should award points for shape you selected', () => {
		expect(rockPaperScissors([['paper', 'rock']])).toBe(1)
		expect(rockPaperScissors([['scissors', 'paper']])).toBe(2)
		expect(rockPaperScissors([['rock', 'scissors']])).toBe(3)
	});

	it('should add points on tie', () => {
		expect(rockPaperScissors([['rock', 'rock']])).toBe(4)
	});

	it('should add points based on win', () => {
		expect(rockPaperScissors([['rock', 'paper']])).toBe(8)
		expect(rockPaperScissors([['paper', 'scissors']])).toBe(9)
		expect(rockPaperScissors([['scissors', 'rock']])).toBe(7)
	});
});