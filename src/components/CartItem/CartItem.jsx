import React from 'react'
import style from './CartItem.module.css'

const CartItem = ({ cart }) => {
    return (
        <div className={style.cartItem}>
            <div className={style.descBlock}>
                <img src={cart.image} />
                <div className={style.descBlock1}>
                    <h2>{cart.title}</h2>
                    <b>{cart.price} $</b>
                </div>
            </div>
            <div className={style.countBlock}>
                <button>+</button>
                <b>{cart.count}</b>
                <button>-</button>
            </div>
            <div className={style.priceBlock}>
                <b>{cart.cartPrice}$</b>
                <button>X</button>
            </div>
        </div>
    )
}

export default CartItem