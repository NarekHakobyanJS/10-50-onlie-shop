import React from 'react'
import logo from '../../assets/logo.webp'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUserNinja  } from 'react-icons/fa'



const Header = ({carts, user}) => {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <NavLink to='/'>
        <img src={logo} alt='logo' />
        </NavLink>
       
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
      <div className={style.icons}>
        <div>
        <NavLink to='/cart'>
          <FaShoppingCart className={style.cartLogo}/>
        </NavLink>
        <sub>{carts.length}</sub>
        </div>
        <div>

          <NavLink to={'/login'}>
          {
            user ? <h3>{user.name}</h3> : <FaUserNinja className={style.cartLogo}/>
          }

          </NavLink>
         
        </div>
      </div>
    </header>
  )
}

export default Header