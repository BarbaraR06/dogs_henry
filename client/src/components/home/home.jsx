import React from "react";
import Navbar from "../navbar/navbar";
import DogsList from "../dog/dogs";
import './home.styles.css'
//import { useEffect, useState } from "react";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <h1 className="home-title">Home</h1>
      <DogsList />
    </div>
  );
}

export default Home;
