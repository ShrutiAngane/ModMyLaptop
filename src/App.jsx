import React, { createContext, useState } from "react"
import {Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { lazy,Suspense } from "react"

const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const WhatWeDo=lazy(()=>import('./pages/WhatWeDo'))
const Footer=lazy(()=>import('./components/Footer'))
const Error=lazy(()=>import('./pages/PageNotFound'))
const Fallback=lazy(()=>import('./components/Fallback'))

export const toggleContext=createContext()

function App() {
  const[toggle,settoggle]=useState(false)
     function handleToggle(){
        settoggle((prev)=>!prev)
    }

  return (
    <main className="w-[100%] h-[100%]">
      <toggleContext.Provider value={{toggle,handleToggle}}>
        <Navbar/>
        <Suspense fallback={<Fallback/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/whatwedo" element={<WhatWeDo/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
          <Footer/>
        </Suspense>
        </toggleContext.Provider>
    </main>
  )
}

export default App
