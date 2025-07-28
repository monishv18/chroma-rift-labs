import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Palette, Globe, Cpu, Shield } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "WebSockets"],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Palette,
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Framer"],
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Cpu,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Security",
      skills: ["OAuth", "JWT", "Encryption", "OWASP", "Penetration Testing"],
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
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
              <span className="gradient-text">My Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass p-6 rounded-2xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-sm bg-background/50 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) + 0.5 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive skill bars */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Proficiency Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "React / TypeScript", level: 95 },
                { name: "Node.js / Python", level: 90 },
                { name: "UI/UX Design", level: 85 },
                { name: "Cloud Platforms", level: 80 },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;