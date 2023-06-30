import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div name="Hero" className="text-white">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='text-[lightgray] font-bond p-1'>The Wellness Center</h1>
        <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>AURAH DAY SPA</p>
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl pb-5 font-bold'>Relax, Refresh, Recharge.</p>
            <Typed strings={['MASSAGE', 'FOOTSPA', 'MANICURE', 'COME AT AURAH DAY SPA']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <button className='bg-[white] hover:bg-slate-600 active:bg-slate-700 w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Inquire Now!</button>
        </div>
    </div>
  )
}

export default Hero