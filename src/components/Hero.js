import React from 'react'
import programmer from "../images/programmer.jpg"

const Hero = () => {
  return (
    <section className='bg-violet-500 text-white py-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-between'>
        <div className="hero-info ">
          <h1 className='  font-bold text-white text-center '>Hi <br />
            I am <span className='text-span'>L</span>uciano <br />
            Web Developer
          </h1>
          <br />
          <p className=' text-3xl text-white text-center'>I want my first job in IT</p>
          <div className='text-center'>
            <button className='mb-2 border-2 border-blue-700 hover:bg-transparent text-2xl bg-violet-800 text-white rounded-md mt-10 py-3 px-6 text-center'  >See Projects</button>

          </div>


        </div>
        <div className='hero-img  w-[85%] mt-10'>
          <img src={programmer} alt="coding illustration" className='w-[85%] ml-auto rounded-md' />
        </div>
      </div>

    </section>
  )
}

export default Hero