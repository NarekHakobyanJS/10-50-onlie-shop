import React, { useContext } from 'react'
import style from './Products.module.css'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
import { MyContext } from '../../App'


const Products = () => {

  const { products, addProductToCart, isLoading } = useContext(MyContext)
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