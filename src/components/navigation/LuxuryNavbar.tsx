import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const LuxuryNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/20" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-thin text-[#D4AF37] tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            LUXE
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <motion.a
              href="#hero"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
              whileHover={{ y: -2 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#features"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
              whileHover={{ y: -2 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#specs"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
              whileHover={{ y: -2 }}
            >
              Specifications
            </motion.a>
            <motion.a
              href="#contact"
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-light tracking-wide"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>

          {/* CTA Button */}
          <Button 
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold px-6 py-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default LuxuryNavbar;