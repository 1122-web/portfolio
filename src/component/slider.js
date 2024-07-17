

// export default Slider;
import React,  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import client1Image1 from "../assets/client1.jpg";
import client1Image2 from "../assets/client2.jpg";
import client1Image3 from "../assets/john.jpg";
import client1Image4 from "../assets/client4.jpg";
const slides = [
  {
    id: 1,
    content:
      "Appreciate the very talented work. I am looking forward to working with HTdots next time as well.",
    bgColor: "bg-grayHeart",
    clientName: "patricktauma",
    clientImage: client1Image1, // Replace with the actual image source
  },
  {
    id: 2,
    content:
      "Top-notch work! Great communication, kills, and commitment. Highly recommend!",
    bgColor: "bg-grayHeart",
    clientName: "kosmaspapd",
    clientImage: client1Image2, // Replace with the actual image source
  },
  {
    id: 3,
    content:
      "TOP OF THE TOP 10000% FULL RECOMMENDED!!!! Professional work do more than we deal with no problem",
    bgColor: "bg-grayHeart",
    clientName: "John Doe",
    clientImage: client1Image3, // Replace with the actual image source
  },
  {
    id: 4,
    content:
      "This company has extraordinary skill in communications and he has done my work extremely well.",
    bgColor: "bg-grayHeart",
    clientName: "James Smith",
    clientImage: client1Image4, // Replace with the actual image source
  },
];
const Slider = () => {

  const swiperRef = useRef(null);
  const goToPrevious = () => {
    if (swiperRef.current) {
      swiperRef.current?.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current?.slideNext();
    }
  };
  return (
    <>
    <Swiper
     ref={swiperRef}
     modules={[Navigation]}
     onSwiper={(swiper) => { swiperRef.current = swiper; }}
      slidesPerView={2}
      loop={true}
      // spaceBetween={10}
      breakpoints={{   320: {
        slidesPerView: 1, // One card on small screens
      },
      375: {
        slidesPerView: 1, // One card on medium screens
      },
        425: {
          slidesPerView: 1, // One card on small screens
        },
        640: {
          slidesPerView: 1, // One card on small screens
        },
        768: {
          slidesPerView: 1, // One card on medium screens
        },
        1024: {
          slidesPerView: 2, // Two cards on larger screens
        },
      }}
      className="h-full w-[1150px] md:w-[800px]  sm:w-[800px] xsm:w-[600px] xxsm:w-[400px] xxxsm:w-[400px]  mt-10 pt-10 "
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={`${slide.bgColor} h-[600px] border rounded-2xl pt-4 mx-1`}>
          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-blue pl-2 top-0 mr-2 h-12 w-12"
            />
            <span className="text-textgray pt-1 text-xl pr-5 text-justify break-words">
              {slide.content}
            </span>
          </div>
          <div className="flex items-start mt-2">
            <img
              src={slide.clientImage}
              alt={slide.clientName}
              className="w-12 h-12 rounded-full ml-5 mt-10"
            />
            <span className="text-black-300 text-lg mt-10 pl-10">
              {slide.clientName}
            </span>
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
   
    
    <div className="flex justify-center ml-32 mt-8">
        <button
          onClick={goToPrevious}
          className="text-blue text-5xl p-2"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="text-blue p-2 text-5xl"
        >
          &gt;
        </button>
      </div>
     </>
  );
};


export default Slider;
