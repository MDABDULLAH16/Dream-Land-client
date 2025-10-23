import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-base-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Root;
