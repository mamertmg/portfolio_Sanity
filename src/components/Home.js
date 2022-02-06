import React from 'react';
import image from '../background.jpg'

function Home() {
  return (
    <main>
      <img src={image} alt="The background" className='absolute object-cover w-full h-full'/>
      <section className='relative flex justify-end min-h-screen pt-12 lg:pt-64 px-24'>
        <h1 className='text-4xl text-white font-bold cursive leading-none lg:leading-snug home-name'>Welcome!</h1>
      </section>
    </main>
  )
}

export default Home;
