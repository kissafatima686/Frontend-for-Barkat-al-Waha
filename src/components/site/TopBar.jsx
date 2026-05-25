import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/components/site/Navbar.jsx";

export default function TopBar() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const contactItems = [
    {
      icon: Phone,
      label: isAr ? "الهاتف" : "Phone",
      value: "+971 4 294 2220",
      href: "tel:+97142942220"
    },
    {
      icon: Mail,
      label: isAr ? "البريد" : "Email",
      value: "info@barakatalwaha.com",
      href: "mailto:info@barakatalwaha.com"
    },
    {
      icon: MapPin,
      label: isAr ? "الموقع" : "Location",
      value: isAr ? "دبي، الإمارات" : "Dubai, UAE",
      href: "https://maps.google.com/maps?ll=25.266358,55.328326&z=16&t=m"
    },
    {
      icon: Clock,
      label: isAr ? "الساعات" : "Hours",
      value: isAr ? "السبت - الخميس: 9am - 6pm" : "Sat - Thu: 9am - 6pm",
      href: null
    }
  ];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/90 border-b-2 border-accent"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 py-3 md:py-4 min-h-[80px]">
          {contactItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1 md:gap-2 group hover:scale-105 transition-transform"
              >
                <div className="p-2 md:p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <IconComponent className="w-4 md:w-5 h-4 md:h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-white/50 font-bold uppercase tracking-wider leading-none">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") && !item.href.startsWith("mailto") && !item.href.startsWith("tel") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") && !item.href.startsWith("mailto") && !item.href.startsWith("tel") ? "noopener noreferrer" : undefined}
                      className="text-xs md:text-sm text-white/80 hover:text-accent transition-colors font-medium truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs md:text-sm text-white/80 font-medium truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
