import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import ParticleBackground from "../ParticleBackground";
import FloatingIcons from "../FloatingIcons";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <FloatingIcons />
      
      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-lg text-muted-foreground font-medium">
            👋 Hello, I'm
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 relative"
        >
          <span className="hero-text-stroke gradient-text">
            Your Name
          </span>
          
          {/* Animated underline */}
          <motion.svg
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-4"
            viewBox="0 0 400 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M20 10 C 100 5, 300 15, 380 10"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-8 text-muted-foreground"
        >
          <span className="gradient-text">Full Stack Developer</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I craft beautiful, performant web applications with modern technologies. 
          Passionate about creating digital experiences that make a difference.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Button variant="hero" size="lg" className="group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Let's Work Together
          </Button>
          
          <Button variant="glass" size="lg" className="group">
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="#"
            className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="#"
            className="p-3 glass rounded-full hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;