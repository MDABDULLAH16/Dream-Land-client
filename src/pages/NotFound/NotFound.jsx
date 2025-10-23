import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import SyncLoader from "react-spinners/SyncLoader";

const NotFound = () => {
   
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay; in real scenario, this could be tied to any async operation
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen   from-blue-50 to-gray-100">
        <SyncLoader color="#3b82f6" size={15} />
      </div>
    );
  }

  return (
    <>
      <style>
        {`
                    @keyframes float {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }
                `}
      </style>
      <div className="flex items-center justify-center min-h-screen   from-blue-50 to-gray-100 px-4">
        <div className="text-center animate-fade-in max-w-md w-full">
          <title>Not Found</title>
          <img
            src="https://yemca-services.net/404.png"
            alt="404 Illustration"
            className="mx-auto w-full  animate-[float_3s_ease-in-out_infinite] shadow-xl rounded-lg object-cover"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mt-6">
            Looks Like You're Lost!
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            We can't seem to find the page you're looking for.
          </p>
          <Link
            to="/"
            className="text-base-100 bg-secondary hover:bg-accent focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors mt-4"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
