import { Item, checkIfItemAlreadyInCart, getTotalNumOfItems } from "../Item";

test("should return true when item is already in cart", () => {
    const item = Item({
        id: 1,
        name: "random  object"
    }, 5);
    const cart = [Item({ id: 1, name: "Unknown Object" }, 10)];

    expect(checkIfItemAlreadyInCart(item, cart)).toBe(true);
});

test("should return false when item is not already in cart", () => {
    const item = Item({
        id: 10,
        name: "random  object"
    }, 5);
    const cart = [Item({ id: 1, name: "Unknown Object" }, 10)];

    expect(checkIfItemAlreadyInCart(item, cart)).toBe(false);
});

test("should return 69 for total number of items in cart", () => {
    const item1 = Item({
        id: 1,
        name: "random  object"
    }, 5);
    const item2 = Item({
        id: 2,
        name: "random  object"
    }, 64);
    const cart = [item1, item2];
    expect(getTotalNumOfItems(cart)).toBe(69);
})