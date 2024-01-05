import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const SkillsData = [
    {
        id:1,
        name:"UI Design ",
        icon:<i class="bi bi-camera-fill text-red-500 text-3xl hover:text-white duration-500" ></i>,
        link:"/#",
        description:
        "Crafting seamless user experiences through intuitive interfaces is my passion. As a UI designer, I blend creativity with functionality to elevate digital interactions and bring designs to life.",
    },
    {
        
        name:"Product Design  ",
        icon:<i class="bi bi-kanban text-red-500 text-3xl hover:text-white duration-500"></i>,
        link:"/#",
        description:
        "Crafting seamless user experiences through intuitive interfaces is my passion. As a UI designer, I blend creativity with functionality to elevate digital interactions and bring designs to life.",
    },
    {
       
        name:"Branding",
        icon:<i class="bi bi-pencil-square text-red-500 text-3xl hover:text-white duration-500"></i>,
        link:"/#",
        description:
        "Crafting seamless user experiences through intuitive interfaces is my passion. As a UI designer, I blend creativity with functionality to elevate digital interactions and bring designs to life.",
    },
]
const Skills = () => {
  return (
    <>
     <span id='about'></span>
   
    <div className='skills bg-black text-white py-14'>
       <div className='container'>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
               SkillsData.map((skills) =>(
                <div className='group bg-[#1d1d1d] p-3 hover:bg-red-500 text-white duration-300'>
                    <div className='hover:text-white'>{skills.icon}</div>
                    <p className='text-2xl font-bold'>{skills.name}</p>
                    <p >{skills.name}</p>
                    <a className="font-semibold text-lg inline-block text-white no-underline py-3 hover:text-red-200" href={skills.link}>Learn More</a>

                </div>
               ))
            }
         </div>
       </div>
    </div>
    </>
  )
}

export default Skills
