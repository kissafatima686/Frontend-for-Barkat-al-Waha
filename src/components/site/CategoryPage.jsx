import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar, { useLanguage } from "@/components/site/Navbar.jsx";
import Footer from "@/components/site/Footer.jsx";
import { productDatabase, categoryMap } from "@/lib/products.js";


export default function CategoryPage({ categoryId }) {
  const categoryInfo = categoryMap[categoryId];
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    if (categoryInfo) {
      document.title = isAr ? `${categoryInfo.titleAr} | بركة الواحة` : `${categoryInfo.title} | Barakat Al Waha`;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          isAr
            ? `استكشف تشكيلتنا الفاخرة من ${categoryInfo.titleAr} المعتمدة حلال من بركة الواحة. يتم الحصول عليها وتعبئتها وتخزينها في -18 درجة مئوية للحصول على طزاجة مثالية.`
            : `Explore our premium selection of halal-certified ${categoryInfo.title.toLowerCase()} from Barakat Al Waha. Sourced, vacuum-packed, and stored at -18°C.`
        );
      }
    }
  }, [categoryInfo, isAr]);

  if (!categoryInfo) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white pt-44 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {isAr ? "لم يتم العثور على الفئة" : "Category Not Found"}
            </h1>
            <a href="#home" className="text-accent hover:underline">
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const products = categoryInfo.products
    .map((id) => ({ ...productDatabase[id], id }))
    .filter((p) => p);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white" dir={isAr ? "rtl" : "ltr"}>
        {/* Category Hero Banner */}
         <div className={`relative pt-52 pb-16 bg-gradient-to-br ${categoryInfo.gradient}`}>
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-8">
            <a
              href="#products"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-sm mb-8 hover:${isAr ? "translate-x-1" : "-translate-x-1"}`}
            >
              <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
                {isAr ? categoryInfo.titleAr : categoryInfo.title}
              </h1>
              <p className="text-lg text-white/80 mb-4">
                {isAr
                  ? `تصفح جميع منتجات ${categoryInfo.titleAr} من بركة الواحة`
                  : `Browse all ${categoryInfo.title.toLowerCase()} from Barakat Al Waha`}
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur border border-accent/40 text-accent text-xs uppercase tracking-[0.2em]">
                  {products.length} {isAr ? "منتجات" : "Products"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <a href={`#/product/${product.id}`}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all mb-4">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.gradient} opacity-30`}
                    />
                    {product.img && (
                      <img
                        src={product.img}
                        alt={isAr ? product.nameAr : product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                        onLoad={() => setLoadedImages((prev) => ({ ...prev, [product.id]: true }))}
                      />
                    )}
                    {!loadedImages[product.id] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <span className="font-display text-3xl font-bold text-white">
                            {(isAr ? product.nameAr : product.name)[0]}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div
                      className={`absolute top-4 ${isAr ? "right-4" : "left-4"} px-3 py-1 rounded-full bg-accent/90 text-brand-dark text-xs uppercase tracking-wider font-bold`}
                    >
                      {isAr ? product.categoryAr : product.category}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between text-white">
                      <div className={isAr ? "text-right" : "text-left"}>
                        <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">
                          {isAr ? product.nameAr : product.name}
                        </h3>
                        <p className="text-accent font-bold text-lg">
                          {isAr ? product.price.replace("AED", "درهم إماراتي") : product.price}
                        </p>
                      </div>
                      <span
                        className={`w-10 h-10 rounded-full bg-accent text-brand-dark flex items-center justify-center transition-transform group-hover:rotate-45 ${isAr ? "rotate-180" : ""}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {isAr ? product.descriptionAr : product.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
