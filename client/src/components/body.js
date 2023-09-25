
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../images/pic1.png";

function Bodyy() {
  return (
    <>
      <div className="mt-8">
        <h1>Farm Produce</h1>
        <div className="flex">
          <Link to="/farmproduce/cereals">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Cereals"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Cereals</h1>
            </div>
          </Link>
          <Link to="/farmproduce/fruits">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Fruits"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Fruits</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h1>Farm Produce</h1>
        <div className="flex">
          <Link to="/farmproduce/cereals">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Cereals"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Cereals</h1>
            </div>
          </Link>
          <Link to="/farmproduce/fruits">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Fruits"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Fruits</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h1>Farm Produce</h1>
        <div className="flex">
          <Link to="/farmproduce/cereals">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Cereals"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Cereals</h1>
            </div>
          </Link>
          <Link to="/farmproduce/fruits">
            <div className="w-full shadow-sm p-5 rounded-md cursor-pointer hover:border-green-500">
              <img
                src={pic1}
                alt="Fruits"
                className="mx-auto h-64 w-64 object-contain" // Adjusted image size
              />
              <h1 className="text-center font-bold md:text-base mt-2">Fruits</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bodyy;