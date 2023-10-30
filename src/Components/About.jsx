import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';

const About = () => {
  return (
    <section className="flex items-center flex-wrap gap-4 my-4 px-6">
      <div className="IMAGE md:flex-1 ">
        <img
          src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=1531&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="no internet connection"
          className="rounded-md"
        />
      </div>
      {/*  */}
      <div className="md:flex-1">
        <h1 className="font-bold md:text-[30px]">About Us</h1>
        <h2 className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          tenetur tempora dolorem earum nemo ut aliquid nulla quae eum rem
          reiciendis porro iste alias repellat maxime, laboriosam, quod vero
          maiores.
        </h2>
        <Button>
          <Link to="/buy">Order</Link>
        </Button>
      </div>
    </section>
  );
}

export default About