import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "ScaleBold transformed our outdated website into a conversion machine. Within 3 months, our leads increased by 400%. Their attention to detail and understanding of our brand was exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GreenLeaf Organics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Working with ScaleBold was a game-changer. They didn't just build us a website—they crafted an entire digital experience that perfectly captures our sustainable mission.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director, Luxe Hotels",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "The team's creativity and technical expertise are unmatched. Our new booking platform has reduced abandonment by 60% and the design constantly gets compliments from guests.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, FinanceFlow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "ScaleBold delivered our complex fintech app ahead of schedule. Their code quality is pristine and the UX is so intuitive that our support tickets dropped by 70%.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Owner, Artisan Bakery",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    content: "As a small business, I was nervous about investing in a professional website. ScaleBold made it affordable and the results speak for themselves—online orders up 300%!",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "VP Product, CloudSync",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content: "Their design-first approach combined with solid engineering made all the difference. ScaleBold isn't just a vendor—they're a strategic partner in our growth.",
    rating: 5,
  },
  {
    name: "Anna Petrova",
    role: "Founder, StyleHouse",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    content: "The mobile app ScaleBold built for us is beautiful and performs flawlessly. Our users constantly rave about how smooth the shopping experience is.",
    rating: 5,
  },
  {
    name: "Robert Chang",
    role: "CEO, HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
    content: "ScaleBold understood the complexity of healthcare compliance while still delivering a modern, user-friendly platform. Truly impressive work.",
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials for carousel
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Loved by </span>
            <span className="text-metallic-rose">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-xl glass hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-xl glass hover:bg-secondary/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-3 flex-wrap"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.name}
              onClick={() => setCurrentIndex(index)}
              className={`relative p-1 rounded-full transition-all ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-50 hover:opacity-100"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
