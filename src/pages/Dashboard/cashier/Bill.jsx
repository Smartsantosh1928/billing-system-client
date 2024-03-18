import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from 'react'
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import api from '../../../utils/Utils';



const TABLE_HEAD = ["SNO","ProductName","Quantity", "UnitePrice", "TotalPrice", "Delete"];
 

  export function Bill() {


  const [formData, setFormData] = useState({pname:''});
  const [details,setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [price,setPrice]=useState(" ")
  const [myData,setData]= useState([{}])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
 useEffect(()=>{


  const fetchData = async () => {
    try {
      const response = await api.get("/products/allproducts");
      if (response.data) {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        setDetails(response.data.products);
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
},[]);
 
//   fetch('http://localhost:3000/products/allproducts',{
//     method: "GET"
//   })
//   .then(res=>res.json())
//   .then(data=>setDetails(data.Products))
//   .catch(err=>console.log(err))
//  },[])

 const handleSearch = (event) => {
  setSearchTerm(event.target.value);

  const filtered = details.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredProducts(filtered);

  setShowDropdown(searchTerm !== '' && filtered.length > 0);

 }

const filteredProducts = details.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductSelection = (product) => {
    setSearchTerm(product.name);
    var input = document.querySelector('#price');
    input.value=product.price
    setShowDropdown(false); 
    
  };

  const handleClickOutside = () => {
    setShowDropdown(!showDropdown); 
  };
  const handleClickInside=()=>{
    setShowDropdown(!showDropdown); 
  }
  
  let data = []
  const addData=()=>{
    var name=document.querySelector("#pname");
    var quantity=document.querySelector("#quantity");
    var price=document.querySelector("#price");

    const quantityValue = parseFloat(quantity.value);
    const priceValue = parseFloat(price.value);
    const totalPrice=quantityValue * priceValue;
    console.log(quantityValue);

    if (!isNaN(quantityValue) && !isNaN(priceValue)) {
      const newData = {
        pname: name.value,
        quantity: isNaN(quantityValue)?1: quantityValue,
        price: priceValue,
        tprice: quantityValue * priceValue,
      };
      data.push(newData);
      setData(newData)
    }
    console.log(data); 
    console.log(myData); 
  }


  return (
    <>
    
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center items-center w-full flex-col" >
          <Typography variant="h4" color="blue">
            Bill!!!
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter Bill details to get the bill.
          </Typography>
        </div>
    <div className="flex justify-center">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 gap" autoComplete="off">
        <div className="mb-1 flex flex-col gap-6"  >
          <Input name="pname" id="pname" label="Product Name"  onFocus={handleClickOutside}  value={searchTerm} onChange={handleSearch} color="blue" />
        </div>

        { showDropdown && (
          <ul onClick={handleClickOutside} onBlur={handleClickInside} className="absolute bg-white border border-gray-200 px-3 rounded-md shadow-lg w-96 z-10">
            {filteredProducts.map((product) => (
              <li
              key={product.id}
              onClick={() => handleProductSelection(product)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {product.name}
                <hr className="border-gray-300"/>
              </li>
            ))}
          </ul>
        )}
        <div className="mb-1 flex flex-col gap-1">
        <Input name="quantity" id="quantity" label="Quantity" onChange={handleChange} color="blue" />
        <Input name="price" id="price" label="Price"   onChange={handleChange} color="blue" />
        </div>
      
        <div className="flex justify-center items-center" >
        <Button className="mt-6 w-80" color="black" onClick={addData} fullWidth>
            Add
        </Button>
      </div>
      </form>
    </div>
    </Card>

    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none"> 
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(
              (
                {
                  pname,
                  quantity,
                  price,
                  tprice
                },
                index,
              ) => {
                const isLast = true;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                       
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {pname}
                        </Typography>
                      </div>
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
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {quantity}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={tprice}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      
    </Card>
    </>
  )
} 
export default Bill