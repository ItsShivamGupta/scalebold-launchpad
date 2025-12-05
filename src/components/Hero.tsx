import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer - Gradient + Shapes */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </motion.div>

      {/* Midground Layer - Floating 3D Shapes */}
      <motion.div
        style={{ y: midgroundY }}
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        {/* Large floating orb */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 md:w-80 md:h-80"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-sm" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-xl border border-white/10" />
        </motion.div>

        {/* Medium floating cube */}
        <motion.div
          className="absolute bottom-32 left-[5%] w-32 h-32 md:w-48 md:h-48"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/30 to-primary/20 blur-sm transform rotate-12" />
          <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent backdrop-blur-xl border border-white/10 transform rotate-12" />
        </motion.div>

        {/* Small floating rings */}
        <motion.div
          className="absolute top-1/3 left-[15%] w-20 h-20 md:w-32 md:h-32"
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-full h-full rounded-full border-4 border-primary/30 animate-rotate-slow" />
        </motion.div>
      </motion.div>

      {/* Foreground Layer - Decorative Elements */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">We Build </span>
            <span className="text-metallic-silver">Bold Digital</span>
            <br />
            <span className="text-metallic-rose">Experiences</span>
            <span className="text-foreground"> That Scale</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From startups to enterprise—we craft stunning websites, apps, and digital 
            products that convert visitors into loyal customers.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-2xl shadow-glow hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-secondary/50 transition-colors text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="hidden sm:inline">WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass hover:bg-secondary/50 transition-colors text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="hidden sm:inline">Call Us</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
