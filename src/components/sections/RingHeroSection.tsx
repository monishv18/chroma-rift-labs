import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";

const RingHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden diamond-pattern">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl lg:text-8xl font-thin leading-tight bg-gradient-to-r from-golden-primary to-silver-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Diamond
            <span className="block bg-gradient-to-r from-silver-primary to-golden-secondary bg-clip-text text-transparent font-light">Perfection</span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Precision-cut diamonds set in golden silver perfection. 
            A masterpiece that reflects your exceptional taste.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              className="bg-gradient-to-r from-golden-primary to-golden-secondary hover:shadow-glow-golden text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Buy Now - $2,999
            </Button>
            <Button 
              variant="outline" 
              className="border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-primary-foreground px-8 py-6 text-lg transition-all duration-300"
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
            {/* Diamond Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-diamond opacity-20 blur-3xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.4 : 0.2,
                rotate: isHovered ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Diamond Ring Container */}
            <motion.div
              className="relative w-96 h-96 rounded-full flex items-center justify-center"
              animate={{
                rotateY: isHovered ? 360 : 0,
                rotateZ: 360,
              }}
              transition={{ 
                rotateY: { duration: 2, ease: "easeInOut" },
                rotateZ: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              {/* Diamond Shimmer Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from 0deg, 
                    transparent 30%, 
                    hsl(var(--golden-primary) / 0.3) 50%, 
                    transparent 70%,
                    hsl(var(--silver-primary) / 0.3) 80%,
                    transparent 90%)`,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
                animate={{
                  rotate: isHovered ? 720 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Diamond Ring */}
              <div className="w-64 h-64 flex items-center justify-center shadow-2xl" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
                <div className="w-full h-full bg-gradient-diamond flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-ash-medium to-ash-dark flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
                    <div className="w-16 h-16 bg-gradient-diamond" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
                  </div>
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
          className="w-6 h-10 border-2 border-golden-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-golden-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RingHeroSection;