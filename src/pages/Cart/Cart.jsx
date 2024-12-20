import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import style from './Cart.module.css'
import OrederForm from '../../components/OrederForm/OrederForm'
import { MyContext } from '../../App'

const Cart = () => {
  const {carts, changeCountItemToCart, removeItemCart, totalPrice} = useContext(MyContext)
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
      <div>
        <OrederForm />
      </div>
    </div>
  )
}

export default Cart