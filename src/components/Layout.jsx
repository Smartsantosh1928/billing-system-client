import { Input, Breadcrumbs, Button  } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"

export function Layout({ children }) {

    const navigate = useNavigate()
    const collapse = useSelector((state) => state.collapse.collapse);
    const [ breadcrumbs, setBreadcrumbs ] = useState([])

    const year = new Date().getFullYear()

    const handleLogout = () => {
        localStorage.removeItem("AccessToken")
        localStorage.removeItem("RefreshToken")
        sessionStorage.removeItem("AccessToken")
        sessionStorage.removeItem("RefreshToken")
        navigate("/auth/login")
    }

    useEffect(() => {
        const path = window.location.pathname
        let pathArray = path.split("/")
        pathArray = pathArray.filter((item) => item !== "")
        let prevLink = "";
        pathArray = pathArray.map((item) => {
            prevLink = prevLink + "/" + item
            return{
                link : prevLink,
                path : item.charAt(0).toUpperCase() + item.slice(1)
            }
        })
        setBreadcrumbs(pathArray)
    },[window.location.pathname])

  return (
    <div className={`${collapse ? 'ml-20 ' : 'ml-64 '} px-3 font-pop`} >
        <div className="flex justify-between mb-3" >
            <div className="mt-5">
                <Breadcrumbs separator={<ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />}
                    className="rounded-full border border-white bg-gradient-to-tr from-blue-900 to-blue-800 p-1"
                >
                    {breadcrumbs.map((item) => <Link to={item.link} className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 font-pop" >{item.path}</Link>)}
                </Breadcrumbs>
            </div>
            <div className="flex ">
            <div className='mt-5 flex' >
                <Input label="Search" color="blue" className="font-pop text-xl" icon={<MagnifyingGlassIcon className="w-5 h-5" />} />
            </div>
                <Button color="red" onClick={handleLogout} className="m-3 mt-5 font-pop" >Sign out</Button>
            </div>
        </div>
        {children}
        <div className="flex justify-center items-center mt-5 h-16 bg-white border-t border-gray-200">
            <p className="text-blue-500 text-base">© { year } All rights reserved & Designed with <span className="text-red-500 animate-pulse" >❤</span> By Ziry Technologies</p>
        </div>
    </div>
  )
}

export default Layout