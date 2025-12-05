import { Helmet } from "react-helmet-async";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ScaleBold | Digital Agency for Startups & Enterprise</title>
        <meta 
          name="description" 
          content="ScaleBold is a premium digital agency crafting stunning websites, mobile apps, and brand experiences. We help startups and enterprises scale with bold digital solutions." 
        />
        <meta name="keywords" content="digital agency, web development, mobile apps, brand design, UI/UX, startup agency" />
        <link rel="canonical" href="https://scalebold.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ScaleBold | Digital Agency for Startups & Enterprise" />
        <meta property="og:description" content="We build bold digital experiences that help businesses scale. From stunning websites to powerful mobile apps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scalebold.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ScaleBold | Digital Agency" />
        <meta name="twitter:description" content="We build bold digital experiences that help businesses scale." />
      </Helmet>

      <div className="relative min-h-screen">
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        >
          Skip to main content
        </a>

        <NavBar />
        
        <main id="main-content">
          <Hero />
          <OurStory />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
