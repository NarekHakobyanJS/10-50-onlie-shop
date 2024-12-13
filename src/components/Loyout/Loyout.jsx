import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Loyout = ({carts}) => {
  return (
    <>
        <Header carts={carts}/>
        <Outlet /> 
    </>
  )
}

export default Loyout