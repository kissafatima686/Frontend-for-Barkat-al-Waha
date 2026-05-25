import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";

const itemsEn = [
  {
    name: "Mohammed Al-Marri",
    role: "Restaurant Chain Owner, UAE",
    text: "Barakat Al Waha delivers the finest frozen beef and chicken. Consistent quality, perfect packaging, and reliable cold chain every time.",
  },
  {
    name: "Lisa Wong",
    role: "Distributor, Singapore",
    text: "Their seafood selection is exceptional. The freshness and halal certification give us complete confidence in every order we place.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Importer, Mexico",
    text: "Professional service from order to delivery. Their team handles everything seamlessly—documentation, customs, and logistics excellence.",
  },
];

const itemsAr = [
  {
    name: "Mohammed Al-Marri",
    role: "مالك سلسلة مطاعم، الإمارات",
    text: "بركة الواحة تقدم أجود اللحوم والدجاج المجمد. جودة متسقة، تغليف مثالي، وسلسلة تبريد موثوقة في كل مرة.",
  },
  {
    name: "Lisa Wong",
    role: "موزع، سنغافورة",
    text: "تشكيلة المأكولات البحرية لديهم استثنائية. الطزاجة والشهادة الحلال تمنحنا ثقة كاملة في كل طلب.",
  },
  {
    name: "Carlos Rodriguez",
    role: "مستورد، المكسيك",
    text: "خدمة احترافية من الطلب إلى التسليم. فريقهم يتعامل مع كل شيء بسلاسة - التوثيق والجمارك والخدمات اللوجستية.",
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const items = isAr ? itemsAr : itemsEn;

  return (
    <section id="why-us" className="py-24 bg-background" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
         
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-balance">
            {isAr ? "ماذا يقول عملاؤنا" : "What Clients Say About Us"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-secondary/60 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Quote
                className={`w-10 h-10 text-accent absolute top-6 ${isAr ? "left-6" : "right-6"} opacity-40`}
              />
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-11 h-11 rounded-full gradient-brand flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
