import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleButtonClick}
      style={{ display: isVisible ? "block" : "none" }}
      className="fixed bottom-8 right-10 z-10 cursor-pointer rounded-lg bg-black p-3 text-white shadow-lg hover:opacity-90"
    >
      <FaChevronUp />
    </div>
  );
};

export default ScrollToTop;
