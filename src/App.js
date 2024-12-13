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



const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

function App() {

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // console.log(products);

  useEffect(() => {
    instance.get('/products')
      .then((res) => {
        setProducts(res.data.map((el) => {
          return {
            ...el,
            count: 1,
            cartPrice: el.price
          }
        }))
        setIsLoading(true)
      } )
  }, [])

  const addProductToCart = (item) => {
    let activeItem = false

    carts.forEach((cart) => {
      //  activeItem = true
      if (cart.id === item.id) {
        activeItem = true
       setCarts( carts.map((c) => {
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
      // console.log(cart);
    })

    if (!activeItem) {
      setCarts((prev) => {
        return [...prev, item]
      })
    }
  }



  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Loyout carts={carts}/>}>
          <Route index element={<Home products={products} addProductToCart={addProductToCart} isLoading={isLoading}/>} />
          <Route path='/cart' element={<Cart carts={carts} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
