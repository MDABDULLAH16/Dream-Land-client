import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Must import this for animations to work

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration in ms
      once: true, // animation happens only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-base-100">
      <Navbar />
      <Outlet />
      <Footer />
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
