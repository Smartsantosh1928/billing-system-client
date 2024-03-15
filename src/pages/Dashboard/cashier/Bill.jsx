import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from 'react'
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  CardHeader,
  CardBody,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import api from '../../../utils/Utils';
import Swal from "sweetalert2";




const TABLE_HEAD = ["SNO","ProductName","Quantity", "UnitePrice", "TotalPrice", "Delete"];

let data= [];
  export function Bill() {


  const [formData, setFormData] = useState({pname:'',quantity:'',price:''});
  const [details,setDetails] = useState([]);
  const [customerDetails,setCustomerDetails] = useState({customerName:'',city:'',number:''});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [ validated, setValidated] = useState(false)
  const [items,setItems] = useState([])
  const [ errors, setErrors ] = useState(["","","","","",""])
  const [totalAmount,setPrice] = useState(0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleDetailsChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    });
    console.log(customerDetails);
  };


  const validate = () => {
    let isValid = true; // Assume the form is valid by default
  
    if (customerDetails.customerName) {
      const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      if (!regex.test(customerDetails.customerName)) {
        setErrorHelper(0, "Name is not valid");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(0,"");
        isValid=true
      }
    }
  
    if (customerDetails.city) {
      const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      if (!regex.test(customerDetails.city)) {
        setErrorHelper(1, "City is not valid");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(1,"");
        isValid=true
      }
    }
    if (customerDetails.number) {
      const regex = /^\d+$/;
      if (!regex.test(customerDetails.number)) {
        setErrorHelper(2, "Mobile Number is Only a number");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(2,"");
        isValid=true
      }
    }

    if (formData.pname) {
      const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      if (!regex.test(formData.pname)) {
        setErrorHelper(3, "Product Name is not valid");
        isValid = false; // Set isValid to false if there's an error
      } else {
        isValid=true
        setErrorHelper(3,"");
      }
    }
  
    if (formData.quantity) {
      const regex = /^\d+$/;
      if (!regex.test(formData.quantity)) {
        setErrorHelper(4, "Quantity is Only a number");
        isValid = false; // Set isValid to false if there's an error
      } else {
        isValid=true
        setErrorHelper(4,"");
      }
    }
    if (formData.price) {
      const regex = /^\d+$/;
      if (!regex.test(formData.price)) {
        setErrorHelper(5, "Price is Only a number");
        isValid = false; // Set isValid to false if there's an error
      } else {
        isValid=true
        setErrorHelper(5,"");
      }
    }
  };

  useEffect(validate, [customerDetails,formData])

  function setErrorHelper(index, msg) {
      setErrors(e => {
        const newErrors = [...e];
        newErrors[index] = msg;
        return newErrors;
      });
  }
 
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

  const addData = () => {
    let val = true;
    errors.forEach((err)=>{
      if(err=!"") 
      val=false
      
    })
    if (val) {
      var name = document.querySelector("#pname");
      var quantity = document.querySelector("#quantity");
      var price = document.querySelector("#price");

      const quantityValue = parseFloat(quantity.value);
      const priceValue = parseFloat(price.value);

      if (!isNaN(quantityValue) && !isNaN(priceValue)) {
          const index = data.findIndex(item => item.productName === name.value);
          if (index !== -1) {
              data[index].quantity += quantityValue;
              data[index].totalPrice += quantityValue * priceValue;
          } else {
              const newData = {
                  productName: name.value,
                  quantity: quantityValue,
                  unitPrice: priceValue,
                  totalPrice: quantityValue * priceValue,
              };
              data.push(newData);
          }
      }
      setRefresh(!refresh);
      console.log(data);
    }
    else
    {
      Swal.fire({
        title: 'Error!',
        text: "Check the Input Correctly...!",
        icon: 'error',
      });
    }
};

const handleDelete = (index)=>{
  data.splice(index,1)
  setRefresh(!refresh)
  setPrice(0)
}

useEffect(() => {
  setItems(data);
  let tA = 0;
  data.forEach((item) => {
    tA += item.totalPrice;
  });
  setPrice(tA);
}, [data, refresh]);

const handleSubmit = async (e) => {
  e.preventDefault();
      try {
        const fetchData = async () => {
          try {
            // let imageStr = "";
            // const responseImg = await api.post("files/upload",imagedata)
            // if (responseImg.data.success) {
            //   imageStr = responseImg.data.fileName;
            //   console.log(imageStr);
            // } else {
            //   throw new Error(responseImg.data.msg);
            // }
            const product = { ...customerDetails,items,totalAmount};
            console.log(product);
              const response = await api.post('/bill/new-bill',product);
              if (response.data.success) {
                console.log(response);
                console.log(response.data);
                const inputs = document.querySelectorAll('input')
                inputs.forEach(input=> input.value='')
                Swal.fire({
                  title: 'Success...!',
                  text: response.data.msg,
                  icon: 'success',
                });
                // reset();
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
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      });
    }
};

  return (
    <>
    <div>
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center items-center w-full flex-col" >
          <Typography variant="h4" color="blue">
            Bill!!!
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter Bill details to get the bill.
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-16">
          <div className="flex flex-col gap-1 w-80 pt-5">
              <Input name="customerName" id="customerName" label="Customer Name" color="blue" onChange={handleDetailsChange} />
              {errors[0]!="" && <Typography variant="small" color="red">{errors[0]}</Typography>}
              <Input name="city" id="city" label="City" color="blue" onChange={handleDetailsChange} />
              {errors[1]!="" && <Typography variant="small" color="red">{errors[1]}</Typography>}
              <Input name="number" id="number" label="Mobile Number" color="blue" onChange={handleDetailsChange} />
              {errors[2]!="" && <Typography variant="small" color="red">{errors[2]}</Typography>}
          </div>

          <div className="flex justify-center">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 gap" autoComplete="off">
              <div className="mb-1 flex flex-col gap-6"  >
                <Input name="pname" id="pname" label="Product Name"  onFocus={handleClickOutside}  value={searchTerm} onChange={handleSearch} color="blue" />
                {errors[3]!="" && <Typography variant="small" color="red">{errors[3]}</Typography>}
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
              {errors[4]!="" && <Typography variant="small" color="red">{errors[4]}</Typography>}
              <Input name="price" id="price" label="Price"   onChange={handleChange} color="blue" />
              {errors[5]!="" && <Typography variant="small" color="red">{errors[5]}</Typography>}
              </div>
            </form>
          </div>
        </div>
              <div className="flex justify-center items-center mr-16" >
              <Button className="mt-6 w-80" color="black" onClick={addData} fullWidth>
                  Add
              </Button>
            </div>
      </Card>
    </div>

    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none"> 
      </CardHeader>
      <CardBody className="px-0">
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
            {items.map(
              (
                {
                  productName,
                  quantity,
                  unitPrice,
                  totalPrice
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
                          {index+1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {productName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {unitPrice}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={quantity}
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
                      <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {totalPrice}
                      </Typography>
                    </td>
                      <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <IconButton onClick={()=>handleDelete(index)} variant="text">
                          <TrashIcon className="h-4 w-4 text-red-600" />
                        </IconButton>
                      </Typography>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
    <div className="w-full flex gap-20 justify-end pr-10">
      <div>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-bold text-2xl pt-5"
      >
      Total : ${totalAmount}
      </Typography>
      </div>
      <div>
      <Typography
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
      <Button className="mt-5" onClick={handleSubmit}>
        Save & Print
      </Button>
      </Typography>
      </div>
    </div>
    </>
  )
} 
export default Bill
