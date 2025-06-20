import React from "react";
import { X, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Leftsidebar = ({ isOpen, onClose }) => {
  const navItems = ["Destinations", "Journeys", "Stays", "Stories"];
  const menuItems = [
    "The Exclusive Collection",
    "Idea",
    "Offers",
    "Journey Finder",
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants}
            initial="open"
            animate="open"
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />

          <motion.div
            variants={sidebarVariants}
            initial="open"
            animate="open"
            className="fixed top-0 left-0 h-full w-[600px] z-50 shadow-2xl"
          >
            <div
              className="h-full backdrop-blur-xl border-r border-white/20 flex flex-col justify-between"
              style={{ backgroundColor: "#F5F0E8" }}
            >
              <div>
                <motion.div
                  className="flex items-center justify-between p-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.button
                    onClick={onClose}
                    className="text-black hover:text-red-500 transition-all duration-300 p-2 hover:bg-red-50 rounded-full"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                <div className="p-6 border-b border-black/10">
                  <motion.h3
                    className="text-sm font-semibold text-gray-600 mb-4 ml-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Menu's
                  </motion.h3>
                  <motion.ul
                    className="space-y-2"
                    variants={containerVariants}
                    initial="open"
                    animate="open"
                  >
                    {navItems.map((item, index) => (
                      <motion.li key={index} variants={itemVariants}>
                        <motion.a
                          href="#"
                          className="group flex items-center text-black text-3xl font-serif py-2 px-4 transition-all duration-300 hover:pl-8 hover:bg-black/5 rounded-r-full"
                          whileHover={{ x: 8, scale: 1.02 }}
                        >
                          <span className="transition-all duration-300">
                            {item}
                          </span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-sm font-semibold text-gray-600 mb-4 ml-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Discover
                  </motion.h3>
                  <motion.ul
                    className="space-y-2"
                    variants={containerVariants}
                    initial="open"
                    animate="open"
                  >
                    {menuItems.map((item, index) => (
                      <motion.li key={index} variants={itemVariants}>
                        <motion.a
                          href="#"
                          className="flex items-center text-gray-600 transition-all duration-300 text-base font-medium py-3 px-4 mb-2 rounded-lg"
                        >
                          <motion.span>{item}</motion.span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              {/* 5-Star Rating */}
              <div className="p-6 flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-500 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Leftsidebar;
