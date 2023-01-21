import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.png'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'

const Projects = () => {
    return (
        <div className='bg-violet-500 text-white py-32'id="Projects">
            <h1 className='underline text-4xl text-white text-left m-10 text-bold pb-10'>PROJECTS</h1>
            <div className='container mx-auto text-left justify-between  pb-5 '>
                <p className='pb-5 mx-auto text-3xl  '>
                In this block, I have done some projects where I have practiced different technologies and good practices. Always looking to improve in the smallest detail
                </p>


            </div>
            <div className='grid grid-cols-3 justify-between container items-center gap-4 mx-auto py-20'>
                <div className='mx-auto'>
                    <img src={image1} alt="imagen 1" />
                </div>
                <div className='mx-auto'>
                    <img src={image2} alt="imagen 2" />
                </div>
                <div className='mx-auto'>
                    <img src={image3} alt="imagen 3" />
                </div>
                <div className='mx-auto'>
                    <img src={image4} alt="imagen 4" />
                </div>
                <div className='mx-auto'>
                    <img src={image5} alt="imagen 5" />
                </div>
                <div className='mx-auto'>
                    <img src={image6} alt="imagen 6" />
                </div>

            </div>



        </div>
    )
}

export default Projects