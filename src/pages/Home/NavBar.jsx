import React, { useState } from 'react'
import NewLogin from '../Auth/NewLogin'
import NewSignin from '../Auth/NewSignin'
import {Button}from '@material-tailwind/react'


const NavBar = () => {
    const button = 'h-10 w-24 bg-blue-300 rounded-3xl text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'

    const [login,setLogin]=useState(false);
    const [signin,setSignin]=useState(false);

    const handleSignin=()=>{
        setSignin(!signin)
    }
    const handleLogin=()=>{
        setLogin(!login)
    }
    return (
    <>
    <div className=' w-full h-[100px] flex '>
        <div className='flex w-full items-center p-5 gap-2'>
           <span className=' flex  items-center justify-around  w-12 h-12 rounded-full font-bold  text-xl  bg-blue-300'>Z</span>
           <h1 className='text-xl font-extrabold'>Ziry Tech</h1>
        </div>
        <div className='flex w-full justify-end items-center gap-2  pr-5'> 
            {/* <button onClick={handleSignin} className={button}>Signin</button>
            <button className={button}>Signup</button> */}
            <Button variant="outlined" onClick={handleSignin} >Signup</Button>
            <Button variant="gradient" onClick={handleLogin} className={""}>Signin</Button>
        </div>
    </div>
    {signin&&<NewSignin handleOpen={handleSignin} />}
    {login&&<NewLogin handleOpen={handleLogin} />}
    </>
  )
}

export default NavBar
