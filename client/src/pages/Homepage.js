import React from "react";
import Ad from "../components/Advert";
import Footer from "../components/footer";
import Searchbar from "../components/Searchbar";
import ItemShowcase from "../components/ItemShowcase";

function Home() {
    return (
      <div>
        <header>
         <Ad/>

         <p className=" bg-yellow-400 text-xl"> Welcome to Farmwise</p>
         <Searchbar/>
        </header>
        <body className=" bg-yellow-400">
          <ItemShowcase/>
        </body>
        <Footer/>
      </div>
    );
  }
  //
  export default Home;
  