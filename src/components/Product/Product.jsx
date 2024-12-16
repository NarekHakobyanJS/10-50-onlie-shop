import React from 'react'
import style from './Product.module.css'
import { NavLink } from 'react-router-dom';
import ByeToCart from '../ByeToCart/ByeToCart';

const Product = ({product, addProductToCart}) => {

    const titleIndex = 20
  return (
    <div className={style.prodCard}>
        <h2>{
        product.title.length >= titleIndex
         ? product.title.slice(0, titleIndex) + '...' : product.title}</h2>
         <NavLink to={`/${product.id}`}>
         <img src={product.image} />
         </NavLink>
         <ByeToCart addProductToCart={addProductToCart} product={product}/> 
    </div>
  )
}

export default Product