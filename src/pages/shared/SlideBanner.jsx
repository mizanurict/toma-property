/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const SlideBanner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-16 text-center">
              <h1 className="text-2xl font-bold ">Modern Condo with City Views</h1>
              <p className="opacity-85 mx-44">Stunning condo located in the heart of the city with panoramic views. Features spacious living area, modern kitchen, and luxurious amenities.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.ibb.co/J7Xq5Pf/512564717.jpg" alt="" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          <div className="absolute top-16 text-center">
              <h1 className="text-2xl font-bold ">Luxury Penthouse with Ocean Views</h1>
              <p className="opacity-85 mx-48">Exquisite penthouse overlooking the ocean, featuring lavish interiors, private terrace, and exclusive amenities.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.ibb.co/ZH61Vqc/Contemporary-Penthouse-Miami-Smiros-Smiros-02-1-Kindesign.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
          <div className="absolute top-16 text-center">
              <h1 className="text-2xl font-bold  ">Modern Apartment with Skyline Views</h1>
              <p className="opacity-90 mx-48">Sleek apartment with breathtaking skyline views, featuring contemporary design, upscale finishes, and convenient access to city attractions.</p>
            </div>
            <img className="w-full h-[220px] md:h-[360px] lg:h-[480px]" src="https://i.ibb.co/Bs1BC73/9cf539d4020a13a30962ca323e06135f.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideBanner;
