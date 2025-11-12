import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="py-10 mt-10" data-aos="fade-up">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-5">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
            {review.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow p-5 rounded text-center"
              >
                <img
                  className="w-20 h-20 mx-auto rounded-full mb-3"
                  src={review.photo}
                  alt={review.name}
                />
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-yellow-500 font-bold">{review.rating} ⭐</p>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
