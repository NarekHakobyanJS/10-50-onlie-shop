// Librery
import { useEffect, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
// Componnets
import Loyout from './components/Loyout/Loyout';
import Home from './pages/Home/Home';
//CSS
import './App.css';
import Cart from './pages/Cart/Cart';
import ProductPage from './pages/ProductPage/ProductPage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';


export const MyContext = createContext(null)


export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com'
})

function App() {

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts))
  }, [carts])

  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([
    { id: 1, name: "Ashot", login: 'ash', password: '1234' },
    { id: 2, name: "Anna", login: 'ann', password: '1234' },
    { id: 3, name: "Maria", login: 'mar', password: '1234' },
  ])
  let [user, setUser] = useState(null)

  const loginUser = (user) => {
    setUser(user)
  }

  // console.log(user);

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
  const value = {
    carts,
    user,
    products,
    addProductToCart,
    isLoading,
    totalPrice,
    changeCountItemToCart,
    removeItemCart,
    setIsLoading,
    users, 
    loginUser
  }
  return (
    <div className="App">
      <MyContext.Provider value={value}>
        <Routes>
          <Route path='/' element={<Loyout />}>
            <Route index element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:id' element={<ProductPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
