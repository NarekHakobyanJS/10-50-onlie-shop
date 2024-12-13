import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'


const Products = ({products, addProductToCart, isLoading}) => {
  return (
    <div>
        <div className={style.prodList}>
        {
          isLoading ?
            products.map((product) => {
                return <Product key={product.id} product={product} addProductToCart={addProductToCart}/>
            })
            : <h1>Loading...</h1>
        }
        </div>
    </div>
  )
}

export default Products