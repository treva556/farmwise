import Itemcard from "../components/Itemcard";
import React from "react";
// import Itemcard from "./Itemcard";
import { Link } from 'react-router-dom';
import pic1 from "../images/pic1.png"; // Import the image
// import Slider from 'react-slick';


const catNav = [
    {
        name: "Acocadoe 1",
        icon: pic1, // Make  you import and declare your icons
    },
    {
        name: "Animal Produce",
        icon: pic1,
    },
  //   {
  //     name: "Farming Equipment",
  //     icon: pic1,
  // },
  // {
  //     name: "Services",
  //     icon: pic1,
  // },

    // ... (other categories)
]

function Searchpage() {
  return (
    <div>
      Avocadoes
    <div className="grid grid-cols-6 gap-4">
    <section className="bg-  w-full shadow overflow-hidden">

<div className="flex items-center justify-between mt-4">
      {catNav.map((item, i) => (
          <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
              <div className="h-20 w-44">
                  <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
              </div>
              <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
          </Link>
      ))}
  </div>
</section>

    </div>
    </div>
  );
}

export default Searchpage;