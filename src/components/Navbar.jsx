import React,{useRef, useState} from 'react'
import logo from '../assets/mmlogo.png'
import { navlinks } from '../constants/navbar'
import { NavLink } from 'react-router-dom'
import { BsFilterRight,BsXLg} from "react-icons/bs";



const Navbar = () => {
    const[toggle,settoggle]=useState(false)
    const nav=useRef(null)
    document.body.style.zIndex='0'
    function handleToggle(){
        settoggle((prev)=>!prev)
        
    }
  return (
    <div>
        <nav className='flex flex-row-reverse md:flex md:flex-row w-[100%] pl-[1.5em] pr-[1.5em] justify-between items-center bg-[#15273C] z-10'>
            <div>
                <img src={logo} alt='modmylaptop' className='w-[115px]'></img>
            </div>
            <div className='md:hidden hover:cursor-pointer z-20 ' onClick={handleToggle}>
                {toggle?<BsXLg size={40} color={{color:'black'}}/>:<BsFilterRight size={50} style={{color:'white'}}/>}
            </div>
            <ul className={`hidden md:flex md:items-center gap-8`}>
                {navlinks.map((element)=>{
                    return <NavLink to={element.path} className='text-[#FFFFFF]  font-semibold text-[1.2rem] linkwhite' key={element.id}>{element.text}</NavLink>

                }) }    
            </ul>
            <div ref={nav} className={`${toggle?'navmenu active':'navmenu'}  flex flex-col absolute top-0 z-10 h-[100%] w-[50%] left-0 pl-[10%] pt-[30%] bg-slate-200`}>
                    <ul className='flex flex-col items-start gap-10'>
                        {navlinks.map((element)=>{
                            return <div className='flex items-center gap-3' key={element.id}>
                                    <span>{<element.icon/>}</span>
                                    <NavLink to={element.path} className='text-[#15273C] font-semibold text-[1.2rem] linkblue' key={element.id} onClick={handleToggle}>{element.text}</NavLink>
                                </div>    
                })}
                    </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
