import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const GoogleSignIn = () => {
    const { handleGoogleSignIn } = use(AuthContext);
    return (
        
      
          <button
            type="button"
            onClick={()=>handleGoogleSignIn()}
            className="flex items-center justify-center w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle size={22} className="mr-2" />
            Continue with Google
          </button>

    );
};

export default GoogleSignIn;