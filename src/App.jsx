import { useState, useEffect } from "react";
import Navbar, { LanguageProvider, useLanguage } from "@/components/site/Navbar.jsx";
import Hero from "@/components/site/Hero.jsx";
import FeaturedProducts from "@/components/site/FeaturedProducts.jsx";
import OurVision from "@/components/site/OurVision.jsx";
import About from "@/components/site/About.jsx";
import Products from "@/components/site/Products.jsx";
import Stats from "@/components/site/Stats.jsx";
import Testimonials from "@/components/site/Testimonials.jsx";
import Contact from "@/components/site/Contact.jsx";
import Footer from "@/components/site/Footer.jsx";
import Preloader from "@/components/Preloader.jsx";

// Smooth scrolling helper for hash navigation
function HashScrollHandler({ route, isPreloaderComplete }) {
  useEffect(() => {
    // Only run after preloader is complete
    if (!isPreloaderComplete) return;

    const hash = window.location.hash;
    
    // Check if the hash is a section anchor on the home page (e.g., #about, #contact)
    if (hash && !hash.startsWith("#/")) {
      const targetId = hash.replace("#", "");
      
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 96;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      // Try immediately, if it fails, retry after a micro-delay once the DOM is ready
      if (!scrollToTarget()) {
        const timer = setTimeout(scrollToTarget, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // For full page transitions or initial load, scroll to navbar
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [route, isPreloaderComplete]);

  return null;
}

// Custom simple router based on window location hash
function Router() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
    // Scroll to navbar after preloader completes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Preloader onLoadComplete={handlePreloaderComplete} />
      <HashScrollHandler route={route} isPreloaderComplete={isPreloaderComplete} />
      <HomePage />
    </>
  );
}

function HomePage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  useEffect(() => {
    document.title = isAr
      ? "بركة الواحة — لحوم ودجاج ومأكولات بحرية مجمدة حلال وممتازة"
      : "Barakat Al Waha — Premium Halal Frozen Meat, Chicken & Seafood";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        isAr
          ? "بركة الواحة هي المورد الرائد في دبي لمنتجات اللحوم والدجاج والمأكولات البحرية المجمدة الحلال الممتازة، والموردة بسلسلة تبريد صارمة."
          : "Barakat Al Waha is Dubai's leading provider of premium halal-certified frozen meat, chicken, and seafood products, supplied with strict cold-chain logistics."
      );
    }
  }, [isAr]);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProducts />
      <Stats />
      <Products />
      <OurVision />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}
