import React from 'react'
import { useForm } from "react-hook-form";

function Contact() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-11/12 max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-3xl">Contact Us</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span className="text-lg">Name</span>
            <br />
            <input type="text" 
                placeholder="Enter your name"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white"
                {...register("name", { required: true })}
            />
            <br />
            {errors.name && 
              <span className="text-xs text-red-500">
                This field is required
              </span>}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span className="text-lg">Email</span>
            <br />
            <input type="email" 
                placeholder="Email address"
                className="w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white"
                {...register("email", { required: true })}
            />
            <br />
            {errors.email && 
              <span className="text-xs text-red-500">
                This field is required
              </span>}
          </div>

          {/* Message */}
          <div className="mt-4 space-y-2">
            <span className="text-lg">Message</span>
            <br />
            <textarea type="text" 
                placeholder="Type your message"
                className="h-32 w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white"
                {...register("message", { required: true })}
            />
            {errors.message && 
              <div className="text-xs text-red-500 translate-y-[-0.6rem]">
                This field is required
              </div>}
          </div>

          {/* button */}
          <div className='mt-4'>
            <button className="bg-blue-500 text-white rounded-md px-3 py-1.5 hover:bg-blue-700 active:scale-90 duration-200">
                Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact