
// import React from 'react'
// import Product from './components/Product'
// import "./App.css"
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Cart from './components/Cart.js'
// import Dashboard from './components/Dashboard'
// import RootLayout from './components/RootLayout.js'

// const App = () => {
//   const router = createBrowserRouter(createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<Dashboard />}/>
//       <Route path='/cart' element={<Cart />}/>
//     </Route>
//   ))
//   return (
//     <div className="app text-center">
//       {/* <Product /> */}
//       <RouterProvider router={router}/>
//     </div>
//   )
// }

// export default App


import React from 'react'
 import "./App.css"
import Navbar from './componentss/Navbar/Navbar'
import Hero from './componentss/Hero/Hero'
import Skills from './componentss/Skills/Skills'
import Project from './componentss/Project/Project'
import Contact from './componentss/Contact/Contact'
import Footer from './componentss/footer/Footer'
const App = () => {
  return (

    <div className='app' >
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>

  )
}

export default App

