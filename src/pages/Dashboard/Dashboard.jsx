import React,{ useState, useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { HomeIcon, XMarkIcon, Cog8ToothIcon, UserCircleIcon, DocumentIcon, DocumentPlusIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid"
import { BiCart, BiCartAlt, BiCartAdd, BiUser, BiUserPlus, BiUserCircle } from "react-icons/bi"

function Dashboard() {

  const [ collapse, setCollapse ] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <Card className="w-auto h-screen fixed flex justify-start items-center">
      <div className='flex my-5 justify-evenly items-center w-full'>
          <div className="flex justify-center gap-3 items-center">
            <img onClick={collapse && handleCollapse} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo" className="w-10 h-10 cursor-pointer" />
            {collapse == false && <h1 className="text-2xl font-bold">Billing App</h1>}
          </div>
        {collapse == false && <XMarkIcon onClick={handleCollapse} className='w-8 h-8 hover:text-red-500 cursor-pointer' />}
      </div>
      <Sidebar collapsed={collapse} toggled={true} transitionDuration={700} collapsedWidth='70px' backgroundColor='#fff'>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? '' : '',
                  backgroundColor: active ? '#eecef9' : undefined,
                };
            },
            root: {
              fontSize: '17px',
              fontWeight: 500,
            },
          }}
        >
          {collapse == false && <Typography className='my-5 ml-3 text-brown-500 font-bold'>Dashboard</Typography>}
          <MenuItem icon={<HomeIcon className='w-5 h-5 text-blue-500' />}> Home </MenuItem>
          <SubMenu label="Bills" icon={<DocumentIcon className='w-5 h-5 text-blue-500' />}>
            <MenuItem icon={<DocumentPlusIcon className='w-5 h-5 text-blue-500' />}> New Bill </MenuItem>
            <MenuItem icon={<DocumentDuplicateIcon className='w-5 h-5 text-blue-500' />}> All Bills </MenuItem>
          </SubMenu>
          <SubMenu label="Products" icon={<BiCart className='w-5 h-5 text-blue-500' />}>
            <MenuItem icon={<BiCartAdd className='w-5 h-5 text-blue-500' />}> New Product </MenuItem>
            <MenuItem icon={<BiCartAlt className='w-5 h-5 text-blue-500' />}> All Products </MenuItem>
          </SubMenu>
          <SubMenu label="Users" icon={<BiUserCircle className='w-5 h-5 text-blue-500' />}>
            <MenuItem icon={<BiUserPlus className='w-5 h-5 text-blue-500' />}> New User </MenuItem>
            <MenuItem icon={<BiUser className='w-5 h-5 text-blue-500' />}> All Users </MenuItem>
          </SubMenu>
          {collapse == false && <Typography className='my-5 ml-3 text-brown-500 font-bold'>General</Typography>}
          <MenuItem icon={<UserCircleIcon className='w-5 h-5 text-blue-500' />}> Profile </MenuItem>
          <MenuItem icon={<Cog8ToothIcon className='w-5 h-5 text-blue-500' />}> Settings </MenuItem>
        </Menu>
      </Sidebar>
    </Card>
  )
}

export default Dashboard 