import React from 'react'
import Products from '../../components/Products/Products'

const Home = ({products, addProductToCart, isLoading}) => {
 
  return (
    <div>
      <Products products={products}  addProductToCart={addProductToCart} isLoading={isLoading}/>
    </div>
  )
}

export default Home