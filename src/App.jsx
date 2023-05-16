import React from "react"
import {Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {

  return (
    <main className="w-[100%] h-[100vh]">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>

    </main>
      
    
  )
}

export default App
