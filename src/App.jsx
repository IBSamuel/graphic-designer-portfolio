import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Aboutme from './components/Aboutme';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Advert from './components/categories/Advert';
import All from './components/categories/All';
import Movie from './components/categories/Movie';
import Product from './components/categories/Product';
import Events from './components/categories/Events';
import Contact from './components/Contact';
import Hire from './components/Hire';

const App = () => {
  return (
    <>
     <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/aboutme" element={<Aboutme />} />
        <Route  path="/advert" element={<Advert/>} />
        <Route  path="/all" element={<All/>} />
        <Route  path="/event" element={<Events/>} />
        <Route  path="/movie" element={<Movie/>} />
        <Route  path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/hire" element={<Hire/>}/>
    </Routes>
    </>
  )
}

export default App