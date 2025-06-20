import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import privateEstates from "../assets/places/privateEstates.png";
import safarilodges from "../assets/places/safarilodges.png";
import Villas from "../assets/places/Villas.png";
import Lakes from "../assets/places/Lakes.png";

const TravelCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      img: privateEstates,
      title: "Private Estates",
      desc: "We can arrange remarkable travel experiences on all seven continents. Where do you want to go?",
    },
    {
      img: Villas,
      title: "Villas",
      desc: "Find your dream journey, whether you want to travel privately or with a group, by train, boat or plane.",
    },
    {
      img: safarilodges,
      title: "Safari Lodges",
      desc: "Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.",
    },
    {
      img: Lakes,
      title: "Lakes",
      desc: "Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < items.length - 2 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="bg-[#F5F0E8] py-20 px-8 text-center">
      <h1 className="text-4xl font-semibold mb-4 text-black">
        Discover our remarkable <br /> moments and places
      </h1>

      {/* Navigation arrows */}
      <div className="flex justify-end items-center mb-8 px-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 mr-4"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Image carousel */}
      <div className="flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-2"
          style={{ transform: `translateX(-${currentIndex * 520}px)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-[500px] h-[600px]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white rounded-lg">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelCarousel;
