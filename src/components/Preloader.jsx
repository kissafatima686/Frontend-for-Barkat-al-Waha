import { useState, useEffect } from "react";

export default function Preloader({ onLoadComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 300);

    // Wait for CSS and fonts to load
    const checkResourcesLoaded = () => {
      // Check if all stylesheets are loaded
      const stylesheets = document.querySelectorAll("link[rel='stylesheet']");
      let allLoaded = true;

      stylesheets.forEach((sheet) => {
        if (!sheet.sheet) {
          allLoaded = false;
        }
      });

      // Check if fonts are loaded
      if (document.fonts && typeof document.fonts.ready !== "undefined") {
        document.fonts.ready.then(() => {
          setLoadingProgress(100);
          setTimeout(() => {
            setIsLoading(false);
            onLoadComplete();
          }, 400);
        });
      } else if (allLoaded) {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadComplete();
        }, 400);
      }
    };

    // Check if window is fully loaded
    if (document.readyState === "complete") {
      checkResourcesLoaded();
    } else {
      window.addEventListener("load", checkResourcesLoaded);
      return () => {
        window.removeEventListener("load", checkResourcesLoaded);
        clearInterval(progressInterval);
      };
    }

    return () => clearInterval(progressInterval);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      {/* Logo or Brand */}
      <div className="mb-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#00682a] mb-2">
          Barakat Al Waha
        </h1>
        <p className="text-slate-600 text-lg">Premium Frozen Foods</p>
      </div>

      {/* Loading Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00682a] border-r-[#00682a] animate-spin"
          style={{
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00682a] to-[#00a83a] transition-all duration-300"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-slate-500 text-sm font-medium">
        Loading resources{Math.floor(loadingProgress)}%
      </p>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
