import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/site/Navbar.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [productInterest, setProductInterest] = useState("");

  useEffect(() => {
    const handlePrefill = (e) => {
      setProductInterest(e.detail.productName);
    };
    window.addEventListener("prefill-product-contact", handlePrefill);
    return () => window.removeEventListener("prefill-product-contact", handlePrefill);
  }, []);

  return (
    <section id="contact" className="py-24 bg-secondary/40" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
       
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-balance">
            {isAr ? "اتصل ببركة الواحة" : "Contact Barakat Al Waha"}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-3xl p-7 gradient-brand text-white shadow-xl">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-semibold mb-1">
                    {isAr ? "المكتب الرئيسي — دبي، الإمارات" : "Head Office — Dubai, UAE"}
                  </h4>
                  <p className="text-sm opacity-90">
                    {isAr
                      ? "بزنس فيلج بلوك-ب، الطابق 3، مكتب 301"
                      : "Business Village Block-B, 3rd Floor, Office 301"}
                  </p>
                  <p className="text-sm opacity-90">{isAr ? "دبي، الإمارات" : "Dubai, UAE"}</p>
                  <p className="text-sm opacity-75 mt-2">
                    {isAr
                      ? "بالقرب من محطة مترو DCC (مخرج 3، ~500 متر مشي)"
                      : "Near DCC Metro Station (Exit 3, ~500m walk)"}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-7 bg-white shadow-md">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-semibold mb-1">
                    {isAr ? "معلم الموقع" : "Location Landmark"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isAr ? "مقابل برج الساعة دبي" : "Opposite to Clock Tower Dubai"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isAr
                      ? "يمكن الوصول بسهولة عبر وسائل النقل العام"
                      : "Easily accessible via public transport"}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="rounded-3xl p-6 bg-white shadow-md flex flex-col justify-between">
                <div>
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{isAr ? "الهاتف" : "Phone"}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+97142942220" className="hover:text-primary transition-colors">
                    +971 4 294 2220
                  </a>
                </p>
              </div>
              <div className="rounded-3xl p-6 bg-white shadow-md flex flex-col justify-between">
                <div>
                  <svg className="w-6 h-6 text-[#25D366] mb-3 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <h4 className="font-semibold mb-1">{isAr ? "واتساب" : "WhatsApp"}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://wa.me/971508263171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +971 50 826 3171
                  </a>
                </p>
              </div>
              <div className="rounded-3xl p-6 bg-white shadow-md flex flex-col justify-between">
                <div>
                  <Mail className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="mailto:info@barakatalwaha.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@barakatalwaha.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setProductInterest("");
              e.target.reset();
              setTimeout(() => setSent(false), 3000);
            }}
            className="bg-white rounded-3xl p-8 shadow-xl space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={isAr ? "الاسم الكامل" : "Full Name"} type="text" placeholder={isAr ? "أدخل اسمك الكامل" : "Full Name"} />
              <Field label={isAr ? "عنوان البريد الإلكتروني" : "Email Address"} type="email" placeholder={isAr ? "example@email.com" : "Email Address"} />
            </div>
            <Field
              label={isAr ? "الموضوع" : "Subject"}
              type="text"
              placeholder={isAr ? "موضوع رسالتك" : "Subject"}
              value={productInterest}
              onChange={(e) => setProductInterest(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium mb-2">
                {isAr ? "رسالتك" : "Your Message"}
              </label>
              <textarea
                rows={5}
                required
                placeholder={isAr ? "أدخل رسالتك هنا..." : "Your Message"}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl gradient-brand text-white font-semibold hover:-translate-y-0.5 transition-transform shadow-lg"
            >
              {sent ? (
                isAr ? (
                  "تم الإرسال ✓"
                ) : (
                  "Message Sent ✓"
                )
              ) : (
                <>
                  {isAr ? "إرسال الرسالة" : "Send Message"} <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Google Maps Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-[400px] w-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1256037084534!2d55.32832577631388!3d25.26635817766627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ccfc28a7e47%3A0xe54d924dc1c1f5ab!2sBusiness%20Village%20-%20Dubai!5e0!3m2!1sen!2sae!4v1716616000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Barakat Al Waha Location Map"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, type, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
