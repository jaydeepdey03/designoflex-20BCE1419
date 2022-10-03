import React from 'react'
import img1 from '../images/Home/img.png'

const Header = () => {
    return (
        <div className=''>
            <div className='bg-space flex space-x-4 justify-around'>
                <div className='flex flex-col justify-center items-center space-y-4 mt-20'>
                    <p className='font-righteous text-white text-7xl font-medium'>NASA</p>
                    <p className='font-righteous text-white text-3xl font-medium'>Space Division</p>
                    <p className='font-righteous text-white text-3xl font-medium'>To Infinity and Beyond</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full font-righteous">Get Started</button>
                </div>
                <img
                    className='h-72 w-72 mt-10'
                    src={img1}
                    alt=""
                />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4E1A59" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,176C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Header
