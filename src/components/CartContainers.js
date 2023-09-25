import React from 'react'
import CartItems from './CartItems'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const CartContainers = () => {
  const dispatch = useDispatch()
  const {cartItems,amount,total,} = useSelector((store) => store.cart)

  if(amount < 1) {
    return <section className='cart'>
      <header>
        <h2>Your Bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </header>
    </section>
  }

  return <section className='cart'>
    <header>
      <h2>Your Bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <CartItems key={item.id} {...item} /> 
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
      <h4>
        total <span>${total.toFixed(2)}</span>
      </h4>
      </div>   
      <button className='btn clear-btn' onClick={() =>dispatch(clearCart())}>clear cart</button>
    </footer>
  </section>
}

export default CartContainers 