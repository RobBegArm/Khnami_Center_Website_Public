import { useEffect, useState } from "react";

export const SmoothScrollTo = (e, href) => {
  e.preventDefault();
  //Scroll back to top
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  //Scroll to other links
  else if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
};

export const useWindowDimensions = () => {
  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
      width,
    };
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
