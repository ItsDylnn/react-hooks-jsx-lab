import React from "react";
import { city, username as name } from "../data/data";

function Home() {
  return (
    <div id="home">
    <h1 style={{ color: "firebrick" }}>
  {`${name} is a Web Developer from ${city}`}
</h1>


    </div>
  );
}


export default Home;
