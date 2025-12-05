import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/1234567890",
      color: "text-green-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@scalebold.com",
      href: "mailto:hello@scalebold.com",
      color: "text-accent",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Francisco, CA",
      href: "#",
      color: "text-muted-foreground",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's Build </span>
            <span className="text-metallic-silver">Something</span>
            <br />
            <span className="text-metallic-rose">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your digital presence? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you looking to build? Any specific goals or timeline?"
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-6 text-lg rounded-2xl shadow-glow hover:shadow-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            {/* Quick Contact Methods */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold mb-6">Quick Contact</h3>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-secondary/30 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`p-3 rounded-xl bg-secondary/50 ${method.color}`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Our Promise</h4>
                  <p className="text-sm text-muted-foreground">
                    We respond to every inquiry within 24 hours. No automated responses—you'll hear 
                    directly from our team with a thoughtful reply tailored to your needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
