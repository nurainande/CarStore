import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../store'
import { cars } from '../cars'
import Button from './Button'

const Brand = () => {
  const {params} = useParams()
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  console.log(cart)
  const [detail, setDetail] = useState(false)


  const code =cars.find(it=>{
    return it.carName === params && it.carAvai.map(i=>{
      console.log(i)
      return i
    })
  })
  console.log(code)
  
  function handleSub(type,price){
    dispatch(addCart({ type: type, price: price }));
    const info = cart.find((item) => {
      console.log(item)
      return item?.type === type
    });
    console.log(info)
    
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 px-6 py-6'>
      {code.carAvai.map((car) => (
        <div key={car.type} className='text-center'>
          <img src={car.image} alt="no internet connection" className='h-full rounded-md' />
          <h1 className='font-bold text-[30px]'>{car.type} <span className='text-[15px]'>${car.price}</span></h1>
          <Button onClick={()=>handleSub(car.type,car.price)}>Add to cart</Button>
          <br />
          {cart.length>0 &&cart.find(item=>item.type===car.type) && <div>
            <b className='mx-2'>added</b>
          </div>}
        </div>
      ))}
    </div>
  );
}

export default Brand