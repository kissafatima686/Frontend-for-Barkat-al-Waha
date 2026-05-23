import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";
import { productDatabase } from "@/lib/products.js";

export default function FeaturedProducts() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [loadedImages, setLoadedImages] = useState({});

  // Get featured products (first 6)
  const featuredProducts = Object.entries(productDatabase).slice(0, 6);

  return (
    <section id="featured-products" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase text-sm tracking-[0.2em]">
            {isAr ? "اختيارنا" : "Our Selection"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            {isAr ? "المنتجات المميزة" : "Featured Products"}
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            {isAr
              ? "اختر من أفضل منتجاتنا المجمدة الممتازة"
              : "Discover our finest selection of premium frozen food products"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(([productId, product], idx) => (
            <motion.a
              key={productId}
              href={`#/product/${productId}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 bg-secondary/50 overflow-hidden">
                {loadedImages[productId] ? (
                  <motion.img
                    src={product.img}
                    alt={isAr ? product.nameAr : product.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 animate-pulse" />
                )}
                <img
                  src={product.img}
                  alt={isAr ? product.nameAr : product.name}
                  onLoad={() => setLoadedImages((prev) => ({ ...prev, [productId]: true }))}
                  className="hidden"
                />

                {/* Badge */}
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {isAr ? "مميز" : "Featured"}
                </div>

                {/* Overlay Arrow */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-primary text-white p-3 rounded-full"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 text-slate-900">
                  {isAr ? product.nameAr : product.name}
                </h3>
                <p className="text-sm text-foreground/60 line-clamp-2 mb-3">
                  {isAr ? product.descriptionAr : product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">
                    {isAr ? product.categoryAr : product.category}
                  </span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                    {product.weight}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            {isAr ? "عرض جميع المنتجات" : "View All Products"}
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
