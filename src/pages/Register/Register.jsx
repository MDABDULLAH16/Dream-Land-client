import React, { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

import { updateProfile } from "firebase/auth";
import GoogleSignIn from "../../components/Buttons/GoogleSignIn";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {  userCreate}= use(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const PhotoUrl = form.photoUrl.value;
      const password = form.password.value;
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long!");
      } else if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter (A–Z)!");
      } else if (!/[a-z]/.test(password)) {
        toast.error("Password must contain at least one lowercase letter (a–z)!");
      } 
      userCreate(email, password)
        .then((result) => {
          const user = result.user;
          if (user) {
            updateProfile(user, { displayName: name, photoURL: PhotoUrl })
              .then(() => {
                toast.success("Account Create Successful!!");
              })
              .catch((err) => {
                toast.error(err.message);
              });
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-4">
      <title>Register</title>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-100">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
            />
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              PhotoUrl
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter your PhotoUrl"
              required
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400"
              >
                {showPassword ? (
                  <IoMdEyeOff size={22} />
                ) : (
                  <IoMdEye size={22} />
                )}
              </button>
            </div>
          </div>

        
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="h-px w-1/4 bg-gray-300 dark:bg-gray-700"></div>
            <p className="text-gray-500 dark:text-gray-400 mx-2 text-sm">or</p>
            <div className="h-px w-1/4 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Google Sign-In */}
         <GoogleSignIn></GoogleSignIn>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
