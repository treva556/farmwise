import React from "react";
import Ad from "../components/Advert";
import Footer from "../components/footer";
import Searchbar from "../components/Searchbar";
import Bodyy from "../components/body";

function Home() {
    return (
      <div className=" bg-green-600">
        <header className="">
         <Ad/>

         <p className=" text-xl "> Welcome to Farmwise</p>
         <Searchbar/>
        </header>
        <body className="">
          {/* <ItemShowcase/> */}
        <Bodyy/>
        </body>
        <Footer/>
      </div>
    );
  }
  //
  export default Home;
  