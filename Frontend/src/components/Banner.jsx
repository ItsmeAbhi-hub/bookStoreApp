import React from "react";
import banner from "../../public/Books.png"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto flex items-center md:px-5 px-10  flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-black">
              <span className="text-6xl mr-3">Hello</span>,welcomes here to learn something{" "}
              <span className="text-pink-500">new evryday!!!</span>
            </h1>
            <p className="text-xl ">
              Lorem ipsum dolor sit ame consectetur adipisicing elit. Veniam
              quaerat esse enim amet? Molestias ullam eum necessitatibus eveniet
              maiores eaque.
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2 w-2/3 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow " placeholder="Email" />
          </label>
          <button className="btn btn-outline btn-info w-32  opacity-50 mt-10">
            Primary
          </button>
        </div>
        <div className=" order-1 md:order-2 w-full md:w-1/2">
          <img src={banner} className="w-[600px] md:ml-10 ml-4 md:mt-20 mt-8" alt="" />
        </div>
      </div>
      
    </>
  );
}

export default Banner;
