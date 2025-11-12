import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import RightSide from "./RightSide";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa";

const ViewDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const tree = data.find((t) => t.id == id);

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col mt-15 md:flex-row w-11/12 mx-auto my-3 gap-5 space-y-5">
        <section className="w-full md:w-9/12 ">
          <h2 className="text-2xl font-bold">{tree.title}</h2>
          <img
            src={tree.image_url}
            alt={tree.title}
            className="w-full object-cover"
          />
          <p className="mt-3 text-gray-700 text-xl">{tree.details}</p>
          <p className="mt-2 font-semibold text-green-600 text-xl">
            ${tree.price}
          </p>
          <Link to="/">
            <button className="btn btn-accent mt-2">
              <FaArrowLeft></FaArrowLeft> Back To All
            </button>
          </Link>
        </section>

        <section className="w-full md:w-3/12">
          <RightSide></RightSide>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ViewDetails;
