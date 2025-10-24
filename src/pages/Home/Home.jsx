import React from 'react';
import Slider from '../../components/Slider/Slider';
import TopToy from '../../components/TopToy/TopToy';
import Reviews from '../../components/Reviews/Reviews';


const Home = () => {
    return (
        <div className='bg-base-100 '> 
        <title>DreamLand Home</title>    
            <Slider></Slider>
            <TopToy></TopToy>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;