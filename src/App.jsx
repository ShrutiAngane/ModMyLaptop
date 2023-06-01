import React, { createContext, useState } from "react"
import {Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { lazy,Suspense } from "react"

const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const WhatWeDo=lazy(()=>import('./pages/WhatWeDo'))
const Footer=lazy(()=>import('./components/Footer'))

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
        <Suspense fallback={<h2 className='w-[100%] text-center flex justify-center items-center'>Loading...</h2>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/whatwedo" element={<WhatWeDo/>}/>
            </Routes>
          <Footer/>
        </Suspense>
        </toggleContext.Provider>
    </main>
  )
}

export default App
