import React, { use, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Navigate, useNavigate } from "react-router";

const ResetPassword = () => {
    const { forgetPassword } = use(AuthContext)
    console.log(forgetPassword);
    
  const [email, setEmail] = useState(forgetPassword);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate()
  const handleResetPassword = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
        setEmail("");
    
      window.open("https://mail.google.com/mail/u/0/#inbox","_blank");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <title>Forget Password</title>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-secondary">
          Reset Password
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleResetPassword}>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border border-secondary dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-secondary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
