import img1 from '../images/Projects Slider/img-1.png'
import img2 from '../images/Projects Slider/img-2.png'
import img3 from '../images/Projects Slider/img-3.png'
import img4 from '../images/Projects Slider/img-4.png'
import img5 from '../images/Projects Slider/img-5.png'
import img6 from '../images/Projects Slider/img-6.png'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './project.css'

const Project = () => {

    const slider = React.useRef(null);

    const ArrowLeft = (props) => (
        <button
            {...props}
            className={'prev-1'} />
    );
    const ArrowRight = (props) => (
        <button
            {...props}
            className={'next-1'} />
    );

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowLeft />,
        prevArrow: <ArrowRight />
    };
    return (
        <>
            <div className='h-full'>
                <h2 className='text-center font-poppins text-7xl text-blue-900 mt-40 '>Other Projects</h2>
            </div>
            <div className='pl-32 pr-32 relative'>
                <div className='flex justify-between items-center absolute right-20 top-32'>
                    <button className='next' onClick={() => slider?.current?.slickNext()}></button>
                </div>
                <div className=''>
                    <button className='prev top-32' onClick={() => slider?.current?.slickPrev()}></button>
                </div>
                <Slider ref={slider} {...settings}>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img1} alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img2} alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img3} alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img4} alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img5} alt="" /></h3>
                    </div>
                    <div>
                        <h3><img className='p-6 rounded-full h-72 w-72' src={img6} alt="" /></h3>
                    </div>

                </Slider>

            </div>
        </>
    )
}

export default Project
