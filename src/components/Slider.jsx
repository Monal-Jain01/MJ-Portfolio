// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

function Slider({ images }) {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }} className='border-y border-blue-500 rounded-lg p-4 shadow-lg'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
        style={{ borderRadius: "12px" }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className='text-center m-4 mb-8'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='font-bold m-4 text-xl'>{img.title}</h3>
                <button 
                onClick={() => window.open(img.plink)}
                className='bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg hover:opacity-80 transition duration-300'>
                  View
                </button>
              </div>
              
              <p className='text-justify'>{img.description}</p>
            </div>
            <img
              className='mt-20 mb-8 border w-[80%] ml-8 md:ml-14'
              src={img.image}
              alt={`Project slide ${idx + 1}`}
              style={{
                height: "280px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;