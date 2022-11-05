import React from "react";
import "./home.css";
import UploadProduct from "./UploadProduct";
const Home = () => {
  return (
    <div className="layout-home">
      <div className="bg-red-200 min-h-screen">
        <h1>User Details</h1>
      </div>
      <div className="bg-blue-200 min-h-screen">
        <UploadProduct></UploadProduct>
      </div>
    </div>
  );
};

export default Home;
