import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({setShowMenu}) => {
  return (
    <div className="bg-white w-[300px] h-[100vh] fixed top-0 right-0 p-5 shadow-md shadow-black md:hidden">
        <button className='w-full text-end text-4xl' onClick={()=>setShowMenu(false)}>x</button>
      <ul>
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
    </div>
  );
}

export default Menu