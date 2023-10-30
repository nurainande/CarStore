import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart, HiOutlineMenu } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Header = ({showCart,setShowCart,showMenu,setShowMenu}) => {
  const cart = useSelector(state=>state.cart)
  return (
    <header className="flex justify-between items-center  p-6">
      <h1 className="font-bold text-2xl">CarStore</h1>
      <ul className="hidden sm:flex gap-4 sm:block">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
      </ul>

      <div className="flex">
        <div>
          <HiShoppingCart
            className="text-4xl relative"
            onClick={() => setShowCart((show) => !show)}
          />
          {cart.length > 0 && (
            <h2 className="text-center rounded-full absolute top-3 right-14 md:right-4 bg-black p-1 text-white text-[10px] w-[20px] h-[20px]">
              {cart.length}
            </h2>
          )}
        </div>
        <HiOutlineMenu className="text-4xl md:hidden" onClick={() => setShowMenu((show) => !show)} />
      </div>
    </header>
  );
}

export default Header