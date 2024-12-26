import React, { useContext } from 'react'
import { cartContext } from '../Context/Cart'

function Cart() {
  const cart = useContext(cartContext)
  const total = cart && cart.cartItems.reduce((a,b) => a + b.price, 0);

  return (

    <div>
      <h2>Your Cart</h2>

      {
        cart && cart.cartItems.map(item => <li>{item.name} - ${item.price}</li>)
      }

      <p>Total - ${total}</p>
    </div>

  )
}

export default Cart
