import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { GiSmartphone } from 'react-icons/gi'

const Contact = () => {
    return (
        <section className='bg-violet-800 py-32  mx-auto'id='Contact'>
            <h1 className='4xl text-bold underline text-white mx-24'>Contact Me</h1>
            <div className="text-left text-white mx-auto    w-[85%] mb-20 ">
                <p className='text-3xl  text-white text-left mt-10'>I am a junior programmer who discovered his passion for programming in the time of pandemic.</p>
                <p className='text-3xl  text-white text-left mt-10'>During it I trained and completed Acámica's full stack web developer course. He did some group work thanks to NoCountry, a project simulation space, where I focused on the frontend side and also strengthening soft skills.
                </p>
                <p className='text-3xl  text-white text-left mt-10'>After completing the activities and passionate about the world of IT, I continued instructing myself in frameworks and libraries in a self-taught way. Always looking forward to my first work experience as a programmer.
                </p>

            </div>
            <div className='flex py-32 justify-around text-white md:w-[85%] mx-auto  '>
                <div className=' rounded-full w-12 h-12 flex justify-center  items-center bg-violet-500' ><a href="https://mail.google.com/mail/u/0/?fs=1&to=lucianonicolasolmedo@gmail.com&tf=cm" target="_blank" rel="noreferrer"> <AiOutlineMail size={35} className="cursor-pointer " /></a></div>
                <div className='rounded-full w-12 h-12 flex justify-center bg-violet-500 items-center'><GiSmartphone size={35} className="cursor-pointer" /></div>
                <div className='rounded-full w-12 h-12 flex justify-center bg-violet-500 items-center'><a href="https://www.linkedin.com/in/lucianonicolasolmedo" target="_blank" rel="noreferrer" ><AiFillLinkedin size={35} className="cursor-pointer" /></a></div>
                <div className='rounded-full w-12 h-12 flex justify-center bg-violet-500 items-center'><a href="https://github.com/Luciano-Olmedo" target="_blank" rel="noreferrer"><AiFillGithub size={35} className="cursor-pointer" /></a></div>                                    
            </div>
        </section>
    )
}

export default Contact