import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";

const categories = [
  {
    id: "frozen-meat",
    en: "Frozen Meat",
    ar: "اللحوم المجمدة",
    desc: "Premium halal-certified beef, lamb, and mutton cuts, vacuum-packed for freshness.",
    descAr: "قطعيات لحم بقري، ضأن، وغنم ممتازة معتمدة حلال ومغلفة بالتفريغ الهوائي.",
    gradient: "from-red-900 to-red-950",
    img: "/products/category/meat.jpg",
  },
  {
    id: "frozen-chicken",
    en: "Frozen Chicken",
    ar: "الدجاج المجمد",
    desc: "Quality halal whole chicken, breast fillets, wings, and juicy drumsticks.",
    descAr: "دجاج كامل حلال ذو جودة عالية، صدور فيليه، أجنحة، وأفخاذ طرية.",
    gradient: "from-amber-900 to-amber-950",
    img: "/products/category/frozen-chicken.png",
  },
  {
    id: "frozen-seafood",
    en: "Frozen Seafood",
    ar: "المأكولات البحرية المجمدة",
    desc: "Delicious fish fillets, premium salmon cuts, shrimps, and tender squid rings.",
    descAr: "فيليه سمك لذيذ، قطع سلمون فاخرة، روبيان (جمبري)، وحلقات حبار طرية.",
    gradient: "from-blue-900 to-blue-950",
    img: "/products/category/fish.jpg",
  },
];

export default function Products() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <section id="products" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase text-sm tracking-[0.2em]">
            {isAr ? "منتجاتنا" : "Our Products"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">
            {isAr ? "منتجات الأغذية المجمدة الممتازة" : "Premium Frozen Food Products"}
          </h2>
          <p className="text-muted-foreground">
            {isAr
              ? "لحوم ودجاج ومأكولات بحرية مجمدة حلال مختارة بعناية. معبأة بالتفريغ ومخزنة في -18 درجة مئوية للحفاظ على الجودة والطزاجة المثلى."
              : "Hand-selected halal-certified frozen meat, chicken, and seafood. Vacuum-packed and stored at -18°C for optimal freshness and quality."}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <a key={cat.id} href={`#/category/${cat.id}`} className="group cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}
                />

                {/* Background Image */}
                {cat.img && (
                  <img
                    src={cat.img}
                    alt={isAr ? cat.ar : cat.en}
                    className="absolute inset-0 w-full h-full object-cover opacity-55 transition-all duration-700 group-hover:scale-110 group-hover:opacity-75"
                    onLoad={() => setLoadedImages((prev) => ({ ...prev, [cat.id]: true }))}
                  />
                )}

                {/* Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, white 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/45 to-transparent z-10" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20 text-white">
                  <span className="text-accent text-[10px] uppercase tracking-wider font-bold mb-2 inline-block">
                    {isAr ? "استكشف الفئة" : "Explore Category"}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {isAr ? cat.ar : cat.en}
                  </h3>

                  <p className="text-sm text-white/80 line-clamp-2 mb-6 font-light leading-relaxed">
                    {isAr ? cat.descAr : cat.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm font-semibold group-hover:underline text-accent">
                      {isAr ? "عرض المنتجات" : "View Products"}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-accent text-brand-dark flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:scale-105">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
