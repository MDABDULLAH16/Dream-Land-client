import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";

const MyProfile = () => {
  const { user,setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
//  useEffect(() => {
//    if (user) {
//      setDisplayName(user.displayName || "");
//      setPhotoURL(user.photoURL || "");
//    }
//  }, [user]);
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
        setUser({ ...user, displayName, photoURL });
       
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-secondary">
        My Profile
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={photoURL || "/profile.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-secondary"
          />
        </div>

        {/* Profile Info Form */}
        <form
          onSubmit={handleUpdateProfile}
          className="flex-1 w-full flex flex-col gap-4"
        >
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full border border-secondary dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full border border-secondary dark:border-gray-600 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-secondary  py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter image URL"
              className="w-full border border-secondary dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-secondary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
