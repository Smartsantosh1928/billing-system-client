import React, { useState,useEffect } from 'react'
import Swal from "sweetalert2";
import {
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon,WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import Products from "./Product"
import api from '../../../utils/Utils';

import { BrowserRouter as Link, Route } from 'react-router-dom';
import UpdateProducts from './UpdateProducts';
 
const TABLE_HEAD = ["Name","BarCode","Stock","LowStock","Price","Edit"];



export function AllProducts() {
  
  const color=["bg-blue-400","bg-orange-400","bg-gray-300","bg-red-200","bg-green-300","bg-purple-300"] 
  const [dataa,setData]=useState([]);
  const [pages, setPages] = useState({});
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false)
  const [update ,setUpdate] =  useState(false)
  const [editData ,setEditData] =  useState({})



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/products/", { page });
        if (response.data) {
          console.log('====================================');
          console.log(response);
          console.log('====================================');
          setData(response.data.Products);
          setPages({
            totalPages: response.data.totalPages,
            currentPage: response.data.currentPage
          });
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
    setReload(false)
  }, [reload, page, update]);
  


  console.log(dataa);
  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Warning!',
      text: "Are you sure!",
      icon: 'warning',
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    }).then(async (data) => {
      if(data.isConfirmed){
        try{

          const res = await api.delete(`/products/delete/${_id}`)
          if(res.data.success)
          {
            setReload(!reload)
          }
          else
          {
              Swal.fire({
              title: 'Error!',
              text: res.data.msg,
              icon: 'error',
            })
          }
        }
        catch(error)
        {
          console.log(error);
        }
      }
    })
  };
  
  const handleEdit = (_id)=>{
    const edit = dataa.find((obj)=>obj._id===_id)
    setEditData(edit)
    console.log(edit)
    setUpdate(!update)
  }


  return (
    <>
    <Card className="h-full w-full">
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography variant="h5" color="blue-gray">
            Product list
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            See information about all Products
          </Typography>
        </div>
      </div>
    </CardHeader>
    <CardBody className="px-0">
      <table className="w-full min-w-max table-auto text-left">
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
          {dataa.map(
            ({name,description,barcode,stock,lowStock,price,_id}, index) => {
              const isLast = index === dataa.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              const clr=`${color[Math.floor(Math.random()*color.length)] } h-8 w-8 rounded-full flex justify-center items-center text-lg text-black`
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
                          {description}
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
                        {barcode}
                      </Typography>
                    </div>
                  </td>
                  
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {stock}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lowStock}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                      <IconButton onClick={()=>handleDelete(_id)} variant="text">
                        <TrashIcon className="h-4 w-4 text-red-600" />
                      </IconButton>
                        <IconButton onClick={()=>handleEdit(_id)} variant="text">
                          <WrenchScrewdriverIcon className="h-4 w-4 text-green-600" />
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
        Page {pages.currentPage} of {pages.totalPages}
      </Typography>
      <div className="flex gap-2">
        <Button variant="outlined" disabled={page <= 1} onClick={()=>setPage(pages.currentPage>1 ? pages.currentPage-1 :1)} size="sm">
          Previous
        </Button>
        <Button variant="outlined" disabled={page >= pages.totalPages} onClick={()=>setPage(pages.currentPage<pages.totalPages ? pages.currentPage+1 :pages.currentPage)} size="sm">
          Next
        </Button>
      </div>
    </CardFooter>
  </Card>
  {update&&<UpdateProducts setReload={setReload} handleOpen={setUpdate} edit={editData}/>}
    </>
);
}
  

export default AllProducts;
