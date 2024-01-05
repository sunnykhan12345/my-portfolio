import React from 'react'
import "./Hero.css"
import img from "../../assets/image/sana1.jpg.png"
const Hero = () => {
  return (
   <div className='bg-black text-white'>
     <div className=' container'>
      <div className="grid  grid-cols-1 sm:grid-cols-2 items-center">
      {/* image section */}
       <div>
        <div>
            <img src={img} alt='not found ' c/>
        </div>
       </div>
      {/* grid section */}
      <div className='space-y-3'>
        <p className="text-red-500 font-bold"> Hello i' am sana ullah</p>
        <h1 className='text-5xl font-bold'>Web Designer</h1>
        <p>
"Hello, I'm diving into the world of frontend development with a passion for crafting dynamic and responsive user interfaces. Though I'm new to the field, my enthusiasm drives me to explore innovative design solutions. Eager to learn and contribute, I'm excited about the journey ahead and the opportunities to grow as a frontend developer."</p>
        <button className='font-bold uppercase bg-red-600 text-white py-2 px-6 hover:bg-red-600/80 duration-300'>Hire me</button>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Hero
