import React from "react";
import Itemcard from "./Itemcard";
import { Link } from 'react-router-dom';
import pic1 from "../images/pic1.png"; // Import the image


const catNav = [
    {
        name: "Mobiles",
        icon: pic1, // Make  you import and declare your icons
    },
    {
        name: "Fashion",
        icon: pic1,
    },
    // ... (other categories)
]

const ItemShowcase = () => {
    return (
        <section className="hidden sm:block bg-white mt-10 mb-4 min-w-full px-12 py-1 shadow overflow-hidden">
            <div className="flex items-center justify-between mt-4">
                {catNav.map((item, i) => (
                    <Link to={`/products?category=${item.name}`} className="flex flex-col gap-1 items-center p-2 group" key={i}>
                        <div className="h-16 w-16">
                            <img draggable="false" className="h-full w-full object-contain" src={item.icon} alt={item.name} />
                        </div>
                        <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};


export default ItemShowcase;