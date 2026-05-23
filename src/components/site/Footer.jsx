import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/site/Navbar.jsx";

export default function Footer() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  return (
    <>
      <footer className="bg-brand-dark text-white pt-16 pb-8" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a
              href="#home"
              className="flex items-center mb-4 hover:opacity-90 transition-opacity"
            >
              <img src="/logo/log.png" alt="Barakat Al Waha Logo" style={{ width: "100px", height: "100px" }} className="object-contain" />
            </a>
            <p className="text-sm text-white/70 leading-relaxed">
              {isAr
                ? "مزود ممتاز لمنتجات اللحوم والدجاج والمأكولات البحرية المجمدة الحلال للعملاء في جميع أنحاء العالم. مكرسون للجودة والطزاجة والموثوقية."
                : "Premium provider of halal-certified frozen meat, chicken, and seafood products to clients worldwide. Dedicated to quality, freshness, and reliability."}
            </p>
          </div>

          <FooterCol
            title={isAr ? "روابط سريعة" : "Quick Links"}
            links={[
              { label: isAr ? "الرئيسية" : "Home", href: "#home" },
              { label: isAr ? "معلومات عنا" : "About Us", href: "#about" },
              { label: isAr ? "لماذا نختارنا" : "Why Us", href: "#why-us" },
              { label: isAr ? "اتصل بنا" : "Contact", href: "#contact" },
            ]}
          />
          <FooterCol
            title={isAr ? "المنتجات" : "Products"}
            links={[
              { label: isAr ? "اللحوم المجمدة" : "Frozen Meat", href: "#/category/frozen-meat" },
              { label: isAr ? "الدجاج المجمد" : "Frozen Chicken", href: "#/category/frozen-chicken" },
              {
                label: isAr ? "المأكولات البحرية المجمدة" : "Frozen Seafood",
                href: "#/category/frozen-seafood",
              },
              { label: isAr ? "قطع ممتازة" : "Premium Cuts", href: "#products" },
            ]}
          />

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {isAr ? "اتصل بنا" : "Contact"}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                {isAr ? "بزنس فيلج بلوك-ب، دبي، الإمارات" : "Business Village Block-B, Dubai, UAE"}
              </li>
              <li>
                <a href="tel:+97142942220" className="hover:text-accent transition-colors">
                  +971 4 294 2220
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@barakatalwaha.com"
                  className="hover:text-accent transition-colors"
                >
                  info@barakatalwaha.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-white/10 text-sm text-white/60 flex flex-col md:flex-row gap-2 justify-between">
          <p>
            © {new Date().getFullYear()} {isAr ? "بركة الواحة" : "Barakat Al Waha"}.{" "}
            {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </p>
          <p>{isAr ? "مزود أغذية مجمدة ممتاز" : "Premium Frozen Food Provider"}</p>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/971508263171"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>
    </>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-white/70 hover:text-accent transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
