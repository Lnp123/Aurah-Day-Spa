import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare, 
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='Footer' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <h1 className='w-full text-3xl font-bold text-gray-200'>ABOUT US</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempora?</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
    </div>
  )
}

export default Footer