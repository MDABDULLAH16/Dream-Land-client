import React from "react";

import { toast } from "react-toastify";
const AboutUs = () => {
 
  const handleFindShop = () => {
    // Logic to find a shop (e.g., redirect to store locator page)
   toast.info("Store locator feature coming soon!");
  }

  return (
    <div className="bg-linear-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-20 bg-pink-100">
        <h1
          data-aos="fade-down"
          className="text-5xl font-bold text-secondary mb-4"
        >
          Welcome to DreamLand
        </h1>
        <p
          data-aos="fade-up"
          className="text-lg max-w-2xl mx-auto text-secondary"
        >
          DreamLand is your ultimate destination for the happiest toys and
          joyful moments. We believe in creating smiles for children of all
          ages!
        </p>
      </section>

      {/* Section 1: We Care About Our Customers */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-10">
        <div data-aos="fade-right" className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/KzxCQLw4/baby-plaing.jpg"
            alt="happy customers"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div data-aos="fade-left" className="md:w-1/2">
          <h2 className="text-4xl font-semibold text-secondary mb-4">
            We Care About Our Customers
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At DreamLand, our customers are our top priority. We ensure that
            every toy meets the highest safety standards, and our friendly staff
            is always ready to help you pick the perfect gift. Your happiness is
            our mission!
          </p>
          <p className="text-gray-600">
            From personalized recommendations to fast customer support, we go
            the extra mile to make shopping with us delightful and stress-free.
          </p>
        </div>
      </section>

      {/* Section 2: Multiple Branches */}
      <section className="py-20 px-6 md:px-20 bg-pink-50 flex flex-col md:flex-row items-center gap-10">
        <div data-aos="fade-right" className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl font-semibold text-secondary mb-4">
            Our Many Branches
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            DreamLand is expanding! With multiple branches across the country,
            we bring joy to children everywhere. Whether you're in the city or a
            small town, a DreamLand store is never far away.
          </p>
          <p className="text-gray-600">
            Each branch is designed to provide a magical experience with
            interactive play areas, exciting displays, and friendly staff ready
            to assist you.
          </p>
        </div>

        <div data-aos="fade-left" className="md:w-1/2 order-1 md:order-2">
          <img
            src="https://i.ibb.co.com/gMvskP9J/map.jpg"
            alt="DreamLand branches"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Section 3: Our Mission & Values */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl font-semibold text-secondary mb-4">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
            Our mission is simple: bring joy, creativity, and imagination into
            the lives of children. We believe in nurturing young minds and
            strengthening family bonds through the power of play.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We value safety, quality, and happiness above all. Every toy and
            product is carefully selected to ensure it inspires wonder and
            delight, making every DreamLand visit an unforgettable experience.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-pink-200 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4 text-secondary">
          Come Visit Us Today!
        </h3>
        <p className="mb-6 text-gray-700">
          Explore our stores, find the perfect toy, and create memories that
          last a lifetime.
        </p>
        <button onClick={handleFindShop} className="btn btn-pink btn-lg">Find a Store Near You</button>
      </section>
    </div>
  );
};

export default AboutUs;
