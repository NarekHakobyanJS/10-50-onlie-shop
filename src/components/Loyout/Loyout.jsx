import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Loyout = ({carts, user}) => {
  return (
    <>
        <Header carts={carts} user={user}/>
        <Outlet /> 
    </>
  )
}

export default Loyout