import React, { useEffect, useState } from 'react';
 
import ToyCard from '../Card/Card';
import Container from '../Container/Container';

const TopToy = () => {
    const [topToy,setTopToy]=useState([])
    useEffect(() => {
        fetch('/ToyData.json').then(res => res.json()).then(data => {
            const top8 = data.slice(0, 8);
            setTopToy(top8)
        } )
    },[])
    return (
      <Container>
        <div>
          <h1
            data-aos="fade-up"
            className="text-6xl font-bali text-center py-6 font-extrabold"
          >
            Top Toys
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {topToy.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </div>
      </Container>
    );
};

export default TopToy;