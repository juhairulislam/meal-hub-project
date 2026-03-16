import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            {
                cart.map(c => <h2>{c.strMeal}</h2>)
            }
        </div>
    );
};

export default Cart;