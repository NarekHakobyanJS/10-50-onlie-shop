import React from 'react'
import logo from '../../assets/logo.webp'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'


const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logoBlock}>
        <img src={logo} alt='logo' />
      </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
      <div>
        <NavLink to='/cart'>
          <FaShoppingCart />
        </NavLink>

      </div>
    </header>
  )
}

export default Header