import React from 'react'
import img1 from '../images/Orbiters/img-1.png'
import img2 from '../images/Orbiters/img-2.png'
import img3 from '../images/Orbiters/img-3.png'

const Orbiter = () => {
    return (
        <div className='h-full mb-16'>
            <h2 className='text-center font-poppins text-7xl text-blue-900 mt-40 mb-20'>Our Orbiters</h2>
            <div className='flex space-x-5 justify-around '>
                <img className='h-52 w-52' src={img1} alt="" />
                <img className='h-52 w-52' src={img2} alt="" />
                <img className='h-52 w-52' src={img3} alt="" />
            </div>
        </div>
    )
}

export default Orbiter
