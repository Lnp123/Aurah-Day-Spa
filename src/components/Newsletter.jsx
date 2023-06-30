import React from 'react'

const Newsletter = () => {
  return (
    <div name='Newsletter' className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className="lg:col-span-2">
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We have 10% discount everytime you avail in our products</h1>
                <p>Sign up Now!</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full  text-black rounded-md' type="email" placeholder='Enter your Email' />
                    <button className='bg-[grey] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>'Click'</button>
                </div>
                <p>Guarding your privacy, our heartfelt care for your account's sanctuary. </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter