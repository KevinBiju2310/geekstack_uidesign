import React from "react";
import trip1 from "../assets/trips/trip1.png";
import trip2 from "../assets/trips/trip2.png";
import trip3 from "../assets/trips/trip3.png";
import trip4 from "../assets/trips/trip4.png";
import trip5 from "../assets/trips/trip5.png";
import trip6 from "../assets/trips/trip6.png";
import trip7 from "../assets/trips/trip7.png";
import trip8 from "../assets/trips/trip8.png";
import trip9 from "../assets/trips/trip9.png";

import Marquee from "react-fast-marquee";

const ImageMarquee = () => {
  const tripImages = [
    trip1,
    trip2,
    trip3,
    trip4,
    trip5,
    trip6,
    trip7,
    trip8,
    trip9,
  ];

  return (
    <div className="w-full py-16">
      <Marquee speed={50} gradient={false} pauseOnHover={true} direction="left">
        {tripImages.map((image, index) => (
          <div key={index} className="mx-2">
            <img
              src={image}
              alt={`Trip ${index + 1}`}
              className="h-60 w-80 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
