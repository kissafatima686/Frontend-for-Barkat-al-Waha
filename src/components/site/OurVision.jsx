import { motion } from "framer-motion";
import { useLanguage } from "@/components/site/Navbar.jsx";
import { Eye, Target, Leaf } from "lucide-react";

export default function OurVision() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const visionPoints = [
    {
      icon: Eye,
      en: "Quality Excellence",
      ar: "تحقيق التميز",
      descEn: "Delivering premium frozen food products that meet international quality standards",
      descAr: "تقديم منتجات غذائية مجمدة فاخرة تتوافق مع معايير الجودة الدولية",
    },
    {
      icon: Target,
      en: "Customer Satisfaction",
      ar: "رضا العملاء",
      descEn: "Building lasting relationships through reliable service and exceptional products",
      descAr: "بناء علاقات دائمة من خلال خدمة موثوقة ومنتجات استثنائية",
    },
    {
      icon: Leaf,
      en: "Sustainable Growth",
      ar: "النمو المستدام",
      descEn: "Promoting sustainable practices while maintaining freshness and quality",
      descAr: "تعزيز الممارسات المستدامة مع الحفاظ على الطزاجة والجودة",
    },
  ];

  return (
    <section id="our-vision" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold uppercase text-sm tracking-[0.2em] block mb-3"
          >

          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            {isAr ? "رؤيتنا للمستقبل" : "Our Vision for the Future"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            {isAr
              ? "في بركة الواحة، نسعى لتصبح الاختيار الأول للمنتجات الغذائية المجمدة الفاخرة في دولة الإمارات العربية المتحدة، مع تقديم منتجات عالية الجودة وخدمات لا تضاهى."
              : "At Barakat Al Waha, we strive to become the leading choice for premium frozen food products in the UAE, delivering exceptional quality and unparalleled service."}
          </motion.p>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl mb-3 text-slate-900">
                    {isAr ? point.ar : point.en}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {isAr ? point.descAr : point.descEn}
                  </p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00682a] to-[#004d1f] rounded-3xl p-8 md:p-12 shadow-xl border border-[#005a24] text-white"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center text-white">
            {isAr ? "قيمنا الأساسية" : "Our Core Values"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-2 text-accent">
                {isAr ? "النزاهة" : "Integrity"}
              </h4>
              <p className="text-white/80">
                {isAr
                  ? "نلتزم بأعلى معايير الأخلاقيات والشفافية"
                  : "Committed to highest ethical standards"}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-2 text-accent">
                {isAr ? "الابتكار" : "Innovation"}
              </h4>
              <p className="text-white/80">
                {isAr
                  ? "البحث عن طرق جديدة لتحسين خدماتنا"
                  : "Constantly seeking ways to improve"}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-2 text-accent">
                {isAr ? "المسؤولية" : "Responsibility"}
              </h4>
              <p className="text-white/80">
                {isAr
                  ? "نتحمل مسؤوليتنا تجاه المجتمع والبيئة"
                  : "Responsible to community & environment"}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
