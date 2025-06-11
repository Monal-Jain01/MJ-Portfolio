import React, { useState, useRef, useEffect } from "react";
import day from '../assets/day.png'
import react from '../assets/react.svg'
import logo_black from '../assets/logo-black.png'
import myPhoto from '../assets/myPhoto.jpg'
import night from '../assets/night.png'

// Sample slide data (replace with your images)
const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: {myPhoto},
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: {logo_black},
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: day,
  },
];

const CSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const thumbnailRefs = useRef([]);

  // Focus management: Focus the active thumbnail when the slide changes
  useEffect(() => {
    thumbnailRefs.current[currentSlide]?.focus();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Handle keyboard navigation for arrows
  const handleKeyDown = (e, action) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  // Handle keyboard navigation for thumbnails
  const handleThumbnailKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setCurrentSlide(index);
    }
  };

  return (
    <div
      className="relative bg-black text-white min-h-screen flex items-center justify-center"
      role="region"
      aria-label="Image Slider"
    >
      {/* Main Slide */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-between px-10"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        aria-live="polite"
      >
        {/* Left Arrow */}
        <button
          ref={prevButtonRef}
          onClick={prevSlide}
          onKeyDown={(e) => handleKeyDown(e, prevSlide)}
          className="text-4xl text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous Slide"
        >
          ←
        </button>

        {/* Slide Content */}
        <div className="absolute left-10 top-20">
          <h1 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-lg max-w-md">{slides[currentSlide].description}</p>
        </div>

        {/* Right Arrow */}
        <button
          ref={nextButtonRef}
          onClick={nextSlide}
          onKeyDown={(e) => handleKeyDown(e, nextSlide)}
          className="text-4xl text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Thumbnails */}
      <div
        className="absolute bottom-10 flex space-x-4"
        role="tablist"
        aria-label="Slide Thumbnails"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            onClick={() => setCurrentSlide(index)}
            onKeyDown={(e) => handleThumbnailKeyDown(e, index)}
            className={`w-40 h-28 bg-cover bg-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
              currentSlide === index ? "border-2 border-white" : ""
            }`}
            role="tab"
            aria-selected={currentSlide === index}
            aria-controls={`slide-${slide.id}`}
            tabIndex={currentSlide === index ? 0 : -1}
            aria-label={`Show ${slide.title}`}
          >
            <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center text-sm">
              {slide.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CSlider;