import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Material", value: "18K Solid Gold" },
  { label: "Weight", value: "12.5 grams" },
  { label: "Width", value: "6mm" },
  { label: "Finish", value: "High Polish" },
  { label: "Size Range", value: "4-12 (US)" },
  { label: "Certification", value: "GIA Certified" }
];

const RingSpecsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-thin text-white mb-12">
              Technical <span className="text-[#D4AF37]">Specifications</span>
            </h2>
            
            <div className="space-y-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex justify-between items-center py-4 border-b border-gray-800"
                >
                  <span className="text-gray-400 text-lg">{spec.label}</span>
                  <span className="text-white font-semibold text-lg">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Large Ring Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-20 blur-3xl rounded-full" />
              
              {/* Ring Detail Image */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#B8941F] flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RingSpecsSection;