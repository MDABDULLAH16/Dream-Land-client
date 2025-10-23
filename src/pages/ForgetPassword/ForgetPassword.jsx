import  { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const ForgetPassword = () => {
    const { forgetPassword } = useState(AuthContext);

    
    return (
        <div>
            <h1>{forgetPassword}</h1>
        </div>
    );
};

export default ForgetPassword;