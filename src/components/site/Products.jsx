import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";
import { productDatabase, categoryGradients } from "@/lib/products.js";

const productCategories = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "chicken", en: "Chicken", ar: "الدجاج" },
  { id: "meat", en: "Meat", ar: "اللحوم" },
  { id: "seafood", en: "Seafood", ar: "المأكولات البحرية" },
  { id: "processed", en: "Processed", ar: "الأغذية المصنعة" },
  { id: "flavours", en: "Flavours & Fragrances", ar: "النكهات والعطور" },
  { id: "grains", en: "Grains & Cereals", ar: "الحبوب والغلال" },
  { id: "canned", en: "Canned Food", ar: "الأغذية المعلبة" },
  { id: "fresh-meat", en: "Fresh Meat", ar: "اللحوم الطازجة" },
  { id: "drinks", en: "Soft Drinks", ar: "المشروبات الغازية" },
  { id: "baby-food", en: "Baby Food", ar: "أغذية الأطفال" },
  { id: "dairy", en: "Dairy Products", ar: "منتجات الألبان" },
  { id: "ghee", en: "Ghee & Oil", ar: "السمن والزيت" },
  { id: "potatoes", en: "Potatoes", ar: "البطاطس" },
];

const categoryFilterMap = {
  chicken: "Frozen Chicken",
  meat: "Frozen Meat",
  seafood: "Frozen Seafood",
};

const categoryCards = [
  {
    id: "chicken",
    en: "Frozen Chicken",
    ar: "الدجاج المجمد",
    desc: "Premium-quality hygienic frozen chicken products.",
    descAr: "منتجات دجاج مجمد صحي وعالي الجودة.",
    img: "/products/category/ch.webp",
  },
  {
    id: "meat",
    en: "Frozen Meat",
    ar: "اللحوم المجمدة",
    desc: "Fresh and export-grade frozen meat supply.",
    descAr: "توريد لحوم مجمدة طازجة وذات جودة تصدير.",
    img: "/products/category/meat.jpg",
  },
  {
    id: "seafood",
    en: "Frozen Seafood",
    ar: "المأكولات البحرية المجمدة",
    desc: "Delicious fish fillets, premium salmon cuts, shrimps, and tender squid rings.",
    descAr: "فيليه سمك لذيذ، قطع سلمون فاخرة، روبيان (جمبري)، وحلقات حبار طرية.",
    img: "/products/category/fish.jpg",
  },
  {
    id: "processed",
    en: "Processed Food",
    ar: "الأغذية المصنعة",
    desc: "Premium processed frozen food collection.",
    descAr: "مجموعة منتجات غذائية مجمدة ومصنعة ممتازة.",
    img: "/products/category/processed.jpeg",
  },
  {
    id: "flavours",
    en: "Flavours & Fragrances",
    ar: "النكهات والعطور",
    desc: "Premium food flavours and fragrance ingredients.",
    descAr: "نكهات غذائية ومكونات عطور ممتازة.",
    img: "/products/category/flavpure-fragrance.jpg",
  },
  {
    id: "grains",
    en: "Grains & Cereals",
    ar: "الحبوب والغلال",
    desc: "Wheat, rice, legumes and premium grains supply.",
    descAr: "توريد القمح والأرز والبقوليات والحبوب الممتازة.",
    img: "/products/category/grains-cereals.jpg",
  },
  {
    id: "canned",
    en: "Canned Food",
    ar: "الأغذية المعلبة",
    desc: "High-quality preserved and canned food products.",
    descAr: "منتجات غذائية معلبة ومحفوظة عالية الجودة.",
    img: "/products/category/canned-food.webp",
  },
  {
    id: "fresh-meat",
    en: "Fresh Meat Trading",
    ar: "تجارة اللحوم الطازجة",
    desc: "Hygienic fresh and chilled meat supply chain.",
    descAr: "سلسلة توريد لحوم طازجة ومبردة صحية.",
    img: "/products/category/fresh-meats.jpg",
  },
  {
    id: "drinks",
    en: "Soft Drinks",
    ar: "المشروبات الغازية",
    desc: "Carbonated beverages and refreshing drinks.",
    descAr: "مشروبات غازية ومشروبات منعشة.",
    img: "/products/category/soft-drinks.jpg",
  },
  {
    id: "baby-food",
    en: "Baby Food",
    ar: "أغذية الأطفال",
    desc: "Safe and nutritious baby food products.",
    descAr: "منتجات أغذية أطفال آمنة ومغذية.",
    img: "/products/category/baby-food.jpg",
  },
  {
    id: "dairy",
    en: "Dairy Products",
    ar: "منتجات الألبان",
    desc: "Milk, cheese, yogurt and dairy essentials.",
    descAr: "الحليب والجبن والزبادي وأساسيات الألبان.",
    img: "/products/category/dairy-products.jpg",
  },
  {
    id: "ghee",
    en: "Ghee & Vegetable Oil",
    ar: "السمن والزيت النباتي",
    desc: "Pure edible oils and high-quality ghee products.",
    descAr: "زيوت طعام نقية ومنتجات سمن عالية الجودة.",
    img: "/products/category/ghee-oil.jpg",
  },
  {
    id: "potatoes",
    en: "Potatoes Trading",
    ar: "تجارة البطاطس",
    desc: "Fresh farm potatoes for local and export markets.",
    descAr: "بطاطس طازجة من المزرعة للأسواق المحلية والتصدير.",
    img: "/products/category/potatoes.webp",
  },
];

