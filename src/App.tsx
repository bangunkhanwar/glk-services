import "./index.css";
import { Glk } from "./components/Glk";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Glk />

      {/* Scroll To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-cyan-400 text-[#0a0a14]
            flex items-center justify-center
            shadow-lg shadow-cyan-400/30
            transition-all duration-300
            hover:scale-110 hover:shadow-cyan-400/50
            active:scale-95
            animate-[fadeIn_0.3s_ease]
          "
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default App;