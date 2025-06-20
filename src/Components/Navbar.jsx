import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/logo2.png";
import LeftSidebar from "../Components/Leftsidebar";
import Rightsidebar from "../Components/Rightsidebar";

const Navbar = ({ theme = "dark" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBookingSidebarOpen, setIsBookingSidebarOpen] = useState(false);

  const navItems = [
    "Find Meaning",
    "Find Clarity",
    "Find new beginnings",
    "Find pause",
    "Find balance",
    "Find bliss",
    "Find joy",
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleBookingSidebar = () => {
    setIsBookingSidebarOpen(!isBookingSidebarOpen);
  };

  const closeBookingSidebar = () => {
    setIsBookingSidebarOpen(false);
  };

  const themeStyles = {
    dark: {
      nav: "backdrop-blur-sm",
      border: "border-white/10",
      text: "text-white",
      hover: "hover:text-cyan-400",
      menuButton: "text-white hover:text-cyan-400 hover:bg-white/10",
      getStartedButton: "bg-gray-400 hover:bg-gray-500 text-black",
    },
    light: {
      nav: "backdrop-blur-sm",
      border: "border-gray-200",
      text: "text-gray-900",
      hover: "hover:text-cyan-600",
      menuButton: "text-gray-900 hover:text-cyan-600 hover:bg-gray-100",
      getStartedButton: "bg-gray-600 hover:bg-gray-700 text-white",
    },
  };

  const currentTheme = themeStyles[theme];
  const logoSrc = theme === "light" ? Logo2 : Logo;

  return (
    <>
      <nav className={`top-0 left-0 right-0 ${currentTheme.nav}`}>
        <div className={`py-4 border-b ${currentTheme.border}`}>
          <Marquee
            pauseOnHover={true}
            speed={170}
            gradient={false}
            className={currentTheme.text}
          >
            {navItems.map((item, index) => (
              <span
                key={index}
                className={`mx-12 text-lg font-medium ${currentTheme.hover} transition-all duration-300 cursor-pointer inline-block tracking-wide`}
              >
                {item}
              </span>
            ))}
            {navItems.map((item, index) => (
              <span
                key={`duplicate-${index}`}
                className={`mx-12 text-lg font-medium ${currentTheme.hover} transition-all duration-300 cursor-pointer inline-block tracking-wide`}
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={toggleSidebar}
              className={`${currentTheme.menuButton} transition-all duration-300 p-2 rounded-lg transform hover:scale-110 active:scale-95`}
            >
              <Menu size={24} />
            </button>

            <div className={`flex items-center space-x-2 ${currentTheme.text}`}>
              <img
                src={logoSrc}
                alt="Logo"
                className="h-8 w-auto sm:h-10 md:h-12 object-contain"
              />
            </div>

            <button
              onClick={toggleBookingSidebar}
              className={`${currentTheme.getStartedButton} font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 hover:scale-105 active:scale-95`}
            >
              <span className="text-sm sm:text-base">Book your stay</span>
            </button>
          </div>
        </div>
      </nav>

      <LeftSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Rightsidebar
        isOpen={isBookingSidebarOpen}
        onClose={closeBookingSidebar}
      />
    </>
  );
};

export default Navbar;
