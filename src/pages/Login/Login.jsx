import React, { useState, useContext } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import GoogleSignIn from "../../components/Buttons/GoogleSignIn";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

  
    // 🔹 Firebase sign-in
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login Successful!");
            form.reset();
            navigate(from,{replace:true})
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-100">
          Log In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Log In
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="h-px w-1/4 bg-gray-300 dark:bg-gray-700"></div>
            <p className="text-gray-500 dark:text-gray-400 mx-2 text-sm">or</p>
            <div className="h-px w-1/4 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Google Sign-In */}
         <GoogleSignIn></GoogleSignIn>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-purple-600 font-medium hover:underline"
            >
              Register now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
