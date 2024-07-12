import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Industries from './component/pages/Industries'
import International from './component/pages/International'
import Resources from './component/pages/Resources'
import Services from './component/pages/Services'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/industries" element = {<Industries/>} />
        <Route path="/international" element = {<International/>} />
        <Route path="/resources" element = {<Resources/>} />
        <Route path="/services" element = {<Services/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes