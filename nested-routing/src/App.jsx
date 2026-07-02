import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Deatails from './pages/Deatails'
import Return from './components/Return'

const App = () => {
  return (
    <div>
      <Nav />
      <Footer />
      <Return />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<Deatails />} /> {/* Dynamic Routing */}
        <Route path='/product' element={<Product />} >
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route> {/* Nested Routing */}
        
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
