import React from "react";
import { Link } from "react-router";
import notFoundImg from "../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={notFoundImg} alt="" />
      <p className="text-xl mt-2 font-semibold">Page Not Found!</p>
      <Link to="/" className="btn btn-primary mt-5">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
