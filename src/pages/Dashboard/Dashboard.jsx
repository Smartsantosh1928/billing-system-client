import React,{ useState, useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import { Card, Typography } from '@material-tailwind/react'
import { XMarkIcon } from "@heroicons/react/24/solid"
import routes from "../../routes"
import { getAccessToken } from "../../utils/Utils"

export function Dashboard() {

  const [ collapse, setCollapse ] = useState(false)
  const [ role, setRole ] = useState("")
  const [ userRoutes, setUserRoutes ] = useState([])
  const navigate = useNavigate()

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  useEffect(() => {
    fetch("http://localhost:3000/auth/verifyUser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("AccessToken")
      }
    }).then(res => {
      if(res.status == 403){
        getAccessToken()
      }else{
        return res.json()
      }
    })
    .then(data => {
      if(!data.success){
        navigate("/auth/login")
      }else{
        setRole(data.role)
      }
    }).catch(err => navigate("/auth/login"))
  },[])

  useEffect(() => {
    setUserRoutes(routes[role])
  },[role])

  return (
    <>
    <Card className="w-auto h-screen fixed flex justify-start items-center overflow-y-auto">
      <div className='flex my-5 justify-evenly items-center w-full'>
          <div className="flex justify-center gap-3 items-center">
            <img onClick={collapse ? handleCollapse : () => {}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="logo" className="w-10 h-10 cursor-pointer" />
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
          {
            userRoutes && userRoutes.map((route,index) => {
              if(typeof route == "string"){
                return (
                    <>
                      {collapse == false && <Typography key={index} className='my-5 ml-3 text-brown-500 font-bold'>{route}</Typography>}
                    </>
                  )
              }else{
                return(
                  Array.isArray(route) ?
                  <SubMenu key={index} label={route[0].name} icon={route[0].icon}>
                    {
                      route.slice(1).map((subRoute,index) => {
                        return(
                          <MenuItem key={index} icon={subRoute.icon} component={<Link to={"/dashboard"+subRoute.path}/>}>
                            {subRoute.name}
                          </MenuItem>
                        )
                      })
                    }
                  </SubMenu> :
                  <MenuItem key={index} icon={route.icon} component={<Link to={"/dashboard"+route.path}/>} >
                    {route.name}
                  </MenuItem>
                )
              }
            })
          }
        </Menu>
      </Sidebar>
    </Card>
    <Routes>
    {userRoutes && userRoutes.map((route, index) => {
      if (Array.isArray(route)) {
        return route.slice(1).map((subRoute, subIndex) => (
          <Route key={subIndex} path={subRoute.path} element={subRoute.component} />
        ));
      } else {
        return <Route key={index} path={route.path} element={route.component} />;
      }
    })}
  </Routes>
  
  </>
  )
}

export default Dashboard 