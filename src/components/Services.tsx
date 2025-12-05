import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MetallicFrame from "./MetallicFrame";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Code,
  Sparkles 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Stunning, responsive websites that captivate visitors and drive conversions. From sleek landing pages to complex web applications.",
    features: ["Custom Design", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that users love. iOS, Android, and everything in between.",
    features: ["iOS & Android", "React Native", "User-Centric"],
  },
  {
    icon: Palette,
    title: "Brand Identity & Design",
    description: "Complete visual identity systems that make your brand unforgettable. Logos, guidelines, and everything you need to stand out.",
    features: ["Logo Design", "Brand Guidelines", "Visual Systems"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that grow your online presence. SEO, paid ads, and content that converts.",
    features: ["SEO Strategy", "PPC Campaigns", "Analytics"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business needs. Scalable, secure, and built to last.",
    features: ["API Development", "Cloud Solutions", "Integrations"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Leverage cutting-edge AI to automate workflows, enhance customer experiences, and gain competitive advantages.",
    features: ["AI Chatbots", "Process Automation", "ML Solutions"],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Services That </span>
            <span className="text-metallic-rose">Transform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end digital solutions designed to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <MetallicFrame
                intensity={index === 0 ? "strong" : "medium"}
                className="h-full"
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </MetallicFrame>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Not sure what you need? Let's figure it out together.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            whileHover={{ x: 4 }}
          >
            Schedule a free consultation
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
