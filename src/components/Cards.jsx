import React from 'react'
import Bronze from '../assests/bronze.png'
import Silver from '../assests/silver.png'
import Gold from '../assests/gold.png'


const Cards = () => {
  return (
    <div name='Cards' class="w-full py-10 px-4 bg-white">
  <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <img class="w-20 mx-auto bg-white" src={Bronze} alt="" />
      <h2 class="text-2xl font-bold text-center py-8">Bronze Membership</h2>
      <p class="text-center text-4xl font-bold">$100</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
      </div>
      <button class="w-full bg-[#CD7F32] mt-4 py-2 text-black rounded-md font-medium">Become A Member</button>
      
    </div>
    <div class="w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <img class="w-20 mx-auto bg-white" src={Silver} alt="" />
      <h2 class="text-2xl font-bold text-center py-8">Silver Membership</h2>
      <p class="text-center text-4xl font-bold">$500</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
      </div>
      <button class="w-full bg-[silver] mt-4 py-2 text-black rounded-md font-medium">Become A Member</button>
      
    </div>
    <div class="w-full md:w-auto shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <img class="w-20 mx-auto bg-white" src={Gold} alt="" />
      <h2 class="text-2xl font-bold text-center py-8">Gold Membership</h2>
      <p class="text-center text-4xl font-bold">$1000</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
        <p className='py-2 border-b mx-8'>ha</p>
      </div>
      <button class="w-full bg-[gold] mt-4 py-2 text-black rounded-md font-medium">Become A Member</button>
    </div>
  </div>
</div>

  )
}

export default Cards