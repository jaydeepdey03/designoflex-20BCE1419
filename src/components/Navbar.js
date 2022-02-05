import React from 'react'
import img1 from '../images/Home/rocket-img.png'

const Navbar = () => {
    return (
        <div id='home' className='flex justify-between p-5 bg-space'>
            <img
                className='h-20 w-20'
                src={img1}
                alt=""
            />
            <ul className='flex jusify-around font-righteous text-white'>
                <li className='p-6'><a href="#home">Home</a></li>
                <li className='p-6'><a href="#about">About Us</a></li>
                <li className='p-6'><a href="#work">Our work</a></li>
                <li className='p-6'><a href="#event">Our Events</a></li>
                <li className='p-6'><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Navbar
