import React from 'react';
// , { useState } from "react";
// import { Link } from 'react-router-dom';


  function Searchbar() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [countyFilter, setCountyFilter] = useState("National");
//     const [subcountyFilter, setSubcountyFilter] = useState("");
  
//     // Define subcounties for each county
//     const countySubcounties = {
//       County1: ["Subcounty1", "Subcounty2"],
//       County2: ["Subcounty3", "Subcounty4"],
//       // Add more counties and their subcounties as needed
//     };
  
//     const handleSearch = () => {
//       // Perform the search with selected filters
//       console.log("Search Term:", searchTerm);
//       console.log("County Filter:", countyFilter);
//       console.log("Subcounty Filter:", subcountyFilter);
//     };


//   const fetchProductsInGroup = async (categorySlug, subcategorySlug, groupSlug) => {
//   try {
//     const response = await fetch(`http://localhost:3000/categories/${categorySlug}/subcategories/${subcategorySlug}/groups/${groupSlug}/products/search`);
//     if (response.ok) {
//       const products = await response.json();
//       // Handle products received from the backend
//     } else {
//       throw new Error('Product search request failed');
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };
// // Frontend - React
// const searchForProducts = async (groupName) => {
//   const normalizedGroupName = groupName.toLowerCase(); // Normalize the search query
//   // Perform the search with the normalized group name
//   // fetch(`http://localhost:3000/products/search?group_name=${normalizedGroupName}`)
// };


    return (
      <div className="flex flex-col md:flex-row gap-4">
        {/* <input
          type="text"
          placeholder="Search for products..."
          className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-yellow-500 focus:outline-none focus:border-yellow-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          id="countyFilter"
          name="countyFilter"
          className="w-full md:w-40 h-10 border-2 border-yellow-500 focus:outline-none focus:border-yellow-500 text-green-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
          value={countyFilter}
          onChange={(e) => {
            const selectedCounty = e.target.value;
            setCountyFilter(selectedCounty);
            // If the selected county has subcounties, set subcountyFilter to the first subcounty
            if (countySubcounties[selectedCounty]) {
              setSubcountyFilter(countySubcounties[selectedCounty][0]);
            } else {
              // If not, reset the subcountyFilter
              setSubcountyFilter("");
            }
          }}
        >
          <option value="National">National</option>
          <option value="County1">County1</option>
          <option value="County2">County2</option>
          {/* Add more counties */}
        {/* </select>
        {countyFilter !== "National" && countySubcounties[countyFilter] && (
          <select
            id="subcountyFilter"
            name="subcountyFilter"
            className="w-full md:w-40 h-10 border-2 bg-yellow-300 border-yellow-500 focus:outline-none focus:border-yellow-500 text-green-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
            value={subcountyFilter}
            onChange={(e) => setSubcountyFilter(e.target.value)}
          >
            {countySubcounties[countyFilter].map((subcounty) => (
              <option key={subcounty} value={subcounty}>
                {subcounty}
              </option>
            ))}
          </select>
        )}
        <button
          type="button"
          className="bg-green-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
          onClick={handleSearch}
        >
          Search
        </button>
        <Link to="/login">
        <button 
          type="button"
          className="bg-green-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
        >
          Be A Seller
        </button>
      </Link> */} 
    </div>
  );
}

export default Searchbar;