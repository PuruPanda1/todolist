import React from 'react';
import image from './images/devpm.jpg';

export default function about() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={image} />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dev. Purab Modi</h1>
        <p className="mb-8 leading-relaxed">This project is created and solely developed by Dev. Purab Modi. </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={(e)=>{window.open("https://www.linkedin.com/in/purab-modi-4b1081209","_blank")}}>LinkedIn</button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={(e)=>{window.open("https://www.instagram.com/purab_here/","_blank")}}>Instagram</button>
        </div>
      </div>
    </div>
  </section>
  )
}
