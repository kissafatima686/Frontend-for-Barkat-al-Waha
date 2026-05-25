import { motion } from "framer-motion";
import { useLanguage } from "@/components/site/Navbar.jsx";

export default function FeaturedProducts() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const handleContactScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = 96;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    window.location.hash = "#contact";
  };

  const cards = [
    {
      img: "/products/category/meat-01.jpg",
      title: "Premium Frozen Meat Processing & Supply",
      titleAr: "تجهيز وتوريد اللحوم المجمدة الممتازة",
      desc: "We provide premium-quality frozen meat cuts processed under strict hygiene standards to ensure safety, freshness, and trusted global supply solutions.",
      descAr: "نحن نقدم قطعيات لحم مجمّدة عالية الجودة معالجة ومجهزة تحت معايير نظافة صارمة لضمان السلامة، الطزاجة وحلول التوريد الموثوقة عالمياً.",
    },
    {
      img: "/products/category/seed.jpg",
      title: "Fresh Frozen Seafood & Fish Products",
      titleAr: "منتجات المأكولات البحرية والأسماك المجمدة الطازجة",
      desc: "Our seafood collection includes carefully preserved frozen fish and marine products maintaining natural taste, nutrition, and premium export quality.",
      descAr: "تشتمل مجموعتنا من ثمار البحر على أسماك مجمدة ومنتجات بحرية محفوظة بعناية تحافظ على النكهة الطبيعية، القيمة الغذائية، وجودة تصدير ممتازة.",
    },
    {
      img: "/products/category/frozen-chicken.avif",
      title: "Hygienic Frozen Chicken Supply Chain",
      titleAr: "سلسلة توريد الدجاج المجمد الصحي",
      desc: "We ensure hygienically processed frozen chicken products with consistent freshness, superior quality, and trusted international food safety standards.",
      descAr: "نحن نضمن تقديم منتجات دجاج مجمد معالجة صحياً بطزاجة ثابتة، جودة فائقة، ومعايير سلامة أغذية دولية موثوقة.",
    },
  ];

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      {/* HERO SECTION */}
      <section className="py-24 bg-[#f8faf5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col items-center text-center ${
                isAr ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
              }`}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-[50px] font-bold text-slate-900 mb-6 leading-tight text-balance">
                {isAr ? "منتجات الأغذية المميزة الفاخرة" : "Premium Featured Food Products"}
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                {isAr
                  ? "تقدم بركة الواحة تشكيلة مميزة من المنتجات الغذائية المجمدة، بما في ذلك اللحوم والدواجن والمأكولات البحرية المجمدة عالية الجودة والمصنوعة بعناية والمقدمة بموثوقية."
                  : "Barakat Al Waha offers a premium selection of frozen food products, including high-quality frozen meat, chicken, seafood, and related food items sourced with care and delivered with reliability."}
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {isAr
                  ? "يتم معالجة منتجاتنا وفقاً لمعايير جودة صارمة لضمان الطزاجة والنظافة والتميز الدولي للتصدير للعملاء في جميع أنحاء العالم."
                  : "Our products are processed under strict quality standards to ensure freshness, hygiene, and international export-grade excellence for customers worldwide."}
              </p>
              <a
                href="#contact"
                onClick={handleContactScroll}
                className="inline-block bg-[#00682a] text-white py-3.5 px-8 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-md hover:scale-105 cursor-pointer"
              >
                {isAr ? "اتصل بنا" : "Contact Us"}
              </a>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src="/products/category/meat-01.jpg"
                alt="Featured Products"
                className="w-full max-w-[550px] h-[300px] sm:h-[450px] object-cover rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-slate-100/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="featured-products" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-[38px] font-bold text-slate-900 mb-5 leading-tight">
              {isAr ? "المنتجات المميزة لبركة الواحة" : "Barakat Al Waha Featured Products"}
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center mx-auto max-w-2xl">
              {isAr
                ? "نحن متخصصون في تقديم منتجات غذائية مجمدة عالية الجودة مع الحفاظ على معايير قوية في الطزاجة والنظافة والموثوقية ورضا العملاء في الأسواق الدولية."
                : "We specialize in delivering premium-quality frozen food products while maintaining strong standards in freshness, hygiene, reliability, and customer satisfaction across international markets."}
            </p>
          </motion.div>
 
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-[240px] md:h-[260px] bg-slate-50 rounded-t-3xl">
                  <img
                    src={card.img}
                    alt={isAr ? card.titleAr : card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
 
                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between items-center text-center">
                  <div className="mb-6 flex flex-col items-center w-full">
                    <h4 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-3 leading-snug text-center">
                      {isAr ? card.titleAr : card.title}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed text-center max-w-sm mx-auto">
                      {isAr ? card.descAr : card.desc}
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href="#contact"
                      onClick={handleContactScroll}
                      className="inline-block bg-[#00682a] text-white py-2.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm"
                    >
                      {isAr ? "اتصل بنا" : "Contact Us"}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
