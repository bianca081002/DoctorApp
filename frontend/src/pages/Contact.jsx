import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-orange-500'>
        <p>CONTACT <span className='text-orange-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-orange-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Piața Victoriei 2<br /> Timișoara, Romania</p>
          <p className=' text-gray-500'>Tel: +40735581244<br /> Email: b.maier15@icloud.com</p>
          
        </div>
      </div>

    </div>
  )
}

export default Contact
