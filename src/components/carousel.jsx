import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export const Carousel = () => {
  const carouselData = [
    { title: "Image 1", largeImage: "/img/carousel/cnc1.jpeg" },
    { title: "Image 2", largeImage: "/img/carousel/cnc2.webp" },
    { title: "Image 3", largeImage: "/img/carousel/cnc3.jpeg" },
    { title: "Image 4", largeImage: "/img/carousel/cnc4.jpg" },
    { title: "Image 5", largeImage: "/img/carousel/cnc5.jpeg" },
  ];

  return (
    <div id="Carousel" className="text-center w-full">
      <div className="section-title-carousel">
        <h2>Our Work</h2>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {carouselData.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="image-box">
                <img src={d.largeImage} alt={d.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