export default function Products() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const handleSelectCategoryPill = (e) => {
      const { categoryId } = e.detail;
      setSelectedCategory(categoryId);
      if (categoryFilterMap[categoryId]) {
        setSelectedCard(categoryId);
      } else {
        setSelectedCard(null);
      }
    };

    window.addEventListener("select-category-pill", handleSelectCategoryPill);

    return () => {
      window.removeEventListener("select-category-pill", handleSelectCategoryPill);
    };
  }, []);

  const handleCategoryClick = (catId, e) => {
    e.preventDefault();
    setSelectedCard(catId);
    
    // Smooth scroll slightly to the products section to keep it in view
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

  // Filter category cards based on selected pill
  const filteredCategoryCards = categoryCards.filter((card) => {
    if (selectedCategory === "all") return true;
    return card.id === selectedCategory;
  });

  // Filter products for the selected card
  const filteredProducts = Object.entries(productDatabase).filter(([_, product]) => {
    const targetCategory = categoryFilterMap[selectedCard];
    return product.category === targetCategory;
  });

  return (
    <section id="products" className="py-24 px-4 md:px-8 bg-[#f8faf5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase text-sm tracking-[0.2em]">
            {isAr ? "منتجاتنا" : "Our Products"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            {isAr ? "فئات تجارية أخرى" : "Other Trading Categories"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {isAr
              ? "استكشف مجموعتنا الواسعة من الفئات التجارية للأغذية والسلع الاستهلاكية سريعة الحركة بما في ذلك المنتجات المجمدة والحبوب والألبان والمشروبات والسلع ذات الجودة التصديرية."
              : "Explore our wide range of food trading and FMCG categories including frozen products, grains, dairy, beverages, and export-quality goods."}
          </p>
        </motion.div>

        {/* Category Pills (Dynamic Filter Row) - Replicating padding: 12px 28px exactly */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-5xl mx-auto px-4">
          {productCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedCard(null); // Reset selected card view when changing filters
                }}
                className={`px-[28px] py-[12px] rounded-full text-[14px] md:text-base font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 ${
                  isActive
                    ? "bg-[#00682a] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-[#00682a] hover:text-white border border-slate-100 hover:shadow-md"
                }`}
              >
                {isAr ? cat.ar : cat.en}
              </button>
            );
          })}
        </div>

        {/* Dynamic Area */}
        <motion.div layout className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!selectedCard ? (
              /* Categories Grid (Filtered by selected pill) */
              <motion.div
                key={`cards-${selectedCategory}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
              >
                {filteredCategoryCards.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={(e) => handleCategoryClick(cat.id, e)}
                    className="group relative overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-all duration-350 flex flex-col cursor-pointer"
                  >
                    {/* Image Container */}
                    {cat.img && (
                      <div className="relative overflow-hidden h-[280px]">
                        <img
                          src={cat.img}
                          alt={isAr ? cat.ar : cat.en}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Text Overlay */}
                    <div
                      className={`absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent text-white z-10 ${isAr ? "text-right" : "text-left"}`}
                    >
                      <h4 className="text-[20px] md:text-[22px] font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors flex items-center justify-between">
                        <span>{isAr ? cat.ar : cat.en}</span>
                        <span className="text-[10px] md:text-xs font-semibold bg-accent/20 border border-accent/40 text-accent px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                          {isAr ? "عرض المنتجات" : "View Products"}
                        </span>
                      </h4>
                      <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light line-clamp-2">
                        {isAr ? cat.descAr : cat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Products Grid for the selected category card */
              <motion.div
                key={`products-${selectedCard}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="max-w-6xl mx-auto px-4"
              >
                {/* Back Button */}
                <button
                  onClick={() => setSelectedCard(null)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00682a] text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md mb-8 cursor-pointer`}
                >
                  <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                  {isAr ? "العودة إلى الفئات" : "Back to Categories"}
                </button>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(([id, product]) => {
                      const gradient = categoryGradients[product.category] || "from-primary/20 to-primary/30";
                      return (
                        <div
                          key={id}
                          className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                        >
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const productName = isAr ? product.nameAr : product.name;
                              window.dispatchEvent(new CustomEvent("prefill-product-contact", { detail: { productName } }));
                              const el = document.getElementById("contact");
                              if (el) {
                                const navbarHeight = 96;
                                const pos = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
                                window.scrollTo({ top: pos, behavior: "smooth" });
                              }
                            }}
                            className={`flex flex-col h-full w-full cursor-pointer ${isAr ? "text-right" : "text-left"}`}
                          >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
                              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                              
                              {product.img && (
                                <img
                                  src={product.img}
                                  alt={isAr ? product.nameAr : product.name}
                                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [id]: true }))}
                                />
                              )}

                              {!loadedImages[id] && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="font-display text-2xl font-bold text-primary">
                                      {(isAr ? product.nameAr : product.name)[0]}
                                    </span>
                                  </div>
                                </div>
                              )}

                              {/* Dark Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                              {/* Category Badge */}
                              <div
                                className={`absolute top-4 ${isAr ? "right-4" : "left-4"} px-3 py-1 rounded-full bg-accent/90 text-brand-dark text-xs uppercase tracking-wider font-bold shadow-sm`}
                              >
                                {isAr ? product.categoryAr : product.category}
                              </div>

                              {/* Bottom info on the image */}
                              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between text-white z-10 w-full">
                                <div className={isAr ? "text-right" : "text-left"}>
                                  <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors line-clamp-1 text-white">
                                    {isAr ? product.nameAr : product.name}
                                  </h3>
                                  <p className="text-accent font-bold text-base mt-0.5">
                                    {isAr ? product.price.replace("AED", "درهم إماراتي") : product.price}
                                  </p>
                                </div>
                                <span className="w-9 h-9 rounded-full bg-[#00682a] text-white flex items-center justify-center transition-all group-hover:rotate-45 group-hover:scale-105 shrink-0 shadow">
                                  <ArrowUpRight className="w-4.5 h-4.5" />
                                </span>
                              </div>
                            </div>

                            {/* Description & Specs */}
                            <div className="p-5 flex-grow flex flex-col justify-between w-full">
                              <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                                {isAr ? product.descriptionAr : product.description}
                              </p>
                              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-50">
                                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                                  {isAr ? product.specifications.weightAr[0] : product.specifications.weight[0]}
                                </span>
                                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                                  {isAr ? product.specifications.originAr : product.specifications.origin}
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Coming Soon View */
                  <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-3xl border border-slate-100 shadow-sm max-w-lg mx-auto">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
                      🌟
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">
                      {isAr ? "قريباً جداً!" : "Coming Soon!"}
                    </h3>
                    <p className="text-slate-500 max-w-sm">
                      {isAr
                        ? "نعمل على جلب منتجات ممتازة لهذه الفئة قريباً. ترقبوا المزيد!"
                        : "We are currently sourcing the finest products for this category. Stay tuned!"}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


