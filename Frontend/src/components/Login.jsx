import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-extrabold text-xl">Login</h3>
            <div className="mt-8">
              <span>E-mail</span>
              <br />
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="mt-2 w-80 py-1 px-4 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-80 py-1 px-4 border rounded-md"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 hover:scale-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
