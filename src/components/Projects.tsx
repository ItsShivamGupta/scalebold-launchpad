import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Finova Banking App",
    category: "Mobile App",
    description: "A next-gen mobile banking experience with AI-powered insights",
    role: "Design & Development",
    metric: "200% increase in user engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "EcoTrack Dashboard",
    category: "Web Application",
    description: "Sustainability tracking platform for enterprise clients",
    role: "Full-Stack Development",
    metric: "50+ enterprise clients onboarded",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Luxe Interiors",
    category: "E-Commerce",
    description: "Premium furniture brand's online shopping experience",
    role: "Design & Shopify Development",
    metric: "340% revenue growth in 6 months",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "MindfulMe",
    category: "Mobile App",
    description: "Meditation and wellness app with personalized journeys",
    role: "UI/UX Design & React Native",
    metric: "1M+ downloads in first year",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    color: "from-indigo-500/20 to-pink-500/20",
  },
  {
    title: "CloudSync Pro",
    category: "SaaS Platform",
    description: "Enterprise file management and collaboration suite",
    role: "Architecture & Development",
    metric: "99.99% uptime achieved",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Artisan Coffee Co.",
    category: "Brand & Website",
    description: "Complete rebrand and e-commerce for specialty coffee roaster",
    role: "Branding & Web Development",
    metric: "2x conversion rate improvement",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    color: "from-amber-700/20 to-yellow-500/20",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Projects That </span>
            <span className="text-metallic-silver">Speak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of our favorite work. Each project is a story of collaboration and innovation.
          </p>
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group relative ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-end">
                  {/* Category Badge */}
                  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full glass mb-3 w-fit">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description - Shows on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <div>
                        <span className="text-muted-foreground">Role:</span>
                        <span className="ml-1 text-foreground">{project.role}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="ml-1 text-primary">{project.metric}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* View Project Link */}
                  <motion.div
                    initial={false}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary cursor-pointer hover:gap-3 transition-all">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>

                {/* Metallic border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "linear-gradient(135deg, transparent 40%, rgba(159,184,255,0.3) 50%, transparent 60%)",
                    backgroundSize: "200% 200%",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass hover:bg-secondary/30 transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Want to see more? Let's talk about your project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
