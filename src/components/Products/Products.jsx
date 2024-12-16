import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'


const Products = ({ products, addProductToCart, isLoading }) => {
  return (
    <div>
      <div className={style.prodList}>
        {
          isLoading
           ?
            <Loading />
            :
            products.map((product) => {
              return <Product key={product.id} product={product} addProductToCart={addProductToCart} />
            })

        }
      </div>
    </div>
  )
}

export default Products