import React from 'react'
import zbclogo from '../images/About/zbc-logo.png'
import space from '../images/About/img.png'

const Body = () => {
    return (
        <div id='about' className='h-full bg-space1 text-white pt-20 pl-20 pr-20 flex flex-col space-y-10 pb-20'>
            <div className='flex justify-around'>
                <img 
                className='h-48 w-48 mt-16 ml-16'
                src={zbclogo} 
                alt="" 
                />
                <div className='text-right p-8 flex flex-col justify-center'>
                    <h2 className='font-righteous text-5xl p-3 mb-5'>About ZBC</h2>
                    <p className='font-poppins ml-16 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, et quisquam. Molestias non repellendus, quas commodi asperiores tempore dolore unde nesciunt accusantium! Tempora, ex corrupti! Earum deleniti molestias officia eligendi explicabo eveniet sint ea expedita delectus exercitationem aliquid veniam maxime tempore totam, excepturi iusto laudantium quae aut eaque? Vero, omnis. </p>
                </div>
            </div>
            <div className='flex'>
                <div className='text-left p-8 flex flex-col justify-center'>
                    <h2 className='font-righteous text-5xl mb-5'>About Space Division</h2>
                    <p className='font-poppins mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nulla eaque tempore. Eveniet quaerat culpa ipsum magni. Dignissimos molestias cum pariatur, placeat vitae, odio facilis architecto eum praesentium voluptatum labore perferendis tempora mollitia quibusdam accusantium nostrum numquam quia laudantium eos similique. Illum quos ad temporibus? Voluptates dolor enim unde earum?</p>
                </div>
                <img 
                className='h-48 w-48 ml-32'
                src={space} 
                alt="" 
                />
            </div>
        </div>
    )
}

export default Body
