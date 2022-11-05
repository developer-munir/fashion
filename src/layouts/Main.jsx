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
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;