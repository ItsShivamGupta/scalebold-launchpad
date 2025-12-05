import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every pixel serves a purpose. We measure success by your growth.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick turnarounds without compromising on quality or attention to detail.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your vision is our mission. We're partners in your success story.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Open communication and transparency at every step of the journey.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to democratize premium design" },
  { year: "2021", title: "100+ Projects", description: "Delivered transformative solutions across industries" },
  { year: "2023", title: "Global Reach", description: "Expanded to serve clients in 20+ countries" },
  { year: "2024", title: "ScaleBold 2.0", description: "Launched AI-powered design workflows" },
];

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Crafting Digital </span>
            <span className="text-metallic-silver">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're a team of designers, developers, and strategists who believe every business 
            deserves a digital presence that truly represents its potential.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-24"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass rounded-2xl p-6 inline-block">
                    <span className="text-2xl font-bold text-metallic-silver">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-glow md:-translate-x-1/2" />

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-secondary/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
