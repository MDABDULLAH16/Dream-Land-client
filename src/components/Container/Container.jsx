import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' px-1 lg:px-10 mx-auto'>
            {children}
        </div>
    );
};

export default Container;