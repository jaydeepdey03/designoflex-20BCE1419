import React from 'react'
import rocket from '../images/Home/rocket-img.png'

const Work = () => {
    return (
        <div id='work' className='relative mb-36 mt-1'>
            <div className='h-full bg-space2'>
                <div className='relative flex justify-center items-center'>
                    <img className='absolute left-5 p-8 w-40 h-40' src={rocket} alt="" />
                    <h2 className='text-white pt-10 font-righteous text-center text-7xl border-b-2 pb-4'>Our Work</h2>
                </div>
                <p className='pt-20 ml-40 text-white font-poppins text-2xl mr-40 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maxime enim rem. Ducimus iure et facilis laboriosam nobis officia rerum, illum placeat tenetur esse aut magni deleniti pariatur molestias! Dolores!</p>
            </div>
            <svg className='absolute top-60 -z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4E1A59" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,176C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>

        </div>
    )
}

export default Work
