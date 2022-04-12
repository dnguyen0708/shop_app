function limitExceeded() {
    alert("can only add a maximum of 20 units");
    return 20;
}

export function Item(obj, quantity) {
    return { "item": obj, quantity };
};


export function checkIfItemAlreadyInCart(item, cart) {
    for (let i of cart) {
        if (i.item.id === item.item.id) {
            i.quantity = (parseInt(i.quantity) + parseInt(item.quantity) > 20) ? limitExceeded() : parseInt(i.quantity) + parseInt(item.quantity);
            return true;
        }
    }
    return false;
}

export function getTotalNumOfItems(cart) {
    let total = 0;
    for (let i of cart) {
        total += parseInt(i.quantity);
    }
    return total;
}