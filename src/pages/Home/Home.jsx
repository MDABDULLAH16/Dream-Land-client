import React from 'react';
import Slider from '../../components/Slider/Slider';
import TopToy from '../../components/TopToy/TopToy';

const Home = () => {
    return (
        <div className='bg-base-100 '> 
        <title>DreamLand Home</title>    
            <Slider></Slider>
            <TopToy></TopToy>
        </div>
    );
};

export default Home;