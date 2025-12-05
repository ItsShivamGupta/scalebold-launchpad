import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#story", label: "Our Story" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl",
          "rounded-2xl transition-all duration-300",
          isScrolled 
            ? "glass shadow-float" 
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-metallic-silver">Scale</span>
            <span className="text-foreground">Bold</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Cluster */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-5 py-2 rounded-xl shadow-glow hover:shadow-lg transition-shadow"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 glass rounded-2xl shadow-float p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/50 text-foreground"
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/50 text-foreground"
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-5 h-5" />
                  Call
                </motion.a>
              </div>
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-3 rounded-xl"
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
