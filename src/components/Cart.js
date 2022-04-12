import '../styles/cart.css';
import React, { useState } from 'react';
const Cart = ({ items, updateCart }) => {


    const [cart, setCart] = useState(items);
    function total() {
        let total = 0;
        for (let item of cart) {
            total += item.item.price * item.quantity;
        }
        return total;
    }
    function addQuantityHandler(index) {
        cart[index].quantity = (parseInt(cart[index].quantity) + 1) < 20 ? (parseInt(cart[index].quantity) + 1) : 20;
        setCart([...cart]);
        updateCart(cart);
    }
    function subtractQuantityHandler(index) {
        cart[index].quantity = (parseInt(cart[index].quantity) - 1) >= 0 ? (parseInt(cart[index].quantity) - 1) : 0;
        if (!parseInt(cart[index].quantity)) {
            const newCart = cart.filter((item, i) => i !== index);
            console.log("zero items", newCart);
            setCart(newCart);
            updateCart(newCart);
        } else {
            setCart([...cart]);
            updateCart(cart);
        }

    }
    return (
        <div className="content">
            <h1>YOUR CART</h1>
            {cart.map((item, index) => {
                return (
                    <div key={index} className="item">
                        <img src={item.item.image} alt={item.item.name} />
                        <div className="item-info">
                            <h2>{item.item.name}</h2>
                            <p className='price'>${item.item.price}</p>
                            <button data-testid="test-add" className='quantity-btn' onClick={() => addQuantityHandler(index)}>+</button>
                            <span data-testid="test-amount" className='item-quantity'>{item.quantity}</span>
                            <button data-testid="test-subtract" className='quantity-btn' onClick={() => subtractQuantityHandler(index)}>-</button>
                        </div>
                    </div>
                )
            })}
            <div className="checkout-details">
                <p className="total">total: {(total()).toFixed(2)}</p>
                <p className="tax">tax: {(total() * .1).toFixed(2)}</p>
                <p className="subtotal">Subtotal: {(total() * 1.1).toFixed(2)}</p>
                <button className="btn">Check Out</button>
            </div>
        </div>
    )
}

export default Cart;