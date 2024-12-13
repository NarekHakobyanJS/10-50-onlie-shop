import React from 'react'
import CartItem from '../../components/CartItem/CartItem'
import style from './Cart.module.css'

const Cart = ({carts}) => {
  return (
    <div>
      <div className={style.cartBlock}>
      {
        carts.map((cart) => {
          return <CartItem cart={cart} key={cart.id}/>
        })
      }
      </div>
    </div>
  )
}

export default Cart