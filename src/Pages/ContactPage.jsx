import React from "react";
import backgroundImg4 from "../assets/backgroundImg4.jpg";
import ContactpageImg from "../assets/contactpageImg.png";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <>
      <div
        className="min-h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage: `url(${backgroundImg4})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-opacity-20"></div>
        <Navbar />
        <h1 className="relative z-10 text-white text-center text-7xl p-10 mr-8 mt-20">
          Contact Us
        </h1>
        <p className="relative z-10 text-white text-center text-lg mr-8 mt-2">
          Whether you’re ready to start planning your next trip, or simply want
          to find out more about our destinations, <br /> you can get in touch with us
          using the number below, or by requesting a quote online.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
        <div className="w-full md:w-1/2 h-auto">
          <img
            src={ContactpageImg}
            alt="Contact"
            className="w-full h-1200 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-left space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            Talk to our Experts
          </h2>
          <p className="text-lg text-gray-600">call us at:</p>
          <p className="text-md text-gray-500">+44 (0) 77 3220 0036</p>
          <p className="text-md text-gray-500">+44 (0) 77 3220 0036</p>
          <p className="text-md text-gray-500">reservations@ttbuk.co.uk</p>

          <p className="text-lg text-gray-600">Office Timings:</p>
          <p className="text-md text-gray-500">Mon – Fri: 8am – 6pm</p>
          <p className="text-md text-gray-500">Sat: 9am – 1pm</p>
          <p className="text-md text-gray-500">Sun: 10am – 2pm</p>

          <button className="px-6 py-3 bg-gray-100 text-black font-semibold rounded-3xl hover:bg-gray-300">
            Enquire Now
          </button>
        </div>
      </div>
      <div className="py-8 px-8">
        <p>
          No matter what you are searching for, Tourists Travel Bureau has it
          all, with competitively priced services of the highest possible
          calibre. <br /> We have a dedicated team of specialists working seven
          days a week, ensuring that your needs can be met around the clock.{" "}
          <br /> Get in touch at any time for more. The world is your oyster,
          and we are here to help you unlock it.
        </p>
        <br />
        <p>
          If you are interested in joining our team, please send us your
          curriculum vitae and covering letter by email to info@ttbuk.co.uk
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
