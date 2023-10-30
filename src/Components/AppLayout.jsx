import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Cart from './Cart';
import Menu from './Menu';

const AppLayout = () => {
  const [showCart,setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full max-w-[1400px] h-max mx-auto">
      <Header showCart={showCart} setShowCart={setShowCart} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Outlet></Outlet>
      {showMenu && <Menu setShowMenu={setShowMenu}/>}
      {showCart && <Cart setShowCart={setShowCart}/>}
    </div>
  );
}

export default AppLayout