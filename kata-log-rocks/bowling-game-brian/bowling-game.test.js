const { Game } = require('./bowling-game')


describe('bowling game', ()=>{
	let model

	beforeEach(()=>{
		model = new Game()
	})

	test('Game class should exist', ()=>{

		expect(model).toBeDefined()
	})

	test('score is initialized as 0', ()=>{
		
		expect(model._score).toBe(0)
	})

	test('score should increase by 3 after knocking down 3 pins', ()=>{
		model.roll(3)

		expect(model._score).toBe(3)
	})
	test('score should increase by 5 after knocking down 5 pins', ()=>{
		model.roll(5)

		expect(model._score).toBe(5)
	})

	test('score should be 8 after rolling 5 and 3', ()=>{
		model.roll(5)
		model.roll(3)

		expect(model._score).toBe(8)
	})

	test('score method returns 11 if current score is 11', ()=>{
		model._score = 11

		expect(model.score()).toBe(11)
	})

	test('score method returns 25 if current score is 25', ()=>{
		model._score = 25

		expect(model.score()).toBe(25)
	})
})