import React from 'react';
import Container from '../Container/Container';
import time from '/time.png'
import shipping from '/shipping.png'
import cash from '/cash.png'

const State = () => {
    return (
      <div className="font-bali">
        <h1
          data-aos="zoom-in"
          className="text-center font-bold font-bali text-3xl lg:text-5xl my-6 text-secondary "
        >
          For Your Satisfaction
        </h1>
        <Container>
          <div className="flex items-center justify-evenly gap-5">
            <div
              data-aos="fade-right"
              className="flex bg-[#F4FAFF] text-[#12AEE0] flex-col items-center justify-center py-5 mx-auto w-full"
            >
              <img src={time} alt="Time" />
              <p className="text-[#12AEE0]">Customer care</p>
              <p>24 hours follow up</p>
            </div>
            <div
              data-aos="zoom-in"
              className="flex bg-[#FFFAF4] text-[#E87B16] flex-col items-center justify-center py-5 mx-auto w-full"
            >
              <img src={shipping} alt="shipping" />
              <p className="text-[#E87B16]"> Free Ship</p>
              <p>Free shipping for $100 and up</p>
            </div>
            <div
              data-aos="fade-left"
              className="flex bg-[#F4FFF5] text-[#06C825] flex-col items-center justify-center py-5 mx-auto w-full"
            >
              <img src={cash} alt="Time" />
              <p className="text-[#06C825]">Return</p>
              <p>Within 7 days</p>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default State;