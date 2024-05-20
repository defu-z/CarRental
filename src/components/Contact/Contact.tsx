import React from 'react'

const Contact = () => {
  return (
    <div data-aos="zoom-in" className='dark:bg-black dark:text-white
        py-14'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6'>
                <div className='col-span-2 space-y-3 '>
                    <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                        Join us at PorschePass, where luxury meets affordability.
                    </h1>
                    <p className='text-gray-400'>Our commitment to competitive pricing and top-notch service ensures every ride is an unforgettable experience. Drive with us and elevate your journey with the legendary Porsche lineup. </p>
                </div>
                <div className=' palce-items-center'>
                    <a href = "#footer" 
                    className='inline-block font-semibold py-2 px-6 
                    bg-primary text-white rounded-lg traking-wider uppercase hover:bg-primary/80 duration-300'>
                        Contact Us
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contact