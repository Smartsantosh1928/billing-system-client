import React, { useState,useEffect } from 'react'
import Swal from "sweetalert2";
import api from "../../../utils/Utils"
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {  UserPlusIcon ,TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
const TABS = [
  {
    label: "Admins",
    value: "all",
  },
  {
    label: "Cashier",
    value: "monitored",
  },
  
];
 
const TABLE_HEAD = ["Member", "Roles","Date","Edit"];



export function AllUsers() {
  
  const color=["bg-blue-400","bg-orange-400","bg-gray-300","bg-red-200"] 
  const[dataa,setData]=useState([]);
  const [records, setRecords] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(()=>{
    // fetch("http://localhost:3000/user/allusers",{
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // }).then(res => res.json())
    // .then(data =>setData(data.User))
    // .then(console.log(dataa))
    // .catch(err => {
    //   Swal.fire({
    //     title: 'Error!',
    //       text: err,
    //       icon: 'error',
    //   })
    // })

    const fetchData = async () => {
      try {
        const response = await api.post("/user/allusers");
        if (response.data) {
          console.log('====================================');
          console.log(response.data.User);
          console.log('====================================');
          setData(response.data.User)
        } else {
          throw new Error(response.data.msg);
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
        });
      }
    };
  
    fetchData();
  },[reload]);

  const handleDelete =  (email) => {
    Swal.fire({
      title: 'Warning!',
      text: "Are you sure!",
      icon: 'warning',
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    }).then((data) => {
      if(data.isConfirmed){
        fetch(`http://localhost:3000/user/allusers/${email}`, {
          method: 'DELETE'
        }).then(res=>{
            res.json()
            setReload(!reload)
          }).catch(err => {
          Swal.fire({
            title: 'Error!',
              text: err,
              icon: 'error',
          })
        })
        setRecords(records.filter((record) => record.email !== email));
        console.log(records);
        console.error('Error deleting record:', error);
      }
    })
  };
  
  return (
    <Card className="h-full w-full">
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Members list
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all members
          </Typography>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add company
            </Button>
          </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Tabs value="all" className="w-full md:w-max">
          <TabsHeader>
            {TABS?.map(({ label, value }) => (
              <Tab key={value} value={value}>
                &nbsp;&nbsp;{label}&nbsp;&nbsp;
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
        <div className="w-full md:w-72">
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </CardHeader>
    <CardBody className="overflow-scroll px-0">
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  {head}{" "}
                  {index !== TABLE_HEAD.length - 1 && (
                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                  )}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataa?.map(
            ({name,email,role,createdAt}, index) => {
              const isLast = index === dataa.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              const clr=`${color[Math.floor(Math.random()*color.length)] } h-8 w-8 rounded-full flex justify-center items-center text-lg text-black`
              
              console.log(color[Math.floor(Math.random()*color.length)]);
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <span className={clr}>
                        {name[0]?.toUpperCase()}
                      </span>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {role}
                      </Typography>
                    </div>
                  </td>
                  
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                      <IconButton onClick={()=>handleDelete(email)} variant="text">
                        <TrashIcon className="h-4 w-4 text-red-600" />
                      </IconButton>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </CardBody>
    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
      <Typography variant="small" color="blue-gray" className="font-normal">
        Page 1 of 10
      </Typography>
      <div className="flex gap-2">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </div>
    </CardFooter>
  </Card>
 
);
}
  

export default AllUsers;
