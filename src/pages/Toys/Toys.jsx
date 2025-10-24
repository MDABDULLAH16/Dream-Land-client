import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Container from '../../components/Container/Container';
import ToyCard from '../../components/Card/Card';

const Toys = () => {
    const toys = useLoaderData();
    const [searchToys, setSearchToys] = useState(toys);
    
    const handleOnChange = (e) => {  
        const name = e.target.value;
        const smName= name.toLowerCase()
        const filterToys = toys.filter(t => t.toyName.toLowerCase().includes(smName))
        setSearchToys(filterToys)
        
        
   }
    
    return (
      <Container>
        <div>
          <h1
            data-aos="fade-up"
            className="text-6xl font-bali text-center text-secondary my-4 py-8 font-extrabold"
          >
            Endless play, endless smiles.
          </h1>
          <div className="w-full text-center">
            <label className="input ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={handleOnChange}
                className="   w-full border-secondary"
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {searchToys.map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </div>
      </Container>
    );
};

export default Toys;