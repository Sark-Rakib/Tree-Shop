// src/Component/About.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [stats] = useState({
    treesSold: 1250,
    happyCustomers: 900,
    topProviders: 15,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">About Tree Shop</h1>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="https://i.ibb.co.com/HfXx3grL/photo-1501004318641-b39e6451bec6.jpg"
            alt="Tree Shop"
            className="w-full rounded shadow-lg"
          />
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At Tree Shop, our mission is to bring nature closer to your home. We
            provide a wide variety of trees—fruit, flower, indoor, medicinal,
            and shade trees—so you can enjoy the benefits of greenery every day.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>High-quality, hand-selected trees for your home or garden.</li>
            <li>Trusted and top-rated providers ensuring the best service.</li>
            <li>Easy ordering, home delivery, and guidance on tree care.</li>
            <li>Customer satisfaction is our top priority.</li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center py-10 bg-green-50 rounded shadow-md mb-10">
        <div data-aos="fade-up">
          <h3 className="text-4xl font-bold">{stats.treesSold}+</h3>
          <p className="text-gray-700">Trees Sold</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-4xl font-bold">{stats.happyCustomers}+</h3>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-4xl font-bold">{stats.topProviders}+</h3>
          <p className="text-gray-700">Top Providers</p>
        </div>
      </section>

      <section className="text-center py-10 bg-base-200 rounded shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Join Our Community</h3>
        <p className="text-gray-700">
          Whether you're a gardening enthusiast or a first-time buyer, Tree Shop
          connects you with the right trees and resources to help your green
          space thrive.
        </p>
      </section>
    </div>
  );
};

export default About;
