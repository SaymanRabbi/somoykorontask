"use client"
import Button from "@/components/Button";
import { emailError } from "@/components/EmailError";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Home() {
  const {register,handleSubmit,reset} = useForm<FieldValues>({
    // defult values
    defaultValues: {
        name: '',
        email: '',  
        age:0,
    }
    // defult values
})
// submit handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if( !data.name){
        toast.error("Please enter your name")
        return  
     }
      if(!data.age || parseInt(data.age) === 0 || parseInt(data.age) < 0){
        toast.error("Please enter your valid age")
        return
      }
     if( !data.email ||!data.email.match(emailError) ){
      toast.error("Please enter valid email")
      return
  }
  toast.success("Successfully registered")
     
    // -------Todo student register logic
    //  reset()
    }
    // submit handler
  return (
   <div className="w-[100%] h-[100vh]">
    <div className="max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md p-[25px] focus:outline-none translate-x-[-50%] translate-y-[-20%] top-[20%] left-[50%] fixed">
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-y-4">
          {/* ----- name input */}
          <Input type="text" placeholder="Enter your name" className=" bg-neutral-300"
                {...register('name')}/>
                {/* ----- name input */}
                {/* ----email input */}
          <Input type="email" placeholder="Enter your email" className=" bg-neutral-300"
                {...register('email')}/>
                {/* ----email input */}
           <Input type="number" placeholder="Enter your age" className=" bg-neutral-300"
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
