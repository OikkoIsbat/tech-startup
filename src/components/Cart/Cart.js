import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const employee of cart) {
        total = total + employee.salary;

    }
    return (
        <div>
            <h2 class="summary-text">Summary</h2>
            <h2>Total Added: {props.cart.length}</h2>
            <h2>Total Cost: ${total}</h2>
        </div>
    );
};

export default Cart;