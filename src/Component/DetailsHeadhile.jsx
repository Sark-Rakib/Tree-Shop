import React from "react";
import Marquee from "react-fast-marquee";

const DetailsHeadhile = ({ trees }) => {
  if (!trees || trees.length === 0) return null;

  return (
    <div className="flex items-center bg-base-200">
      <p className="font-semibold bg-blue-300 p-2 px-5 text-white">Title</p>
      <Marquee
        className="font-medium text-gray-700"
        pauseOnHover={true}
        speed={50}
      >
        {trees.map((tree) => (
          <span key={tree.id} className="mx-5">
            {tree.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default DetailsHeadhile;
