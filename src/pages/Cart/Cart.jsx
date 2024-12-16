import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import style from './Cart.module.css'

const Cart = ({carts, changeCountItemToCart, removeItemCart, totalPrice}) => {
  return (
    <div>
      <div className={style.cartBlock}>
      {
        carts.length ?
        carts.map((cart) => {
          return <CartItem 
          removeItemCart={removeItemCart} 
          changeCountItemToCart={changeCountItemToCart} 
          cart={cart} 
          key={cart.id}
          />
        })
        : <h1>Cart is Empty!</h1>
      }
      </div>
      <div>
        {
          totalPrice === 0 ? "" : <h2>total price ... {totalPrice}$</h2>
        }
        
      </div>
    </div>
  )
}

export default Cart