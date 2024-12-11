import React from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'


const Products = ({products}) => {
  return (
    <div>
        <div className={style.prodList}>
        {
            products.map((product) => {
                return <Product key={product.id} product={product}/>
            })
        }
        </div>
    </div>
  )
}

export default Products