import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from 'react'
import { useState } from "react";

export function Bill() {

  const [formData, setFormData] = useState({pname:''});
  const [details,setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
 useEffect(()=>{
  fetch('http://localhost:3000/bill/new-bill',{
    method: "GET"
  })
  .then(res=>res.json())
  .then(data=>setDetails(data.Products))
  .catch(err=>console.log(err))
 },[])

 const handleSearch = (event) => {
  setSearchTerm(event.target.value);

  const filtered = details.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredProducts(filtered);

  setShowDropdown(searchTerm !== '' && filtered.length > 0);
};

const filteredProducts = details.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductSelection = (product) => {
    setSearchTerm(product.name);
    setShowDropdown(false); 
  };

  const handleClickOutside = () => {
    setShowDropdown(!showDropdown); 
  };
  const handleClickInside=()=>{
    setShowDropdown(!showDropdown); 
  }

  return (
    <div className=''>
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
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" autoComplete="off">
        <div className="mb-1 flex flex-col gap-6"  >
          <Input name="pname" label="Product Name"  onFocus={handleClickOutside}  value={searchTerm} onChange={handleSearch} color="blue" />
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
        <Input name="quantity" label="Quantity" onChange={handleChange} color="blue" />
        <Input name="price" label="Price"  onChange={handleChange} color="blue" />
        </div>
      
        <div className="flex justify-center items-center" >
        <Button className="mt-6 w-80" color="black" fullWidth>
            Add
        </Button>
      </div>
      </form>
    </div>
    </Card>
    </div>
  )
}

export default Bill