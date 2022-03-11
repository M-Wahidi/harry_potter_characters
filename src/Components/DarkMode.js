import React,{useContext, useEffect, useState} from 'react'
import { MdDarkMode,MdLightMode } from "react-icons/md";
import {themeContext} from '../Helper/Context'
import '../index.css'


export default function DarkMode() {

    const{mode,setMode} = useContext(themeContext)

    const handleToggleMode = () =>{
        setMode(prev => prev === 'light' ? 'dark' : 'light')
    }

    localStorage.setItem('theme',mode)

  return (
    <div className='absolute text-4xl right-4 top-4 cursor-pointer select-none' onClick={handleToggleMode}>
        {mode === 'light' ?  <MdDarkMode  className='modeDown'  /> : <MdLightMode  className='modeDown'  />}

    </div>
  )
}


