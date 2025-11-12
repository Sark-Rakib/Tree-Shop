import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import DetailsHeadhile from "./DetailsHeadhile";
import AOSAnimation from "./AOSAnimation";

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [steps, setSteps] = useState([]);

  // Fetch providers and steps data
  useEffect(() => {
    fetch("/topProvider.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.log(err));

    fetch("/steps.json")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Initialize AOS */}
      <AOSAnimation />

      <header data-aos="fade-down" className="bg-base-200">
        <Header />
        <Navbar />
        <section className="text-center py-5">
          <h2 data-aos="fade-up" className="text-3xl font-bold">
            Welcome to Tree Shop
          </h2>
          <p data-aos="zoom-in" className="text-gray-500 mt-2">
            Discover your favorite trees today! Bring nature closer to home.
          </p>
          <DetailsHeadhile />
        </section>
      </header>

      <main className="flex flex-col mt-10 md:flex-row w-11/12 mx-auto my-3 gap-5">
        <aside
          data-aos="fade-right"
          className="w-full md:w-3/12 md:sticky top-0 h-fit"
        >
          <LeftSide />
        </aside>

        <section
          data-aos="fade-up"
          className="w-full md:w-6/12 px-0 md:px-5 mb-5 md:mb-0"
        >
          <Outlet />
        </section>

        <aside
          data-aos="fade-left"
          className="w-full md:w-3/12 mb-5 md:sticky top-0 h-fit"
        >
          <RightSide />
        </aside>
      </main>

      {/* Top Rated Providers Section */}
      <section data-aos="fade-up" className="py-10 bg-green-50">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5">Top Rated Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {providers.map((provider) => (
              <div
                key={provider.id}
                className="bg-white shadow-md p-5 rounded text-center"
              >
                <img
                  className="w-24 h-24 mx-auto rounded-full mb-3"
                  src={provider.img}
                  alt={provider.name}
                />
                <h3 className="font-semibold text-xl">{provider.name}</h3>
                <p className="text-yellow-500 font-bold">
                  Rating: {provider.rating} ⭐
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section data-aos="fade-up" className="py-10 bg-base-200">
        <div className="w-11/12 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white shadow-md p-5 rounded text-center"
              >
                <div className="text-4xl font-bold mb-2">{step.id}</div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
