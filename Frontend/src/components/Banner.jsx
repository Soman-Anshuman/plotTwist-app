import React from 'react'
import banner from "/Banner-2.png"

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-10">
        {/* Left */}
        <div className="w-full md:w-1/2 mt-8 md:mt-32 order-2 md:order-1">
          <div className="space-y-7 md:space-y-12 translate-y-[-30px] md:translate-y-0">
            <h1 className="text-4xl font-bold">
              {/* Hello, welcomes here to learn something <span className="text-pink-500">new everyday!!!</span> */}
              Hello, this is the place to learn something <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, rem nulla nobis magnam placeat cupiditate eveniet reiciendis itaque quae sunt explicabo aliquam, fugiat minus alias obcaecati dolore amet repellat porro!
            </p>
            {/* Email input */}
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-slate-400 dark:outline-slate-400 dark:outline-2 dark:outline-offset-2">
              Email
              <input type="text" className="grow" placeholder="mail@site.com" />
            </label>
          </div>
          <button className="btn mt-[-1rem] md:mt-6 btn-secondary">Join us!</button>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 order-1">
          <img src={banner} className="w-11/12 h-11/12 translate-x-5 md:translate-x-16 md:translate-y-12" alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
