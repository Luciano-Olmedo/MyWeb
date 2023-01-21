import React from 'react'
import design from '../images/design.jpg'

const About = () => {
    return (
        <section className='bg-violet-800 text-white py-32 'id="about">
            <div className='container mx-auto grid md:grid-cols-2 items-center justify-between'>
                <div className="about-info ">
                    <h1 className=' text-5xl font-bold text-white text-center underline   '>
                        About Me
                    </h1>
                    <br />
                    <p className=' text-3xl text-white text-left mt-10'>
                        I am a committed person who seeks challenges and new adventures, so I am constantly growing in the fascinating IT world!
                    </p>
                </div>
                <div className='hero-img w-[85%] mt-10'>
                    <img src={design} alt="coding illustration" className='w-[85%] ml-auto rounded-md' />
                </div>
            </div>
      
        </section>
    )
}

export default About