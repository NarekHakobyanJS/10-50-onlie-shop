import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'
import ByeToCart from '../../components/ByeToCart/ByeToCart'
import Loading from '../../components/Loading/Loading'

const ProductPage = ({ addProductToCart, setIsLoading, isLoading }) => {

  const [product, setProduct] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    setIsLoading(true)

    instance.get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data)
        setIsLoading(false)
      })
  }, [id])

  return (
    <div>
      {
        isLoading
          ? <Loading />
          : <div>
            <h1>{product?.title}</h1>
            <img width={250} src={product?.image} />
            <ByeToCart addProductToCart={addProductToCart} product={product} />
          </div>
      }
    </div>
  )
}

export default ProductPage