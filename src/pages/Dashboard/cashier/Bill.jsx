import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from 'react'

export function Bill() {
  return (
    <div className=''>
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center items-center w-full flex-col" >
          <Typography variant="h4" color="blue">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter Bill details to get the bill.
          </Typography>
        </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input label="Product Id" color="blue" />
        </div>
      </form>
      <div className="flex justify-center items-center" >
        <Button className="mt-6 w-80" color="blue" fullWidth>
            Submit
        </Button>
      </div>
    </Card>
    </div>
  )
}

export default Bill