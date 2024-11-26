import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="max-w-screen-2xl conatiner mx-auto md:px-5 px-1 mt-10 my-3">
        <div className="card bg-base-100 w-92 rounded-2xl shadow-[0_0_2px_rgba(255,255,255,0.5)] hover:scale-105 duration-300">
          <figure>
            <img className="h-96" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-around mt-5">
              <div className="badge badge-outline hover:bg-pink-500 duration-500 text-white px-5 py-4 cursor-pointer">${item.price}</div>
              <div className="badge badge-outline  hover:bg-pink-500 duration-500 text-white px-5 py-4 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
