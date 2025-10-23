import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, pictureURL, rating, availableQuantity, price } = toy;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:text-gray-300">
      <figure className="p-4">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-48 object-contain rounded-xl"
        />
      </figure>
      <div className="card-body px-5 py-3">
        <h2 className="card-title text-lg font-semibold">{toyName}</h2>
        <div className="flex justify-between items-center text-sm  ">
          <p className="text-gray-600 dark:text-gray-400">
            Rating:{" "}
            <span className="font-medium text-yellow-500">{rating}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Stock:{" "}
            <span
              className={`font-medium ${
                availableQuantity > 50 ? "text-green-500" : "text-red-500"
              }`}
            >
              {availableQuantity}
            </span>
          </p>
        </div>
        <p className="text-lg font-semibold   text-violet-600 dark:text-violet-400">
          ${price}
        </p>

        <div className="card-actions justify-end ">
          <Link to={`/toyDetails/${toyId}`}>
            <button className="text-base-100 bg-secondary hover:bg-accent focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
