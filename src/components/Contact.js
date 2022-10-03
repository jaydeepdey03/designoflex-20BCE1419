import React from 'react'

const Contact = () => {
    return (
        <div id='contact'>
            <div className=''>
                <h2 className='font-righteous text-8xl text-space3 p-10'>Get in Touch</h2>
            </div>
            <div className='flex pt-7 pl-36 mb-64 justify-around'>
                <form className='flex flex-col space-y-3 font-poppins mt-16'>
                    <input type="text" placeholder='Enter Name' className='outline-none border-2 border-black rounded p-2' />
                    <input type="text" placeholder='Enter your email address' className='outline-none border-2 border-black rounded p-2' />
                    <textarea className='h-32 w-96 outline-none border-2 border-black rounded overflow-auto p-2' name="text" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    <div className='flex justify-end'>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32 shadow-xl ">Button</button>
                    </div>
                </form>
                <div className=''>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0407049359683!2d80.15123961440038!3d12.84064622121353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1644034532174!5m2!1sen!2sin" width="480" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>

    )
}

export default Contact
