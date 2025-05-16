import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Transform Your Space with Premium Windows",
      subtitle: "Professional Installation for Homes and Businesses",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515466678546-d0f851801e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW5oYW5jZSUyMENvbWZvcnQlMjB3aXRoJTIwUXVhbGl0eSUyMEJsaW5kc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Enhance Comfort with Quality Blinds",
      subtitle: "Installation, Cleaning, and Repair Services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1682525920560-456050d28733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEV4cGVydCUyMFdpbmRvdyUyMFNvbHV0aW9ucyUyMGZvciUyMEV2ZXJ5JTIwU3BhY2V8ZW58MHx8MHx8fDA%3D",
      title: "Expert Window Solutions for Every Space",
      subtitle: "Reliable Service and High-Quality Materials",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop
        className="h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative z-20 h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {slide.title}
                  </h1>
                  <p  className="mt-6 text-lg leading-8 mb-5 text-gray-700">{slide.subtitle}</p>
                  <Link to={'/ContactUs10'} className="bg-[#EF750F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:text-black hover:bg-[#F0A251] transition duration-300">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prev-btn absolute top-1/2 left-4  z-30 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button className="next-btn absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200">
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default HeroCarousel;
