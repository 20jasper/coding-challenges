const Name = require('./bowling-game')

let name;

beforeEach(() => {
  name = new Name;
});

describe('bowling game', ()=>{
	test('should initialize on the 0th frame', ()=>{
		expect(name._frame).toBe(0)
	})
	test('should initialize with 0 points', ()=>{
		expect(name._points).toBe(0)
	})
	test('should add points for each pin knocked down', ()=>{
		name.roll(5)
		expect(name._points).toBe(5)
	})
	test('The score method should return the score', ()=>{
		name.roll(5)
		expect(name.score()).toBe(5)
	})
	test('The frame should advance when all 10 pins are knocked down', ()=>{
		name.roll(10)
		expect(name._frame).toBe(1)
	})
	test('The frame should advance when a spare is rolled', ()=>{
		name.roll(5)
		name.roll(5)
		expect(name._frame).toBe(1)
	})
	test('The frame should advance after 2 rolls that don\'t knock down all the pins', ()=>{
		name.roll(5)
		name.roll(4)
		expect(name._frame).toBe(1)
	})
	// The bonus for a spare is the number of pins knocked down by the next roll.
	test('Bonus points should be added after a spare', ()=>{
		name.roll(5)
		name.roll(5)
		name.roll(5)
		expect(name._frame).toBe(20)
	})
})

