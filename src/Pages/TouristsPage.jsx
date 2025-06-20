import React from "react";
import backgroundImg2 from "../assets/backgroundImg2.jpg";
import backgroundImg3 from "../assets/backgroundImg3.png";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

import travel from "../assets/TouristsPage/travel.png";
import travel2 from "../assets/TouristsPage/travel2.png";
import travel3 from "../assets/TouristsPage/travel3.png";
import travel4 from "../assets/TouristsPage/travel4.png";
import travel5 from "../assets/TouristsPage/travel5.png";

import label1 from "../assets/TouristsPage/label1.png";
import label2 from "../assets/TouristsPage/label2.png";
import label3 from "../assets/TouristsPage/label3.png";
import label4 from "../assets/TouristsPage/label4.png";
import label5 from "../assets/TouristsPage/label5.png";
import label6 from "../assets/TouristsPage/label6.png";
import label7 from "../assets/TouristsPage/label7.png";
import label8 from "../assets/TouristsPage/label8.png";
import label9 from "../assets/TouristsPage/label9.png";
import label10 from "../assets/TouristsPage/label10.png";
import label11 from "../assets/TouristsPage/label11.png";
import label12 from "../assets/TouristsPage/label12.png";

const TouristsPage = () => {
  const travelImgs = [
    { img: travel, title: "Travel your way" },
    { img: travel2, title: "With your all the way" },
    { img: travel3, title: "Travel thoughtfully" },
    { img: travel4, title: "TTB Family" },
  ];
  const lastSectionImgs = [
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    label7,
    label8,
    label9,
    label10,
    label11,
    label12,
  ];
  return (
    <>
      <div
        className="min-h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImg3})`,
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        <Navbar />
        <h1 className="text-center text-white text-7xl p-32 mt-6">
          Tourists Travel Bureau <br />
          Travelled Since 1820
        </h1>
      </div>

      <div className="bg-[#F5F0E8] py-20 px-8 text-center text-xl">
        We have been spinning dreams into remarkable adventures for discerning
        travellers for more <br /> than 60 years, ever since our founder
        pioneered the first modern luxury safari in Africa. <br /> Today we are
        the world’s leading travel company, taking guests to the earth’s <br />{" "}
        wildest frontiers on all seven continents.
      </div>

      <div className="bg-[#F5F0E8] py-16 px-8">
        <div className="flex justify-center items-center gap-4">
          {travelImgs.map((val, idx) => (
            <div key={idx} className="relative text-center w-[500px] h-[600px]">
              <img
                src={val.img}
                alt={val.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold">{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F5F0E8] py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={travel5}
              alt="Feature"
              className="w-3/4 h-auto object-cover"
            />
          </div>
          <div className="text-gray-900 space-y-4">
            <h2 className="text-6xl font-bold">
              Our Journey Began <br />
              in UK
            </h2>
            <p className="text-lg">
              From that first humble safari camp in 1962, Tourists Travel Bureau
              has grow <br /> into the world’s leading experiential travel
              company, creating agenda <br /> setting adventures in more than
              100 countries. Today, our portfolio of <br /> places to stay
              encompasses safari lodges and mobile camps in countries <br />{" "}
              across Africa, Private Estates to rent in Tuscany, elegant
              riverboats on the <br /> Nile and the Amazon.
            </p>
            <p className="text-lg">
              Our global powerhouse of innovators – destination experts,
              brilliant local <br /> guides, specialists in science and culture,
              well-connected super-fixers – <br /> continually strive to seek
              out those truly original, exclusive experiences <br /> beyond the
              reach of most travellers.
            </p>
            <p className="text-lg">
              We are committed to advancing travel as a force for good. Every
              journey <br /> booked with us helps support A&K Philanthropy
              initiatives, positively <br /> impacting local communities in the
              wilderness areas where we travel. <br /> Geoffrey Kent’s founding
              principles – that travel should be awe-inspiring, <br /> exciting,
              memorable and considered – remain our motivation today. And <br />{" "}
              though we have grown into an international company spanning all
              seven <br /> continents, we still share that one same mission. To
              craft the adventure of <br /> a lifetime, every time.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative min-h-[500px] bg-cover bg-center bg-[#F5F0E8] bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImg2})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 text-center text-white px-8 max-w-4xl">
          <p className="text-3xl mb-8">
            We’re not just in the travel business <br /> we’re in the business
            of making dreams a reality..!
          </p>
        </div>
      </div>
      <div className="bg-[#F5F0E8] py-16 px-8">
        <h1 className="text-4xl text-center font-semibold mb-16 text-black">
          Recognized Worldwide as a Leader <br /> in Luxury Travel
        </h1>

        <div className="space-y-12">
          <div className="flex flex-wrap justify-center gap-6">
            {lastSectionImgs.slice(0, 6).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="img"
                className="w-[150px] h-[150px] object-cover"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {lastSectionImgs.slice(6, 10).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="img"
                className="w-[150px] h-[150px] object-cover"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {lastSectionImgs.slice(10).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="img"
                className="w-[150px] h-[150px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TouristsPage;
