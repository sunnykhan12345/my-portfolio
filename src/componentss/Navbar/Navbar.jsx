


import React from 'react'
import "../Navbar/Navbar.css"
export const NavLinks =[
    {
        id:1,
        name:"HOME",
        link:"/#",
    },
    {
        id:2,
        name:"PROJECTS",
        link:"/#project",
    },
    {
        id:1,
        name:"ABOUT",
        link:"/#about",
    },
    {
        id:3,
        name:"CONTACT",
        link:"/#contact",
    },
];

const Navbar = () => {
 
  return (
    <div className='shadow-md w-full'>
        <div className='container py-2 sm:py-0'>
          <div className='flex justify-between items-center'>
            <div>
                <span className='font-bold text-3xl'>Portfolio</span>
            </div>
            <div className='hidden sm:block'>
              <ul className='flex items-center gap-6'>
                {
                    NavLinks.map(({id, name, link}) =>(
                        <li key={id} className=''>
                            <a href={link}
                             className='inline-block text-lg font-medium no-underline  hover:text-red-500'>{name}</a>
                        </li>
                    ))
                }
              </ul>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Navbar
