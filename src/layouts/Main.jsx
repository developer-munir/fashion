import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="max-w-screen-xl min-h-screen mx-auto bg-base-300 mt-5">
          <Outlet></Outlet>
        </div>
        <div className="max-w-screen-xl mx-auto bg-base-300">
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;