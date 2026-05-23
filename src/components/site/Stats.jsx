import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/site/Navbar.jsx";

const stats = [
  { value: 8500, en: "Tons of Frozen Meat", ar: "أطنان من اللحوم المجمدة" },
  { value: 6200, en: "Tons of Frozen Chicken", ar: "أطنان من الدجاج المجمد" },
  { value: 4800, en: "Tons of Frozen Seafood", ar: "أطنان من المأكولات البحرية المجمدة" },
  { value: 50, en: "Global Markets Served", ar: "أسواق عالمية" },
];

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const { language } = useLanguage();

  return (
    <section
      id="why-us"
      className={`relative py-24 overflow-hidden gradient-brand ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(/bg-images/page-header.jpg)",
          backgroundSize: "cover",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold uppercase text-sm tracking-[0.2em]">
            {language === "ar" ? "تأثيرنا" : "Our Impact"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-balance">
            {language === "ar"
              ? "التميز في الأغذية المجمدة الممتازة"
              : "Premium Frozen Food Excellence"}
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${language === "ar" ? "border-r-2 pr-5" : "border-l-2 pl-5"} border-accent/40`}
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-accent">
                <Counter to={s.value} />+
              </div>
              <div className="mt-2 text-sm md:text-base text-white/80">
                {language === "ar" ? s.ar : s.en}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
