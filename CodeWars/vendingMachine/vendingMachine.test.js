// @ts-check
const VendingMachine = require('./vendingMachine')

describe('Vending Machine', () => {
	/** @type {Parameters<typeof VendingMachine>[0]} */
	const items = [{
		name: "beans",
		code: "A1",
		quantity: 1,
		price: 1
	}];

	test('should return "not enough money!" if not enough money', () => {
		const vendingMachine = new VendingMachine(items, 0)

		expect(vendingMachine.vend("A1", 0)).toBe("Not enough money!")
	});

	test('should return "Vending <name of item>" if exactly the correct change', () => {
		const vendingMachine = new VendingMachine(items, 0)
		const itemName = "beans"

		expect(vendingMachine.vend("A1", 1)).toBe(`Vending ${itemName}.`)
	});
});