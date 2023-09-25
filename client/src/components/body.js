
import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../images/pic1.png";

function Bodyy() {
  return (
    <>
      <div className="mt-8 bg-yellow-200">
        <h1 className=" text-xl">Farm Produce</h1>
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




      <div className="mt-8 bg-yellow-200">
        <h1 className=" text-xl underline">Animal Produce</h1>
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



      <div className="mt-8 bg-yellow-200">
        <h1>Farm Equipments And Services</h1>
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
           
<section class="container px-6 py-4 mx-auto">
<div class="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
{/* Card 1 -->*/}
<div class="flex items-center p-4 bg-green border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
<div class="p-3 mr-4 bg-green-500 text-white rounded-full">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
</div>
<div>
  <p class="mb-2 text-sm font-medium text-gray-900">Kennels</p>
  <p class="text-sm font-normal text-gray-800">Include Chicken,dogs and other animal housing</p>
</div>
</div>

</div>
</section>
</Link>

</div>
        </div>

   
    </>
  );
}

export default Bodyy;