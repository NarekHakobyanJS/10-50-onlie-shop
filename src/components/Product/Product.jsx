import React from 'react'
import style from './Product.module.css'
import { FaShoppingCart } from "react-icons/fa";

const Product = ({product}) => {

    const titleIndex = 20
  return (
    <div className={style.prodCard}>
        <h2>{
        product.title.length >= titleIndex
         ? product.title.slice(0, titleIndex) + '...' : product.title}</h2>
        <img src={product.image} />
        <button>Buy : <FaShoppingCart /> </button>
    </div>
  )
}

export default Product