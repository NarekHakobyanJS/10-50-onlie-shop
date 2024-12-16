// Librery
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// Componnets
import Loyout from './components/Loyout/Loyout';
import Home from './pages/Home/Home';
//CSS
import './App.css';
import Cart from './pages/Cart/Cart';
import ProductPage from './pages/ProductPage/ProductPage';



export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

function App() {

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  console.log(isLoading);
  
  let totalPrice = carts.reduce((acum, cart) => acum += cart.cartPrice, 0)

  useEffect(() => {
    setIsLoading(true)
    instance.get('/products')
      .then((res) => {
        setProducts(res.data.map((el) => {
          return {
            ...el,
            count: 1,
            cartPrice: el.price
          }
        }))
        setIsLoading(false)
      })
  }, [])

  /// addCart
  const addProductToCart = (item) => {
    let activeItem = false

    carts.forEach((cart) => {
      if (cart.id === item.id) {
        activeItem = true
        setCarts(carts.map((c) => {
          if (c.id === item.id) {
            return {
              ...c,
              count: ++c.count,
              cartPrice: c.cartPrice + c.price
            }
          } else {
            return c
          }
        }))
      }
    })

    if (!activeItem) {
      setCarts((prev) => {
        return [...prev, item]
      })
    }
  }

  // changeCart
  const changeCountItemToCart = (itemCount, cartId) => {
    setCarts(carts.map((cart) => {
      if (cart.id === cartId) {
        return {
          ...cart,
          count: itemCount,
          cartPrice: cart.price * itemCount
        }
      } else {
        return cart
      }
    }))
  }

  //removeCart
  const removeItemCart = (cartId) => {
    setCarts(carts.filter((cart) => cart.id !== cartId))

  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout carts={carts} />}>
          <Route index element={<Home products={products} addProductToCart={addProductToCart} isLoading={isLoading} />} />
          <Route path='/cart' element={<Cart
            totalPrice={totalPrice}
            carts={carts}
            changeCountItemToCart={changeCountItemToCart}
            removeItemCart={removeItemCart} />} />
          <Route path='/:id' element={<ProductPage addProductToCart={addProductToCart} setIsLoading={setIsLoading} isLoading={isLoading}/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
