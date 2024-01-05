import React from 'react'


const img ="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
const ProjectData = [
  {
    id:1,
    name:"ecommerce shopping website",
    image:img,
    link:"/#"
  },
  {
    id:2,
    name:"todo appliction",
    image:img,
    link:"/#"
  },
  {
    id:3,
    name:"gems stones website",
    image:img,
    link:"/#"
  },
  {
    id:4,
    name:"cround operation ",
    image:img,
    link:"/#"
  },
]
const Project = () => {
  return (
    <>
      <span id='project'></span>
   
    <div className='py-14 bg-black text-white'>
        <div className='container'>
            <header className='flex justify-between items-center mb-8'>
                <div>
                    <h1 className='uppercase text-3xl font-bold'>Featued Projects</h1>
                    <p> below are my projects let's see it </p>
                </div>
                <button className='bg-red-500 text-white py-2 px-6 hover:bg-red-500/80'>View All</button>
            </header>
            {/* card section */}
            <secition>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {/* cards */}
                {
                  ProjectData.map(({id, name, image, link}) =>(
                    <div className=''>
                      <div className='bg-[#1d1d1d] h-[380px] sm:h-[400px]  grid place-items-center p-3 sm:p-6'>
                        <img src={image} alt='img not found ' style={{width:""}} />
                      </div>
                      <div className='pt-4'>
                        <h1 className='text-3xl font-bold space-y-3 capitalize'>{name}</h1>
                        <div>
                          <a href='#' className='text-2xl uppercase no-underline'>Learn More</a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </secition>
        </div>
     
    </div>
    </>
  )
}

export default Project
