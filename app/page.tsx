"use client"
import Button from "@/components/Button";
import { emailError } from "@/components/EmailError";
import Input from "@/components/Input";
import useStore from "@/store/store";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Home() {
  // ----add store data
  const addData = useStore(state => state.addData)
  // ----get store data
  const getData = useStore(state => state.data)
  console.log(getData)
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
    console.log(data)
    if( !data.name){
        toast.error("Please enter your name")
        return  
     }
     if(!data.email.match(emailError) ){
       toast.error("Please enter valid email")
       return
      } 
      if(!data.age || parseInt(data.age) === 0 || parseInt(data.age) < 0){
        toast.error("Please enter your valid age")
        return
      }
   const Data = {
      name:data.name,
      email:data.email,
      age:data.age
   }
    addData(Data)
    toast.success("Successfully registered")
    reset()
    }
    // submit handler

  return (
   <div className="w-[100%] h-[100vh]">
    <div className="max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md p-[25px] focus:outline-none translate-x-[-50%] translate-y-[-20%] top-[20%] left-[50%] fixed">
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
                  Submit
              </Button>
                      {/* ----submit button--- */}
              </form>
    </div>

   </div>
  )
}
