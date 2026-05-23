import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Plus, Minus } from "lucide-react";
import Navbar, { useLanguage } from "@/components/site/Navbar.jsx";
import Footer from "@/components/site/Footer.jsx";
import { productDatabase, categoryGradients } from "@/lib/products.js";


export default function ProductDetailsPage({ productId }) {
  const product = productDatabase[productId];
  const { language } = useLanguage();
  const isAr = language === "ar";

  const [weightIndex, setWeightIndex] = useState(0);
  const [pkgIndex, setPkgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = isAr
        ? `${product.nameAr} - ${product.categoryAr} | بركة الواحة`
        : `${product.name} - ${product.category} | Barakat Al Waha`;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          isAr
            ? `اشترِ ${product.nameAr} المعتمد حلال من بركة الواحة في دبي. ${product.descriptionAr}`
            : `Buy premium halal-certified ${product.name} from Barakat Al Waha Dubai. ${product.description}`
        );
      }
    }
  }, [product, isAr]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white pt-44 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {isAr ? "المنتج غير موجود" : "Product Not Found"}
            </h1>
            <a href="#products" className="text-accent hover:underline">
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const gradient = categoryGradients[product.category] || "from-brand-dark to-brand-dark";
  const weightsList = isAr ? product.specifications.weightAr : product.specifications.weight;
  const pkgList = isAr ? product.specifications.packagingAr : product.specifications.packaging;

  const handleWhatsAppOrder = () => {
    const pName = isAr ? product.nameAr : product.name;
    const wVal = weightsList[weightIndex] || product.specifications.weight[weightIndex];
    const pVal = pkgList[pkgIndex] || product.specifications.packaging[pkgIndex];

    const message = isAr
      ? `مرحباً، أنا مهتم بطلب:\n\nالمنتج: ${pName}\nالكمية: ${quantity}\nالوزن المحدد: ${wVal}\nنوع التعبئة: ${pVal}\n\nيرجى تزويدي بالأسعار والتوافر.`
      : `Hi, I'm interested in ordering:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nWeight: ${wVal}\nPackaging: ${pVal}\n\nPlease provide pricing and availability.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971508263171?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-56 pb-16" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <a
            href="#products"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-slate-800 font-semibold text-sm transition-all duration-300 shadow-sm border border-slate-200/80 mb-8 hover:${isAr ? "translate-x-1" : "-translate-x-1"}`}
          >
            <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            {isAr ? "العودة إلى المنتجات" : "Back to Products"}
          </a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="flex items-center justify-center">
              <div
                className={`relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${gradient}`}
              >
                {product.img && (
                  <img
                    src={product.img}
                    alt={isAr ? product.nameAr : product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                    onLoad={() => setImgLoaded(true)}
                  />
                )}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                  }}
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none hover:opacity-0 transition-opacity">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-display text-5xl font-bold text-white">
                        {(isAr ? product.nameAr : product.name)[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div
                  className={`absolute top-6 ${isAr ? "right-6" : "left-6"} z-10 px-4 py-2 rounded-full bg-accent text-brand-dark font-bold text-sm`}
                >
                  {isAr ? product.categoryAr : product.category}
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                {isAr ? product.nameAr : product.name}
              </h1>
              <p className="text-3xl font-bold text-accent mb-6">
                {isAr ? product.price.replace("AED", "درهم إماراتي") : product.price}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {isAr ? product.descriptionAr : product.description}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {isAr ? "الوزن" : "Weight"}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {weightsList.map((w, index) => (
                      <button
                        key={w}
                        onClick={() => setWeightIndex(index)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${weightIndex === index ? "bg-accent text-brand-dark shadow-lg" : "bg-secondary text-foreground hover:bg-secondary/80"}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    {isAr ? "نوع التعبئة والتغليف" : "Packaging Type"}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {pkgList.map((p, index) => (
                      <button
                        key={p}
                        onClick={() => setPkgIndex(index)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${pkgIndex === index ? "bg-accent text-brand-dark shadow-lg" : "bg-secondary text-foreground hover:bg-secondary/80"}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">{isAr ? "المنشأ" : "Origin"}</p>
                    <p className="font-semibold text-foreground">
                      {isAr ? product.specifications.originAr : product.specifications.origin}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {isAr ? "درجة حرارة التخزين" : "Storage Temperature"}
                    </p>
                    <p className="font-semibold text-foreground">
                      {isAr ? product.specifications.storageAr : product.specifications.storage}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {isAr ? "لماذا تختار هذا المنتج؟" : "Why Choose This Product?"}
                </h3>
                <ul className="space-y-3">
                  {(isAr ? product.benefitsAr : product.benefits).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 text-accent flex-shrink-0 mt-0.5 ${isAr ? "ml-1" : ""}`}
                      />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-6 bg-secondary rounded-xl">
                <label className="block text-sm font-semibold text-foreground mb-4">
                  {isAr ? "الكمية" : "Quantity"}
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 rounded-lg bg-accent text-brand-dark hover:scale-110 transition-transform"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 text-center text-2xl font-bold border-2 border-accent rounded-lg py-2 px-4 bg-white"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 rounded-lg bg-accent text-brand-dark hover:scale-110 transition-transform"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-lg hover:bg-[#20ba59]"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {isAr ? "اطلب عبر الواتساب" : "Order on WhatsApp"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
