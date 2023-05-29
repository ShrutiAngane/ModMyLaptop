import React, { createContext, useState } from "react"
import {Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import WhatWeDo from "./pages/WhatWeDo"

export const toggleContext=createContext()

function App() {
  const[toggle,settoggle]=useState(false)
  
     function handleToggle(){
        settoggle((prev)=>!prev)
    }

  return (
    <main className="w-[100%] h-[100vh]">
      <toggleContext.Provider value={{toggle,handleToggle}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/whatwedo" element={<WhatWeDo/>}/>
        </Routes>
        <Footer/>
        </toggleContext.Provider>

    </main>
      
    
  )
}

export default App
