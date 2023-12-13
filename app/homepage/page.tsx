// this is the home page for the website
import React from "react";
import "../globals.css";

interface User {
  id: number;
  name: string;
}

//const Home = async () => {
function Home() {
  return (
    <>
      <h2>this is the home page </h2>
      <input type="text" />
    </>
  );
}

export default Home;
