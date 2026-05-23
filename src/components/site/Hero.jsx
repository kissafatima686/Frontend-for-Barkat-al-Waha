import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";

const slides = [
  {
    en: {
      eyebrow: "Premium Frozen Meat",
      title: "Halal-Certified Frozen Meat Products",
      text: "Hand-selected beef, lamb, and mutton cuts, vacuum-packed and stored at -18°C for optimal freshness. Sourced and delivered with reliability.",
      cta: "View Meat Selection",
    },
    ar: {
      eyebrow: "لحوم مجمدة ممتازة",
      title: "منتجات اللحوم المجمدة الحلال",
      text: "لحوم بقر وضأن ومتن مختارة بعناية، معبأة بالتفريغ ومخزنة في -18 درجة مئوية للحفاظ على الطزاجة المثلى.",
      cta: "عرض تشكيلة اللحوم",
    },
    gradient: "from-red-900 via-red-950 to-brand-dark",
    image: "/banner/bg-images/meat.jpg",
  },
  {
    en: {
      eyebrow: "Fresh Frozen Chicken",
      title: "Quality Halal Frozen Chicken Products",
      text: "From whole chickens to premium fillets and specialty cuts, all halal-certified and perfectly frozen for your convenience.",
      cta: "Explore Chicken",
    },
    ar: {
      eyebrow: "دجاج مجمد طازج",
      title: "منتجات دجاج مجمد حلال",
      text: "من الدجاج الكامل إلى الفيليه الممتاز والقطع المتخصصة، جميعها حلال ومجمدة بشكل مثالي.",
      cta: "استكشف الدجاج",
    },
    gradient: "from-amber-900 via-amber-950 to-brand-dark",
    image: "/banner/bg-images/chicken-breast-fillet.png",
  },
  {
    en: {
      eyebrow: "Premium Seafood",
      title: "Delicious Frozen Seafood Selection",
      text: "Fresh fish fillets, shrimps, salmon, and specialty seafood, vacuum-sealed and frozen to perfection for global markets.",
      cta: "Browse Seafood",
    },
    ar: {
      eyebrow: "مأكولات بحرية ممتازة",
      title: "تشكيلة مأكولات بحرية مجمدة لذيذة",
      text: "فيليه سمك طازج، جمبري، سلمون ومأكولات بحرية متخصصة، معبأة بالتفريغ ومجمدة بإتقان.",
      cta: "تصفح المأكولات البحرية",
    },
    gradient: "from-blue-900 via-blue-950 to-brand-dark",
    image: "/products/category/fish.jpg",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[i];
  const content = language === "ar" ? slide.ar : slide.en;

  return (
    <section
      id="home"
      className={`relative h-screen min-h-[640px] overflow-hidden ${language === "ar" ? "rtl" : "ltr"}`}
    >
      {/* Animated background image with dark overlay, falling back to gradient */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75)), url(${slide.image})`,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} bg-cover bg-center`}
        />
      </AnimatePresence>

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute inset-0 gradient-hero" />

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${i}-${language}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur border border-accent/40 text-accent text-xs uppercase tracking-[0.2em] mb-6">
              {content.eyebrow}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-balance">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl">{content.text}</p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-brand-dark font-semibold hover:gap-4 hover:-translate-y-0.5 transition-all shadow-xl"
            >
              {content.cta} <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </AnimatePresence>

        <div
          className={`absolute bottom-10 ${language === "ar" ? "right-4 md:right-8" : "left-4 md:left-8"} flex gap-2`}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-accent" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
