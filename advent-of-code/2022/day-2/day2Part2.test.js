// cases
// change X/Y/Z to loss/tie/win

const { rockPaperScissors, parseInput } = require('./day2Part2')


describe('Rock paper Scissors', () => {
	it('should award points for shape you selected', () => {
		expect(rockPaperScissors([['paper', 'loss']])).toBe(1)
		expect(rockPaperScissors([['scissors', 'loss']])).toBe(2)
		expect(rockPaperScissors([['rock', 'loss']])).toBe(3)
	});

	it('should add points on tie', () => {
		expect(rockPaperScissors([['rock', 'tie']])).toBe(4)
	});

	it('should add points based on win', () => {
		expect(rockPaperScissors([['rock', 'win']])).toBe(8)
		expect(rockPaperScissors([['paper', 'win']])).toBe(9)
		expect(rockPaperScissors([['scissors', 'win']])).toBe(7)
	});

	it('should sum multiple rounds', () => {
		expect(rockPaperScissors([['rock', 'win'], ['rock', 'win']])).toBe(16)
	});
});

describe('parse input', () => {
	it('should change each letter to rock, paper, or scissors', () => {
		expect(parseInput("test.txt")).toStrictEqual([['rock', 'loss'], ['paper', 'tie'], ['scissors', 'win']])
	});
});