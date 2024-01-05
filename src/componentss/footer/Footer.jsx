import React from 'react'
import { NavLinks } from '../Navbar/Navbar'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='bg-black text-white py-14'>
      <nav className='container'>
        <ul className='flex justify-center items-center gap-6'>
            {
              NavLinks.map(({id,name,link}) =>(
                <li key={id}>
                    <a href={link} className='text-white no-underline'>{name}</a>
                </li>
              ))
            }
        </ul>
      </nav>

      {/* footer icons */}
      <section className='bg-[#1d1d1d] container'>
        <div className='mt-10 p-6 flex items-center justify-between gap-6'>
            <h1>Poertfolio</h1>
            <div className='flex gap-6'>
                <i class="bi bi-facebook text-2xl text-white/400 curseor-pointer hover:bg-danger-500 "></i>
                <i class="bi bi-instagram text-2xl text-white/400 curseor-pointer hover:bg-danger-500 "></i>
                <i class="bi bi-whatsapp text-2xl text-white/400 curseor-pointer hover:bg-danger-500 "></i>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
