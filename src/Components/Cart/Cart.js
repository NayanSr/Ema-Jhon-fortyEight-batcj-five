import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h4>Order Summary</h4>
            <h5> Selected Product: {cart.length}</h5>
        </div>
    );
};

export default Cart;