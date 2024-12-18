import React, { useState } from 'react'
import style from './CartItem.module.css'

const CartItem = ({ cart, changeCountItemToCart, removeItemCart }) => {

    let [itemCount, setItemCount] = useState(cart.count)

    const plusItem = () => {
        setItemCount(++itemCount)
        changeCountItemToCart(itemCount, cart.id)
        
    } 

    const minusItem = () => {
        if(itemCount > 1) {
            setItemCount(--itemCount)
            changeCountItemToCart(itemCount, cart.id)   
        }
    }

    const removeItem = (id) => {
        removeItemCart(id)
    }

    return (
        <div className={style.cartItem}>
            <div className={style.descBlock}>
                <img src={cart?.image} />
                <div className={style?.descBlock1}>
                    <h2>{cart?.title}</h2>
                    <b>{cart?.price} $</b>
                </div>
            </div>
            <div className={style.countBlock}>
                <button onClick={plusItem}>+</button>
                <b>{itemCount}</b>
                <button onClick={minusItem}>-</button>
            </div>
            <div className={style.priceBlock}>
                <b>{cart?.cartPrice?.toFixed(2)}$</b>
                <button onClick={() => removeItem(cart.id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem