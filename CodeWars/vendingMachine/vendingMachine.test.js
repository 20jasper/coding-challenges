// @ts-check
const VendingMachine = require("./vendingMachine");

describe("Vending Machine", () => {
  /** @type {Parameters<typeof VendingMachine>[0]} */
  let items;

  beforeEach(() => {
    items = [
      {
        name: "beans",
        code: "A1",
        quantity: 1,
        price: 1,
      },
      { name: "apple", code: "A2", quantity: 0, price: 1 },
    ];
  });

  test('should return "not enough money!" if not enough money', () => {
    const vendingMachine = new VendingMachine(items, 0);

    expect(vendingMachine.vend("A1", 0)).toBe("Not enough money!");
  });

  test('should return "Vending <name of item>" if no change', () => {
    const vendingMachine = new VendingMachine(items, 0);
    const itemName = "beans";

    expect(vendingMachine.vend("A1", 1)).toBe(`Vending ${itemName}`);
  });

  test('should return "Vending <name of item> with <change> change." if positive change', () => {
    const vendingMachine = new VendingMachine(items, 0);
    const itemName = "beans";

    expect(vendingMachine.vend("A1", 1.2)).toBe(
      `Vending ${itemName} with 0.20 change.`
    );
  });

  test('should return "<name of item> out of stock" if quantity is 0', () => {
    const vendingMachine = new VendingMachine(items, 0);
    const itemName = "apple";

    expect(vendingMachine.vend("A2", 1.2)).toBe(`${itemName}: Out of stock!`);
  });

  test('should return "invalid selection" if item not in vending machine', () => {
    const money = 0;
    const vendingMachine = new VendingMachine(items, money);

    expect(vendingMachine.vend("code that doesn't exist", 0)).toBe(
      `Invalid selection! : Money in vending machine = ${money.toFixed(2)}`
    );
  });

  test("should update quantity on valid selection", () => {
    const money = 0;
    const vendingMachine = new VendingMachine(items, money);

    const initialQuantity = vendingMachine._items[0].quantity;
    vendingMachine.vend("A1", 9999);

    const newQuantity = vendingMachine._items[0].quantity;
    expect(newQuantity).toBe(initialQuantity - 1);
  });
});
