"use client"
import Button from "@/components/Button";
import DataTable from "@/components/DataTable";
import { emailError } from "@/components/EmailError";
import Input from "@/components/Input";
import useStore from "@/store/store";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Home() {
  // ----add store data
  const addData = useStore(state => state.addData)
  // ----get store data
  const getData = useStore(state => state.data)
  // Loading state
  const [loading,setLoading] = useState(false)
  const {register,handleSubmit,reset} = useForm<FieldValues>({
    // defult values
    defaultValues: {
        name: '',
        email: '',  
        age:0,
    }
    // defult values
})
// border class 
const borderClass = "border-2 border-transparent focus:border-green-500 bg-neutral-300"
// submit handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    if( !data.name){
        toast.error("Please enter your name")
        setLoading(false)
        return  
     }
     if(!data.email.match(emailError) ){
       toast.error("Please enter valid email")
        setLoading(false)
       return
      } 
      if(!data.age || parseInt(data.age) === 0 || parseInt(data.age) < 0){
        toast.error("Please enter your valid age")
        setLoading(false)
        return
      }
   const Data = {
      name:data.name,
      email:data.email,
      age:data.age
   }
    addData(Data)
    toast.success("Successfully Add Data")
    setLoading(false)
    reset()
    }
    // submit handler

  return (
   <div className="w-[100%] h-[100vh] flex flex-col  items-center md:p-20 p-4">
    <div className="max-h-full w-full md:w-[90vw] md:max-w-[450px] rounded-md p-[25px] focus:outline-none">
              <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-y-4">
                {/* ----- name input */}
                <Input type="text" placeholder="Enter your name" className={
                  borderClass
                }
                      {...register('name')}/>
                      {/* ----- name input */}
                      {/* ----email input */}
                <Input type="email" placeholder="Enter your email" className={
                  borderClass
                }
                      {...register('email')}/>
                      {/* ----email input */}
                <Input type="number" placeholder="Enter your age" className={borderClass}
                      {...register('age')}/>
                      {/* ---age input */}
                      {/* ----submit button--- */}
                      <Button  type="submit">
                    {
                      loading ? "Loading..." : "Submit"
                    }
              </Button>
                      {/* ----submit button--- */}
              </form>

            
    </div>
  {/* ----table--- */}

  {
                getData.length > 0 &&  <DataTable data={getData}/>
              }
   </div>
  )
}
