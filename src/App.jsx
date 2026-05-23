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
import CategoryPage from "@/components/site/CategoryPage.jsx";
import ProductDetailsPage from "@/components/site/ProductDetailsPage.jsx";

// Smooth scrolling helper for hash navigation
function HashScrollHandler({ route }) {
  useEffect(() => {
    const hash = window.location.hash;
    
    // Check if the hash is a section anchor on the home page (e.g., #about, #contact)
    if (hash && !hash.startsWith("#/category") && !hash.startsWith("#/product")) {
      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 96;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // For full page transitions, always scroll back to top
      window.scrollTo(0, 0);
    }
  }, [route]);

  return null;
}

// Custom simple router based on window location hash
function Router() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  let view = null;

  if (route.startsWith("#/category/")) {
    // Extract category id, e.g., frozen-meat
    const categoryId = route.replace("#/category/", "");
    view = <CategoryPage categoryId={categoryId} />;
  } else if (route.startsWith("#/product/")) {
    // Extract product id, e.g., beef-cubes
    const productId = route.replace("#/product/", "");
    view = <ProductDetailsPage productId={productId} />;
  } else {
    // Home route or general anchor section hashes
    view = <HomePage />;
  }

  return (
    <>
      <HashScrollHandler route={route} />
      {view}
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
      <FeaturedProducts />
      <OurVision />
      <About />
      <Products />
      <Stats />
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
