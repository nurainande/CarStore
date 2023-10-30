import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';

const Home = () => {
  return (
    <div className="text-center font-bold w-full py-[150px] px-6 border-red-700">
      <h1 className="text-8xl mb-8">Ride in Comfort</h1>
      <Button>
        <Link to="about">Start</Link>
      </Button>
    </div>
  );
}

export default Home