"use client"
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Home() {
  const {register,handleSubmit,reset} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',  
        age:0,
    }
})
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if( !data.name || !data.email){
        toast.error("Please fill all the fields")
        return  
     }
     
    // -------Todo student register logic
    //  reset()
    }
  return (
   <div className="w-[100%] h-[100vh]">
    <div className="max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md p-[25px] focus:outline-none translate-x-[-50%] translate-y-[-20%] top-[20%] left-[50%] fixed">
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-y-4">
          <Input type="text" placeholder="Enter your name" className=" bg-neutral-300"
                {...register('email')}/>
          <Input type="email" placeholder="Enter your email" className=" bg-neutral-300"
                {...register('email')}/>
           <Input type="number" placeholder="Enter your age" className=" bg-neutral-300"
                {...register('age')}/>
        </form>
    </div>

   </div>
  )
}
