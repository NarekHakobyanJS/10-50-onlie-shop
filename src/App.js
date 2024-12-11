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
  baseURL : 'https://fakestoreapi.com'
})

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data))
  }, [])

  
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={<Loyout /> }>
        <Route index element={<Home products={products}/> }/>
        <Route path='/cart' element={<Cart /> }/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
