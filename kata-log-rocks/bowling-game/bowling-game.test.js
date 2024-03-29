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

		expect(name._points).toBe(20)
	})
	test('Bonus points should not be added 2 rolls after a spare', ()=>{
		name.roll(5)
		name.roll(5)

		name.roll(5)
		name.roll(4)

		expect(name._points).toBe(24)
	})
	test('Bonus points should be added for two rolls after a strike', ()=>{
		name.roll(10)

		name.roll(7)
		name.roll(2)

		expect(name._points).toBe(28)
	})
	test('Bonus point multiplier should stack', ()=>{
		name.roll(10)
		
		name.roll(10)
		
		// should get triple points for this roll
		name.roll(2)
		// should get double points for this roll
		name.roll(2)

		expect(name._points).toBe(40)
	})
	test('Frame should not advance if a strike is rolled at the start of the tenth frame', ()=>{
		name._frame = 10
		
		name.roll(10)

		expect(name._frame).toBe(10)
	})
	test('Frame should advance if pins are left after 2 rolls on the tenth frame', ()=>{
		name._frame = 10
		
		name.roll(2)
		name.roll(2)

		expect(name._frame).toBe(11)
	})
	test('Frame should not advance after 2 strikes on the tenth frame', ()=>{
		name._frame = 10
		
		name.roll(10)
		name.roll(10)

		expect(name._frame).toBe(10)
	})
	test('Frame should not advance after spare at the start of the tenth frame', ()=>{
		name._frame = 10
		
		name.roll(2)
		name.roll(8)

		expect(name._frame).toBe(10)
	})
	test('Frame should advance after 3 rolls on the tenth frame', ()=>{
		name._frame = 10
		
		name.roll(10)
		name.roll(2)
		name.roll(2)

		expect(name._frame).toBe(11)
	})
})

