import { useEffect, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { productDatabase } from "@/lib/products.js";

export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};

const translations = {
  en: {
    home: "Home",
    products: "Products",
    featuredProducts: "Featured Products",
    ourVision: "Our Vision",
    whyUs: "Why Us",
    about: "About",
    contact: "Contact Us",
    marqueeText: "🥩 Barakat Al Waha is dedicated to providing premium-quality frozen food products sourced with care and delivered with reliability. We specialize in frozen meat, chicken, seafood, and related food products while maintaining a strong commitment to quality, freshness, and customer satisfaction.",
    contactLabel: "📞 Contact: +971 4 294 2220 / +971 50 826 3171",
    emailLabel: "✉ Email:",
    companyLabel: "🏢 Barakat Al Waha - Dubai, UAE",
    searchPlaceholder: "Search...",
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    featuredProducts: "المنتجات المميزة",
    ourVision: "رؤيتنا",
    whyUs: "لماذا نختارنا",
    about: "معلومات عنا",
    contact: "اتصل بنا",
    marqueeText: "🥩 بركة الواحة مكرسة لتقديم منتجات غذائية مجمدة عالية الجودة يتم الحصول عليها بعناية وتسليمها بموثوقية. نحن متخصصون في اللحوم والدجاج والمأكولات البحرية المجمدة مع الالتزام القوي بالجودة والطزاجة ورضا العملاء.",
    contactLabel: "📞 الاتصال: +971 4 294 2220 / +971 50 826 3171",
    emailLabel: "✉ البريد الإلكتروني:",
    companyLabel: "🏢 بركة الواحة - دبي، الإمارات",
    searchPlaceholder: "بحث...",
  },
};

const nav = [
  { label: "home", href: "#home", key: "home" },
  { label: "about", href: "#about", key: "about" },
  { label: "featuredProducts", href: "#featured-products", key: "featuredProducts" },
  { label: "products", href: "#products", key: "products" },
  { label: "ourVision", href: "#our-vision", key: "ourVision" },
  { label: "whyUs", href: "#why-us", key: "whyUs" },
  { label: "contact", href: "#contact", key: "contact" },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("language") || "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("language", language);
    }
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[language];
  const isAr = language === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangChange = (lang) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.toLowerCase().trim();
    if (!query) return;

    // Search product database keys and names
    const match = Object.entries(productDatabase).find(([key, product]) => {
      return (
        key.includes(query) ||
        product.name.toLowerCase().includes(query) ||
        product.nameAr.toLowerCase().includes(query)
      );
    });

    const scrollAndSelect = (catId) => {
      window.dispatchEvent(new CustomEvent("select-category-pill", { detail: { categoryId: catId } }));
      const element = document.getElementById("products");
      if (element) {
        const navbarHeight = 96;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (match) {
      const productCat = match[1].category;
      const categoryMap = {
        "Frozen Chicken": "chicken",
        "Frozen Meat": "meat",
        "Frozen Seafood": "seafood",
      };
      const catId = categoryMap[productCat] || "all";
      scrollAndSelect(catId);
      e.target.reset();
    } else {
      // Categorical routing fallback
      if (query.includes("meat") || query.includes("لحم")) {
        scrollAndSelect("meat");
        e.target.reset();
      } else if (query.includes("chicken") || query.includes("دجاج")) {
        scrollAndSelect("chicken");
        e.target.reset();
      } else if (
        query.includes("sea") ||
        query.includes("fish") ||
        query.includes("سمك") ||
        query.includes("روبيان")
      ) {
        scrollAndSelect("seafood");
        e.target.reset();
      } else {
        alert(
          language === "en"
            ? `No products found for "${query}"`
            : `لم يتم العثور على منتجات لـ "${query}"`
        );
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -176 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-[80px] inset-x-0 z-50 bg-brand-dark border-b border-white/10 shadow-lg flex flex-col w-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* MAIN NAVBAR */}
      <div className="w-full bg-brand-dark/95 backdrop-blur transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[96px]">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0 mr-4">
            <img src="/logo/log.png" alt="Barakat Al Waha Logo" className="h-[80px] md:h-[100px] w-[80px] md:w-[100px]" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2">
            {nav.map((n) => (
              <div
                key={n.key}
                className="relative"
                onMouseEnter={() => setOpenDrop(n.key)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <a
                  href={n.href}
                  className="px-1.5 xl:px-2.5 py-2 text-xs xl:text-[13px] font-medium text-white/90 hover:text-accent transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {t[n.key]}
                  {n.items && <ChevronDown className="w-3 h-3 shrink-0" />}
                </a>
                <AnimatePresence>
                  {n.items && openDrop === n.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 min-w-48 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 z-50"
                    >
                      {n.items.map((it) => (
                        <a
                          key={it}
                          href={n.href}
                          className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors"
                        >
                          {it}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions & Search */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Language Switcher - Mobile & Desktop */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-1 rounded-full bg-accent text-brand-dark font-bold text-xs md:text-xs hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
              >
                <Globe className="w-3 md:w-3.5 h-3 md:h-3.5" />
                <span className="hidden sm:inline">{language === "en" ? "English" : "العربية"}</span>
                <span className="sm:hidden">{language === "en" ? "EN" : "AR"}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 z-50 min-w-[110px]"
                  >
                    <button
                      onClick={() => handleLangChange("en")}
                      className={`w-full px-4 py-2 text-xs font-semibold text-left transition-colors ${
                        language === "en"
                          ? "bg-accent text-brand-dark"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLangChange("ar")}
                      className={`w-full px-4 py-2 text-xs font-semibold text-left transition-colors ${
                        language === "ar"
                          ? "bg-accent text-brand-dark"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      العربية
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar - Desktop Only */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center border border-white/20 rounded-full overflow-hidden bg-white h-8 shadow-sm w-32 lg:w-40 xl:w-48"
            >
              <input
                type="text"
                name="search"
                placeholder={t.searchPlaceholder}
                className="border-none outline-none px-3.5 text-xs w-full text-slate-800 bg-transparent"
              />
              <button
                type="submit"
                className="bg-[#34750f] hover:bg-[#2c630d] text-white px-3.5 h-full flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </form>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 pr-4 rounded-lg hover:bg-white/10 transition-colors text-white cursor-pointer"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-dark border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {nav.map((n) => (
                <div key={n.key}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-white/95 hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                  >
                    {t[n.key]}
                  </a>
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 flex gap-2">
                <button
                  onClick={() => handleLangChange("en")}
                  className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    language === "en"
                      ? "bg-accent text-brand-dark"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLangChange("ar")}
                  className={`flex-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    language === "ar"
                      ? "bg-accent text-brand-dark"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
