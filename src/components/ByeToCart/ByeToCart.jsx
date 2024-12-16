import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const ByeToCart = ({ addProductToCart, product }) => {
  return (
    <button
      onClick={() => addProductToCart(product)}
    >Buy : <FaShoppingCart /> </button>
  )
}

export default ByeToCart