import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TreeCard = ({ tree }) => {
  const { id, title, image_url, details, rating, price } = tree;

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col card md:card bg-base-100 shadow-xl border border-gray-200 relative overflow-hidden"
    >
      <h2 className="font-semibold text-xl p-2">{title}</h2>
      <figure>
        <img
          src={image_url}
          alt={title}
          className="w-full h-[250px] md:h-60 object-cover transition-transform duration-500 hover:scale-105"
        />
      </figure>

      <div className="card-body p-5 flex flex-col">
        <p className="text-gray-600 text-sm mt-2 justify-start">
          {details.length > 100 ? `${details.slice(0, 100)}...` : details}
        </p>

        <div className="flex items-center justify-between mt-3 w-full">
          <Link
            to={`/tree-details/${id}`}
            className="text-orange-500 font-semibold hover:underline"
          >
            View Details
          </Link>
          <span className="font-bold text-green-600">${price}</span>
        </div>

        <div className="flex items-center gap-1 mt-3 text-orange-500 justify-center border-t w-full">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating) ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default TreeCard;
