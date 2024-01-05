import React from 'react'

const Contact = () => {
  return (
    <>
    <span id='contact'></span>
    <div className='bg-black py-14'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 py-8  px-6 bg-[#1d1d1d]'>
        <div className='col-span-2 space-y-3'>
            <h1 className='text-white font-bold '>let's work together </h1>
            <p className='text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit cum veniam?
                </p>
        </div>
        <div className='grid place-items-center'>
            <a href=''
             className='bg-red-500 text-white no-underline py-2 px-6 font-semibold uppercase hover:bg-red-500/80 duration-200'>Contact</a>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
