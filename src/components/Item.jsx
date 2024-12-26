import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../Context/Cart';
import '../App.css'


function Item(props) {
    const cart =  useContext(cartContext);;
    console.log(cart);
    return (
        <div className='item-card'>
            <h4>{props.name}</h4>
            <p>Price - ${props.price}</p>
            <button onClick={() =>
                cart.setCartItems(
                    [...cart.cartItems, { name: props.name, price: props.price }]
                )
            }>Add To Cart</button>
        </div>
    )
}

export default Item
