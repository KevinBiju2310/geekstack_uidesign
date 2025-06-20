import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

import France from "../assets/France.png";
import privatetravel from "../assets/parispage/privatetravel.png";
import smallgroup from "../assets/parispage/smallgroup.png";
import smalljet from "../assets/parispage/smalljet.png";
import expedition from "../assets/parispage/expedition.png";
import scorpious from "../assets/parispage/scorpious.png";
import mandonaa from "../assets/parispage/mandonaa.png";
import epi from "../assets/parispage/epi.png";
import sussurro from "../assets/parispage/sussurro.png";
import gundari from "../assets/parispage/gundari.png";
import casacriollo from "../assets/parispage/casacriollo.png";
import casaantoneita from "../assets/parispage/casaantoneita.png";
import mexico from "../assets/parispage/mexico.png";

const FrancePage = () => {
  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      <Navbar theme="light" />
      <div className="p-8 text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="space-y-4">
          <nav className="text-sm text-gray-600">
            Home / All Destinations / Europe / France{" "}
            <span className="text-gray-900 font-semibold">France</span>
          </nav>
          <h1 className="text-8xl font-bold">
            Luxury Holidays <br />
            in Paris
          </h1>
          <p>View All Journeys</p>
          <p>
            From its golden Mediterranean beaches to its Alpine peaks, France
            thrills and captivates. Paris is a decadent visual feast, a city
            where style is as sacred as Notre-Dame’s bells. Parisians have
            finessed the art of genteel lounging, their glasses filled with the
            best of Burgundy or Champagne – regions whose vine-covered hills
            roll away to the south and east.
          </p>
          <button className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all">
            Explore Now
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={France}
            alt="France"
            className="w-3/4 h-auto object-cover"
          />
        </div>
      </div>
      <div className=" py-8">
        <h1 className="text-3xl text-center font-semibold mb-8">
          Ways to Explore
        </h1>
        <div className="flex justify-center gap-1 px-8">
          {[
            {
              img: privatetravel,
              title: "Private Travel",
              desc: "Every private journey we create is unique. Tell us where you want to travel and we will craft your dream adventure; or be inspired by our collection of expertly designed Tailormade Journeys, customizable to suit you",
            },
            {
              img: smallgroup,
              title: "Small Group Journeys",
              desc: "Our guided journeys redefine the concept of the group tour, bringing together a select collective of like-minded souls seeking shared adventures – led by best-in-the-business experts who bring every destination to life.",
            },
            {
              img: smalljet,
              title: "Small Jet Journeys",
              desc: "Experience more than you thought possible in a single itinerary on one of our small-group journeys by privately chartered jet – the optimum way to travel around the planet’s most thrilling and remote destinations.",
            },
            {
              img: expedition,
              title: "Expedition Cruises",
              desc: "The greatest adventures you can have at sea, on state-of-the-art boats that redefine expedition cruising – sailing through Antarctica’s soul-stirring icescapes, island-hopping in Indonesia, or a voyage of discovery in the Galápagos.",
            },
          ].map((item, index) => (
            <div key={index} className="w-full h-full p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
              <button className="text-cyan-600 font-medium hover:underline">
                View All
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          See Where TTB Can Take You
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
          {[
            {
              img: scorpious,
              title: "Scorpios Bodrum",
              desc: "Bodrum, Turkey",
            },
            {
              img: mandonaa,
              title: "One & Only Mandarina",
              desc: "Bodrum, Turkey",
            },
            {
              img: epi,
              title: "Epi 1959",
              desc: "Bodrum, Turkey",
            },
            {
              img: sussurro,
              title: "Sussurro",
              desc: "Bodrum, Turkey",
            },
            {
              img: gundari,
              title: "Gundari",
              desc: "Bodrum, Turkey",
            },
            {
              img: casacriollo,
              title: "Casa Criollo",
              desc: "Bodrum, Turkey",
            },
            {
              img: casaantoneita,
              title: "Casa Antonieta",
              desc: "Bodrum, Turkey",
            },
            {
              img: mexico,
              title: "Oaxaca City, Mexico",
              desc: "Bodrum, Turkey",
            },
          ].map((item, index) => (
            <div key={index} className="w-full p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h- object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrancePage;
