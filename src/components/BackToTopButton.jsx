import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/601133094116" // <-- Change to your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success"
          style={{
            position: "fixed",
            bottom: "90px", // just above the back-to-top
            right: "30px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="btn btn-primary"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            zIndex: 9999,
          }}
          aria-label="Back to Top"
        >
          ↑
        </button>
      </>
    )
  );
};
