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
         <Searchbar/>
        </header>
        <body>
          <ItemShowcase/>
        </body>
        <Footer/>
      </div>
    );
  }
  //
  export default Home;
  