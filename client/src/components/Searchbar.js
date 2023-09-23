import React from "react";

function Searchbar() {
    return (
      <div>
        <form class="flex flex-col md:flex-row gap-3">
    <div class="flex">
     {/* <input
  type="text"
  placeholder="Search for the tool you like"
  style="width: 100%; padding: 0.5rem; border: 2px solid #00BFFF; border-radius: 0.25rem;" 
> */}
        <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    <select id="pricingType" name="pricingType"
		class="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">All</option>
		<option value="Freemium">Freemium</option>
		<option value="Free">Free</option>
		<option value="Paid">Paid</option>
	</select>
   </form>
      </div>
    );
  }
  //
  export default Searchbar;
  