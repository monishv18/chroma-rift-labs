import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered Chat App",
      description: "Real-time messaging application with AI integration for smart responses and content moderation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Socket.io", "Python", "OpenAI", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive portfolio website with 3D animations, dark mode, and performance optimizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative project management tool with real-time updates, file sharing, and team analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      tags: ["Vue.js", "Firebase", "TypeScript", "PWA"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and design principles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group relative ${project.featured ? 'lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass rounded-2xl overflow-hidden hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        <Button variant="hero" size="sm" className="group/btn">
                          <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                        <Button variant="glass" size="sm" className="group/btn">
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                      </div>
                    </motion.div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-sm bg-background/50 rounded-full text-muted-foreground"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: (index * 0.2) + (tagIndex * 0.05) + 0.5 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <Button variant="gradient" size="lg" className="group">
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;