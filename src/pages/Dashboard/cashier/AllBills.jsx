import React, { useEffect, useState } from 'react'
import Bill1 from "../../../../public/Bill1.svg"
import Bill2 from "../../../../public/Bill2.svg"
import Bill3 from "../../../../public/Bill3.svg"
import Bill4 from "../../../../public/Bill4.svg"
import Bill5 from "../../../../public/Bill5.svg"
import Bill6 from "../../../../public/Bill6.svg"
import Bill7 from "../../../../public/Bill7.svg"
import Bill8 from "../../../../public/Bill8.svg"
import Bill9 from "../../../../public/Bill9.svg"
import Bill10 from "../../../../public/Bill10.svg"
import Bill11 from "../../../../public/Bill11.svg"
import BillTemp from '../BillTemp'
import Swal from "sweetalert2";
import api from '../../../utils/Utils';


export function AllBills() {
  const BillImg = [Bill1,Bill2,Bill3,Bill4,Bill5,Bill6,Bill7,Bill8,Bill9,Bill10,Bill11]
  const [billModel,setBillModel] = useState(false)
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState({});
  const [data,setData]=useState([]);



  const handleOpen = (()=>{
    setBillModel(!billModel)
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/bill/allbills",{page});
        if (response.data) {
          console.log('====================================');
          console.log(response.data);
          console.log('====================================');
          setData(response.data.Bills);
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
  }, [page]);

  return (
    <>
    <div className='w-full h-full grid grid-cols-4 gap-5'>
      <div className='w-full flex items-start justify-start' onClick={handleOpen}>
        <div className='w-64 h-40 flex flex-col items-center justify-center shadow-2xl rounded-2xl'>
          <div className='w-full h-[70%]'><img src={`${BillImg[Math.floor(Math.random()*BillImg.length)]}`}alt="" className='w-full h-full' /></div>
          <div className='w-full bg-blue-400 h-[30%] flex items-end justify-end rounded-b-2xl'></div>
        </div>
      </div>
    </div>
    {billModel && <BillTemp handle={setBillModel} />}
    </>
  )
}

export default AllBills