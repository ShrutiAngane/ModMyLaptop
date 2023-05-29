import React,{useContext, useRef, useState} from 'react'
import logo from '../assets/logonew.png'
import { navlinks } from '../constants/navbar'
import { NavLink } from 'react-router-dom'
import { BsFilterRight,BsXLg} from "react-icons/bs";
import { Link } from 'react-scroll';
import { toggleContext } from '../App';



const Navbar = () => {
    const[navpos,setNavPos]=useState(false)
    const {toggle,handleToggle}=useContext(toggleContext)
    const nav=useRef(null)
    document.body.style.zIndex='0'
    function handleNavClick(data){
        data.id!='1'?setNavPos(true):setNavPos(false);
        handleToggle()
    }
  return (
    <div>
        <nav className={`flex flex-row-reverse ${navpos?'':'fixed'} md:flex md:flex-row w-[100%] pl-[1.5em] pr-[1.5em] pt-3 pb-3 justify-between items-center bg-[#15273C] z-10`}>
            <div>
                <img src={logo} alt='modmylaptop' className='w-[50px] z-10'></img>
            </div>
            <div className='md:hidden hover:cursor-pointer z-20 ' onClick={()=>handleToggle()}>
                {toggle?<BsXLg size={40} color={{color:'black'}}/>:<BsFilterRight size={50} style={{color:'white'}}/>}
            </div>
            <ul className={`hidden md:flex md:items-center gap-4 lg:gap-8`}>
                {navlinks.map((element)=>{
                    return typeof(element.path)=='string'?<NavLink to={element.path} className='text-[#FFFFFF]  font-semibold md:text-[1rem] lg:text-[1.2rem] linkwhite' key={element.id} onClick={()=>element.id!='1'?setNavPos(true):setNavPos(false)}>{element.text}</NavLink>:
                    <Link to={element.path[0].id} smooth={true} offset={-130} duration={1000} className='text-[#FFFFFF]  font-semibold md:text-[1rem] lg:text-[1.2rem] linkwhite hover:cursor-pointer' key={element.id}>{element.text}</Link>


                }) }    
            </ul>
            <div ref={nav} className={`${toggle?'navmenu active':'navmenu'}  flex flex-col justify-center items-center absolute top-0 z-10 h-[100vh] w-[50%] sm:w-[100%] left-0 bg-slate-200`}>
                    <ul className='flex flex-col items-start gap-10'>
                        {navlinks.map((element)=>{
                            return <div className='flex items-center gap-3' key={element.id}>
                                    <span>{<element.icon/>}</span>
                                    {typeof(element.path)=='string'?<NavLink to={element.path} className='text-[#15273C] font-semibold text-[1rem] xs:text-[1.2rem] linkblue' onClick={()=>handleNavClick(element)}>{element.text}</NavLink>:
                                    <Link to={element.path[0].id} smooth={true} offset={-130} duration={1000} className='text-[#15273C] font-semibold text-[1rem] xs:text-[1.2rem] linkblue hover:cursor-pointer' onClick={handleToggle}>{element.text}</Link>
                                }
                                </div>    
                })}
                    </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
