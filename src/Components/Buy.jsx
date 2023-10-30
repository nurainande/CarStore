import React from 'react'
import { cars } from '../cars';
import { Link } from 'react-router-dom';

const Buy = () => {
  return (
    <div className='flex  gap-3 px-6 py-10 justify-center flex-col md:flex-row items-center'>
      {cars.map((item, i) => (
        <Link to={`/buy/${item.carName}`} key={item.carName}>
          <img src={item.carImage} alt="" className='rounded-md w-[500px] h-full' />
          <h1 className='text-[30px] font-bold'>Select {item.carName}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Buy