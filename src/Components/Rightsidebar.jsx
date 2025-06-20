import { X, MessageCircle } from "lucide-react";

const Rightsidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#F5F0E8] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Book your Stay
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-full pb-20">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your Name"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="tel"
                name="contactNumber"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Contact"
              />
            </div>

            <div>
              <input
                type="text"
                name="country"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Country"
              />
            </div>

            <div>
              <input
                type="text"
                name="city"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="City"
              />
            </div>

            <div>
              <textarea
                name="howCanWeHelp"
                rows={1}
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <input
                type="text"
                name="securityToken"
                className="w-full px-3 py-2 bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Security Token"
              />
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200">
              Enquire Now
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600 mb-4">
              Do you want more information please contact this number or message
              direct via whatsapp
            </p>

            <button className="flex items-center justify-center mx-auto bg-green-500 hover:bg-green-600 text-white p-6 rounded-full transition-colors duration-200">
              <MessageCircle size={20} />
            </button>

            <p className="text-xs text-gray-600 mt-8">Whatsapp chat</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
