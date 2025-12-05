import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUpRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#story" },
      { label: "Our Work", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Careers", href: "#" },
    ],
    services: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Brand Design", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative py-16 md:py-20 overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-block text-2xl font-bold tracking-tight mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-metallic-silver">Scale</span>
              <span className="text-foreground">Bold</span>
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We build bold digital experiences that help businesses scale. 
              From startups to enterprises, we're your growth partner.
            </p>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-secondary/50 text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-secondary/50 text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Us
              </motion.a>
              <motion.a
                href="mailto:hello@scalebold.com"
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-secondary/50 text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4 text-accent" />
                Email
              </motion.a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} ScaleBold. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Accessibility Statement */}
        <p className="text-xs text-muted-foreground/50 text-center mt-8">
          This website is designed to be accessible to all users. 
          If you experience any issues, please contact us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
