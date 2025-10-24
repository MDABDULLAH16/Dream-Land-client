import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaQuoteLeft } from "react-icons/fa";
import Container from "../Container/Container";

const Reviews = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("/Ratings.json") // ✅ must be inside the public folder
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  return (
    <Container>
      <div className="  mx-auto px-4 py-16">
        <h1
          data-aos="flip-left"
          className="text-3xl lg:text-5xl font-bold text-center mb-12 text-secondary"
        >
          Hear from Other Happy Parents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ratings.map((review) => (
            <div
              key={review.id}
              data-aos="fade-up"
              className="card bg-base-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="avatar mb-4">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.image} alt={review.name} />
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {review.name}
                </h2>

                <div className="mt-2">
                  <Rating
                    readonly
                    size={25}
                    initialValue={review.rating}
                    SVGstyle={{ display: "inline-block" }}
                  />
                </div>

                <p className="mt-3 text-gray-600 dark:text-gray-300 italic">
                  <FaQuoteLeft className="inline-block text-purple-400 mr-2" />
                  {review.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
