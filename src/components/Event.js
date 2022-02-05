import React from 'react'
import rocket from '../images/Home/rocket-img.png'

const Event = () => {
    return (
        <div id='event' className='relative mt-28 mb-60'>
            <div className='bg-space2'>
                <div className='relative flex justify-center items-center'>
                    <img className='absolute left-5 p-8 w-40 h-40' src={rocket} alt="" />
                    <h2 className='text-white pt-10 font-righteous text-center text-7xl border-b-2 pb-4'>Our Work</h2>
                </div>
            </div>
            <svg className='absolute top-12 -z-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4E1A59" fillOpacity="1" d="M0,128L60,128C120,128,240,128,360,144C480,160,600,192,720,208C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Event
