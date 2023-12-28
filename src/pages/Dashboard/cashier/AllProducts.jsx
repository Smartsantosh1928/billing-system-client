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
 
const TABLE_HEAD = ["Name","BarCode","Stock","LowStock","Price","Edit"];



export function AllProducts() {
  
  const color=["bg-blue-400","bg-orange-400","bg-gray-300","bg-red-200","bg-green-300","bg-purple-300"] 
  const [dataa,setData]=useState([]);
  const [pages, setPages] = useState({});
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3000/products/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },body:JSON.stringify({page})
    }).then(res => res.json())
    .then(data =>{
        setData(data.Products)
        setPages({
          totalPages: data.totalPages,
          currentPage: data.currentPage
        })
      })
    .then(console.log(dataa))
    .catch(err => {
      Swal.fire({
        title: 'Error!',
          text: err,
          icon: 'error',
      })
    })},[reload,page]);
    console.log(dataa);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Warning!',
      text: "Are you sure!",
      icon: 'warning',
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true
    }).then((data) => {
      console.log(data);
      if(data.isConfirmed){
        try{
          fetch(`http://localhost:3000/products/delete/${_id}`, {
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
        console.error('Error deleting record:', error);
        }
        catch(error)
        {
          console.log(error);
        }
      }
    })
  };
  
  return (
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
      {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
      </div> */}
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
              
              console.log(color[Math.floor(Math.random()*color.length)]);
              console.log(_id)
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
                      <IconButton onClick={()=>handleDelete(id)} variant="text">
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
 
);
}
  

export default AllProducts;
