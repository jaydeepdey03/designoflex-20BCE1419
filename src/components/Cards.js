import React from 'react'
import img1 from '../images/Events/img-1.png'
import img2 from '../images/Events/img-2.png'
import img3 from '../images/Events/img-3.png'
import img4 from '../images/Events/img-4.png'

const Cards = () => {
    return (
        <div className='h-full flex p-16 space-x-6 justify-center items-center'>
            <div className="flex flex-col items-center space-y-8 max-w-sm overflow-hidden shadow-lg p-10 bg-space3 rounded-xl h-full">
                <img className="w-full" src={img1} alt="Sunset in the mountains" />
                <button className='bg-white rounded-full p-2 w-32 font-righteous'>View More</button>
            </div>
            <div className="flex flex-col items-center space-y-8 max-w-sm overflow-hidden shadow-lg p-10 bg-space3 rounded-xl">
                <img className="w-full" src={img2} alt="Sunset in the mountains" />
                <button className='bg-white rounded-full p-2 w-32 font-righteous'>View More</button>
            </div>
            <div className="flex flex-col items-center space-y-8 max-w-sm overflow-hidden shadow-lg p-10 bg-space3 rounded-xl">
                <img className="w-full" src={img3} alt="Sunset in the mountains" />
                <button className='bg-white rounded-full p-2 w-32 font-righteous'>View More</button>
            </div>
            <div className="flex flex-col items-center space-y-8 max-w-sm overflow-hidden shadow-lg p-10 bg-space3 rounded-xl">
                <img className="w-full" src={img4} alt="Sunset in the mountains" />
                <button className='bg-white rounded-full p-2 w-32 font-righteous'>View More</button>
            </div>
        </div>
    )
}

export default Cards
