import React from 'react'
import './Moonlaunch.css'
import polygon1 from '../images/Moon Launch/Polygon 1.png'
import polygon2 from '../images/Moon Launch/Polygon 2.png'
import polygon3 from '../images/Moon Launch/Polygon 3.png'
import polygon4 from '../images/Moon Launch/Polygon 4.png'
import polygon5 from '../images/Moon Launch/Polygon 5.png'
import polygon6 from '../images/Moon Launch/Polygon 6.png'

const Moonlaunch = () => {
    return (
        <>
            <h2 className='text-center font-poppins text-7xl text-blue-900 mb-10 font-bold'>Moon Launch</h2>
            <div className='hexagon-gallery'>
                <div class="hex"></div>
                <div class="hex"><img src={polygon1} alt="" /></div>
                <div class="hex"></div>
                <div class="hex"></div>
                <div class="hex"><img src={polygon2} alt="" /></div>
                <div class="hex"><img src={polygon3} alt="" /></div>
                <div class="hex"></div>
                <div class="hex"><img src={polygon4} alt="" /></div>
                <div class="hex"><img src={polygon5} alt="" /></div>
                <div class="hex"><img src={polygon6} alt="" /></div>
            </div>
        </>
    )
}

export default Moonlaunch
