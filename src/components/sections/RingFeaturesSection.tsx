import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Award, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Gold",
    description: "18K solid gold with premium finish and lasting brilliance"
  },
  {
    icon: Award,
    title: "Master Crafted",
    description: "Hand-forged by master artisans with decades of experience"
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "Comprehensive coverage against manufacturing defects"
  },
  {
    icon: Sparkles,
    title: "Unique Design",
    description: "One-of-a-kind piece with exclusive artistic elements"
  }
];

const RingFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-thin text-white mb-6">
            Crafted to <span className="text-[#D4AF37]">Perfection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every detail meticulously designed to create a masterpiece that transcends time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RingFeaturesSection;