import { motion } from "framer-motion";
import { ShieldCheck, Truck, Sprout } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";

const featuresEn = [
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Halal-certified products audited to international standards.",
  },
  {
    icon: Truck,
    title: "Cold Chain Logistics",
    text: "Maintained at -18°C from production to delivery worldwide.",
  },
  {
    icon: Sprout,
    title: "Premium Sourcing",
    text: "Hand-selected frozen meat, chicken, and seafood products.",
  },
];

const featuresAr = [
  {
    icon: ShieldCheck,
    title: "مراقبة الجودة",
    text: "منتجات حلال معتمدة ومدققة وفق المعايير الدولية.",
  },
  {
    icon: Truck,
    title: "سلسلة التبريد اللوجستية",
    text: "يتم الحفاظ عليها عند -18 درجة مئوية من الإنتاج إلى التسليم.",
  },
  { icon: Sprout, title: "مصادر ممتازة", text: "لحوم ودجاج ومأكولات بحرية مجمدة مختارة بعناية." },
];

export default function About() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const features = isAr ? featuresAr : featuresEn;

  return (
    <section id="about" className="py-24 bg-background" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
         <motion.div
          initial={{ opacity: 0, x: isAr ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/about/our story.png"
            alt="Pakistani farmland"
            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl max-w-[220px]">
            <div className="font-display text-4xl font-bold">20+</div>
            <div className="text-sm opacity-90">
              {isAr
                ? "سنوات من تصدير المنتجات عالية الجودة"
                : "Years exporting quality produce worldwide"}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isAr ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
        
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-balance">
            {isAr ? "مزود أغذية مجمدة ممتاز" : "Premium Frozen Food Provider"}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            {isAr
              ? "بركة الواحة مكرسة لتقديم منتجات غذائية مجمدة عالية الجودة يتم الحصول عليها بعناية وتسليمها بموثوقية. نحن متخصصون في اللحوم والدجاج والمأكولات البحرية المجمدة الحلال مع الالتزام القوي بالجودة والطزاجة ورضا العملاء."
              : "Barakat Al Waha is dedicated to providing premium-quality frozen food products sourced with care and delivered with reliability. We specialize in halal-certified frozen meat, chicken, seafood, and related food products while maintaining a strong commitment to quality, freshness, and customer satisfaction."}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-5 mb-8"
          >
            <div className={`${isAr ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-primary`}>
              <h4 className="font-display text-lg font-semibold mb-1">
                {isAr ? "مهمتنا" : "Our Mission"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {isAr
                  ? "تقديم أجود منتجات الأغذية المجمدة في العالم بتميز وموثوقية."
                  : "Deliver the world's finest frozen food products with excellence and reliability."}
              </p>
            </div>
            <div className={`${isAr ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-accent`}>
              <h4 className="font-display text-lg font-semibold mb-1">
                {isAr ? "رؤيتنا" : "Our Vision"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {isAr
                  ? "أن نكون المزود العالمي الأكثر ثقة لحلول الأغذية المجمدة الممتازة."
                  : "Be the most trusted global provider of premium frozen food solutions."}
              </p>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary rounded-2xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center text-white mb-3">
                  <f.icon className="w-5 h-5" />
                </div>
                <h5 className="font-semibold mb-1">{f.title}</h5>
                <p className="text-xs text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
