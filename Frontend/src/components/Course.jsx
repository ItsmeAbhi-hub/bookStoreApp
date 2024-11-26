import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto flex items-center md:px-5 px-10 ">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are Welcoming to the{" "}
            <span className="text-pink-500">World of Knowledge .. :)</span>
          </h1>
          <p className="mt-10 text-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nam
            voluptatum incidunt. Ipsam quo odio expedita dolor reiciendis
            accusantium qui molestiae iusto. Omnis totam, consequuntur soluta
            dolorum distinctio obcaecati tempora! Eum iste molestias, corrupti
            quod quas quibusdam sint? Velit, quis.
          </p>
          <Link to="/">
          <button className="mt-10 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
           
          
        </div>
      </div>
      <div className="mt-12 h-92 grid grid-cols-1 md:grid-cols-4 ">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Course;
