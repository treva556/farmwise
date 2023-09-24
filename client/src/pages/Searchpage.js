import React from "react";
import Itemcard from "../components/Itemcard";

function Searchpage() {
  return (
    <div>
      Avocadoes
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-0.5">
        <Itemcard className="w-16 h-20" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      {/* Repeat the above structure for the remaining cards */}
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      <div className="col-span-1">
        <Itemcard className="w-32 h-40" /> {/* Adjust the width and height as needed */}
      </div>
      {/* Repeat the above structure for the remaining cards */}
    </div>
    </div>
  );
}

export default Searchpage;