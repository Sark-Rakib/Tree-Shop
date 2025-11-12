import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HeroSwiper = () => {
  const [trees, setTrees] = useState([]);

  // JSON data fetch
  useEffect(() => {
    fetch("/treeDetails.json")
      .then((res) => res.json())
      .then((data) => setTrees(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="w-11/12 mx-auto"
        >
          {trees.map((tree) => (
            <SwiperSlide key={tree.id} className="relative flex justify-center">
              <img
                src={tree.image_url}
                alt={tree.title}
                className="w-full h-[400px] object-cover opacity-80"
              />
              <h3 className="absolute inset-0 flex justify-center items-center text-white text-3xl font-semibold">
                {tree.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSwiper;
