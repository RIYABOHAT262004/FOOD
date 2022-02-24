import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Base from "../Asserts/Base.jpg";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${Base})`}}>
      <div className="headerContainer">
        <h1>SEAFOOD CORNER</h1>
        <p>SEAFOOD AT A CLICK.</p>
        <Link>
          <button>Order Now</button>
        </Link> 
      </div>
     
    </div>
  );
}
export default Home;
