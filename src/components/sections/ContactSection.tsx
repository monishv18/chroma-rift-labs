import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Coffee } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourname.com",
      action: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      action: "#",
    },
    {
      icon: Coffee,
      title: "Coffee Chat",
      value: "Let's grab coffee!",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
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
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass border-primary/20 focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass border-primary/20 focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass border-primary/20 focus:border-primary resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ready to start your next project? I'm always excited to work on new challenges and bring innovative ideas to life. 
                  Let's create something amazing together!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors duration-200 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun fact card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 1 }}
                className="glass p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-semibold gradient-text mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. Let's make something awesome!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;