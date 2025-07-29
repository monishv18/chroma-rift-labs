import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";

const RingHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl lg:text-8xl font-thin text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Eternal
            <span className="block text-[#D4AF37] font-light">Elegance</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Crafted with precision. Designed for perfection. 
            A timeless symbol of luxury and sophistication.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              Buy Now - $2,999
            </Button>
            <Button 
              variant="outline" 
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-6 text-lg transition-all duration-300"
            >
              View Details
            </Button>
          </motion.div>
        </motion.div>

        {/* Ring Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-20 blur-3xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.4 : 0.2,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Ring Container */}
            <motion.div
              className="relative w-96 h-96 rounded-full flex items-center justify-center"
              animate={{
                rotateY: isHovered ? 360 : 0,
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(212, 175, 55, 0.3) 50%, 
                    transparent 70%)`,
                }}
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Placeholder Ring Image */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8941F] flex items-center justify-center shadow-2xl">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RingHeroSection;