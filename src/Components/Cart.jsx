import React from 'react'
import { useSelector } from 'react-redux';

const Cart = ({setShowCart}) => {
  const cart = useSelector(state=>state.cart)
  console.log(cart)
  const sum = cart.reduce((acc,item)=>acc+item.price,0)
  return (
    <div className="bg-white w-[300px] h-[100vh] fixed top-0 right-0 p-5 shadow-md shadow-black ">
        <button className='w-full text-end text-4xl' onClick={()=>setShowCart(false)}>x</button>
      <h1 className="font-bold text-[20px] mb-4">Cart</h1>
      {cart.length===0 && <h1>Cart is empty</h1>}
      {cart.length>0 && cart.map(item=><div key={item.type+cart.length} className='flex justify-between my-4'>
        <span className='font-bold'>{item.type}</span>
        <span>{item.price}$</span>
      </div>)}
      <h1>Total: ${sum}</h1> 

    </div>
  );
}

export default Cart