import backgroundImg from "../assets/backgroundImg.jpg";
import backgroundImg2 from "../assets/backgroundImg2.jpg";
import ImageMarquee from "../Components/ImageMarquee";
import Footer from "../Components/Footer";
import TravelCarousel from "../Components/TravelCarousel";
import Navbar from "../components/Navbar";

import hotels from "../assets/hotels&resorts.png";
import dining from "../assets/Dining.png";
import privatejet from "../assets/privatejet.png";
import residences from "../assets/Residences.png";
import villas from "../assets/Villas.png";
import yachts from "../assets/Yachts.png";

import destination from "../assets/destination.png";
import stays from "../assets/stays.png";
import journeys from "../assets/journeys.png";

import Luxury1 from "../assets/Luxury1.png";
import Luxury2 from "../assets/Luxury2.png";

const HomePage = () => {
  const items = [
    { id: 1, image: hotels, text: "All Hotes & Resorts" },
    { id: 2, image: residences, text: "Residences" },
    { id: 3, image: villas, text: "Villa & Residence" },
    { id: 4, image: dining, text: "Dining" },
    { id: 5, image: privatejet, text: "Private Jet" },
    { id: 6, image: yachts, text: "Yachts" },
  ];
  return (
    <>
      <div
        className="min-h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>

        <Navbar />
        <h1 className="text-white text-7xl p-10 mt-2">
          Step Into a <br /> World of Discovery
        </h1>
        <p className="text-white p-10">
          Since our inception in 2013, we have kept one vision at the heart of
          our proposition, <br />
          to make the booking process smooth and seamless for our esteemed
          partners,
          <br /> to sell to their clients at an impressive gain. As a forward
          thinking destination <br />
          management company, we pride ourselves on simplifying the lives of our
          partners. <br /> Your needs come first, always. This is why we work
          effortlessly, so you can focus on <br />
          what matters, being the best in your region.
        </p>

        <div className="flex justify-evenly items-center mt-20">
          {items.map((val) => {
            return (
              <div
                key={val.id}
                className="flex flex-col items-center text-center"
              >
                <img src={val.image} alt={val.text} className="object-cover" />
                <p className="text-white text-sm">{val.text}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full px-10 py-10">
          <hr className="border-white border-t-1 opacity-40" />
        </div>
      </div>
      {/* start scroll from here */}
      <div className="bg-[#F5F0E8] py-20 px-8 text-center">
        <h1 className="text-4xl font-semibold mb-4 text-black">
          Tourists Travel Bureau <br /> Journeys' World
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Tourists Travel Bureau is dedicated to providing spectacular wholesale
          services throughout the GCC and beyond. Our journey towards becoming a
          leading B2B wholesaler is rooted in foundations of reliability,
          professionalism, speed, and most importantly, trust.
        </p>
        <div className="bg-[#F5F0E8] py-16 px-8">
          <div className="flex justify-center items-center gap-8">
            {[
              {
                img: destination,
                title: "Destinations",
                desc: "We can arrange remarkable travel experiences on all seven continents. Where do you want to go?",
              },
              {
                img: journeys,
                title: "Journeys",
                desc: "Find your dream journey, whether you want to travel privately or with a group, by train, boat or plane.",
              },
              {
                img: stays,
                title: "Stays",
                desc: "Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.",
              },
            ].map((item, index) => (
              <div key={index} className="relative w-[500px] h-[600px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-semibold mb-4 mt-14 text-black">
          Exclusivity with Simplicity
        </h1>
        <div className="bg-[#F5F0E8] py-16 px-8">
          <div className="flex justify-center items-start gap-4 flex-wrap">
            {[
              {
                img: Luxury1,
                desc: "Personalized Luxury Gateways",
              },
              {
                img: Luxury2,
                desc: "The Luxury Stay Collection",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-[770px] h-[400px] shadow-md"
              >
                <img
                  src={item.img}
                  alt={`luxury-${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="bg-black/30 p-4 max-w-5xl flex justify-start">
                    <p className="text-base font-bold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-20 text-center">
        <h2 className="text-3xl font-semibold text-black">
          What kind of trip are you looking for?
        </h2>
        <ImageMarquee />
        <button className="px-8 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300">
          View All Journeys
        </button>
      </div>
      <TravelCarousel />
      <div
        className="relative min-h-[500px] bg-cover bg-center bg-[#F5F0E8] bg-no-repeat flex items-center justify-center mb-16"
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
      <Footer />
    </>
  );
};

export default HomePage;
