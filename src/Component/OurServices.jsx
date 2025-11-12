import React, { useEffect, useState } from "react";
import { FaTree, FaLeaf, FaTruck, FaTools, FaSeedling } from "react-icons/fa";
const iconMap = {
  FaTree: <FaTree className="text-green-600 text-2xl mb-4" />,
  FaLeaf: <FaLeaf className="text-green-600 text-2xl mb-4" />,
  FaTruck: <FaTruck className="text-green-600 text-2xl mb-4" />,
  FaTools: <FaTools className="text-green-600 text-2xl mb-4" />,
  FaSeedling: <FaSeedling className="text-green-600 text-2xl mb-4" />,
};

const OurServices = () => {
  const [service, SetService] = useState([]);
  useEffect(() => {
    fetch("/ourService.json")
      .then((res) => res.json())
      .then((data) => SetService(data));
  }, []);
  return (
    <div>
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Our Services</h2>
          <p className="text-gray-600 mt-2">
            We provide a variety of eco-friendly and professional tree services
            for your environment.
          </p>
        </div>

        <div className="container mx-auto grid gap-8 px-5 md:grid-cols-2">
          {service.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {iconMap[service.icon]}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
