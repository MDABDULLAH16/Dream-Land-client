import { useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy;

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    // Simulate adding to cart logic

    toast.success("Product add to the cart");
  };
  const handleTryNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);

    if (email.includes("@")) {
      toast.success("Thanks for Try!");
    } else {
      toast.error("please input a email");
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Simulate favorite logic
    console.log(`${toyName} favorited: ${!isFavorite}`);
  };

  return (
    <div className="  mx-auto p-6 bg-white rounded-xl shadow-lg">
      <title>Toy Details</title>{" "}
      <div className="flex flex-col md:flex-row gap-6">
        <figure data-aos="fade-right" className="md:w-1/2">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-auto rounded-lg"
          />
        </figure>
        <div data-aos="fade-left" className="card-body p-0 md:w-1/2">
          <h1 className="card-title text-3xl font-bold text-gray-900 mb-2">
            {toyName}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Subcategory:</strong> {subCategory}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold text-primary">
              Price: ${price.toFixed(2)}
            </p>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked={rating >= 1}
                readOnly
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked={rating >= 2}
                readOnly
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked={rating >= 3}
                readOnly
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked={rating >= 4}
                readOnly
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                checked={rating >= 5}
                readOnly
              />
              <span className="ml-2 text-orange-400 bg-white opacity-100">({rating})</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            <strong>Available Quantity:</strong> {availableQuantity}
          </p>
          <div className="flex items-center mb-4">
            <label className="label">
              <span className="label-text">Quantity:</span>
            </label>
            <input
              type="number"
              min="1"
              max={availableQuantity}
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.min(availableQuantity, parseInt(e.target.value) || 1)
                )
              }
              className="input input-bordered w-20 ml-2"
            />
          </div>
          <div className="flex justify-between mb-4">
            <button
              className="btn btn-secondary   text-base-100 hover:bg-accent hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-accent/50 font-medium rounded-lg text-sm"
              onClick={handleAddToCart}
              disabled={availableQuantity === 0}
            >
              Add to Cart
            </button>
            <button
              className={`btn ${
                isFavorite
                  ? "btn btn-secondary   text-base-100 hover:bg-accent hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-accent/50 font-medium rounded-lg text-sm"
                  : "btn btn-secondary   text-base-100 hover:bg-accent hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-accent/50 font-medium rounded-lg text-sm"
              }`}
              onClick={toggleFavorite}
            >
              {isFavorite ? "Remove Favorite" : "Add to Favorites"}
            </button>
          </div>
          <div className="divider my-4"></div>
          <p className="text-gray-600">
            <strong>Seller:</strong> {sellerName}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {sellerEmail}
          </p>
        </div>
      </div>
      {/* User Review Form */}
      <div className="flex items-center justify-center   p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-xl overflow-hidden">
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Get Started Today
            </h2>
            <form onSubmit={handleTryNow} className="flex flex-col space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered w-full transition-all duration-300 focus:border-primary focus:shadow-md"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full transition-all duration-300 focus:border-primary focus:shadow-md"
                  placeholder="Enter Your Email"
                />
              </div>
              <button className="btn btn-secondary w-full text-base-100 hover:bg-accent hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-accent/50 font-medium rounded-lg text-sm">
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
