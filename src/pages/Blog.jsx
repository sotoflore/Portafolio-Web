import React from 'react'
import ImageBlog from '../assets/image-section-blog.png';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="mt-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-full my-10 object-cover object-center rounded" alt="hero" src={ImageBlog}/>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-4xl text-3xl mb-2 font-bold text-gray-50 uppercase">blog proximamente</h1>
          <p className="mb-8 text-gray-50">En construcción ...</p>
          <NavLink to="/"  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-purple-500/50 font-medium rounded-lg px-5 py-2.5 text-center">Volver al inicio</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Blog