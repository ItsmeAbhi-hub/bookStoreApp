import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // Logs the form data
      };
  return (
    
   <>
   <div>
   <div className="flex h-screen justify-center items-center">
        <div className="w-[600px]">
          <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-extrabold text-2xl text-white text-center transition-transform duration-300 hover:scale-110 transition-colors duration-300 hover:text-pink-500">
              Signup
            </h3>
            
              <div className="mt-8 flex items-center">
                <span className="font-bold text-white mr-7">Name :</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-80 py-1 px-4 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500 ml-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-8 flex items-center">
                <span className="font-bold text-white mr-7">E-mail :</span>
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="mt-2 w-80 py-1 px-4 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 ml-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-8 flex items-center">
                <span className="font-bold text-white mr-1">Password :</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-80 py-1 px-4 border rounded-md"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500 ml-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 hover:scale-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  Signup
                </button>
                <p className="text-lg">
                  Have an account?{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
   </div>
   </>
  )
}

export default Contact