import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';


const Root = () => {
    return (
      <div className='bg-base-100'>
         
          <Navbar></Navbar>
          <Outlet></Outlet>
         
      </div>
    );
};

export default Root;