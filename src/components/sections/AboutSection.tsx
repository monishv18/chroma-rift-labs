import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass p-8 rounded-2xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Passionate Developer & Problem Solver
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 3 years of experience in full-stack development, I specialize in creating 
                  scalable web applications using modern technologies. My passion lies in solving 
                  complex problems and building user-centric solutions that make a real impact.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in continuous learning and staying up-to-date with the latest industry 
                  trends. When I'm not coding, you can find me contributing to open-source projects, 
                  writing technical blogs, or exploring new frameworks and technologies.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 glass rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Animated background shapes */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tl from-accent/20 to-primary/20 rounded-2xl transform -rotate-3"></div>
                
                {/* Main content card */}
                <div className="relative glass p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium">3+ Years</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Projects</span>
                      <span className="font-medium">50+ Completed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Coffee</span>
                      <span className="font-medium">∞ Cups</span>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-center italic">
                      "Code is poetry written in logic."
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;