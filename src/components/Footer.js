import React from 'react'
import img from '../images/Footer/img.png'

const Footer = () => {
    return (

        <>
            <div className='h-full bg-space2 relative'>
                <svg className='absolute bottom-48 -z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#4E1A59" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div className='bottom-0 flex justify-around'>
                    <div className='flex justify-center items-center flex-col'>
                        <h2 className='text-7xl font-righteous text-white'>To Infinity and </h2>
                        <span className='text-7xl font-righteous text-white'>Beyond!</span>
                    </div>
                    <div className='flex flex-col justify-center items-end p-10'>
                        <div className='mb-6'>
                            <h4 className='text-white text-7xl font-righteous'>Mail Us</h4>
                            <p className='font-poppins text-white text-2xl text-center'>ZBC@space.com</p>
                        </div>
                        <div className='flex space-x-2'>
                            <img
                                className='h-10 w-10 rounded-full'
                                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                                alt="" />
                            <img
                                className='h-10 w-10 rounded-full'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                                alt="" />
                            <img
                                className='h-10 w-10 rounded-full'
                                src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
                                alt="" />
                            <img
                                className='h-10 w-10 rounded-full'
                                src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
                                alt="" />
                            <img
                                className='h-10 w-10 rounded-full'
                                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
                                alt="" />
                        </div>
                    </div>
                </div>
                <a href="#home"><img className='h-20 w-20 absolute bottom-36 z-50 right-16 drop-shadow-lg' src={img} alt="" /></a>
            </div>
        </>

    )
}

export default Footer
