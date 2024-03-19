import { Fragment, useEffect, useState } from "react";
import { Paragraph } from "../";
import "./BackToTopBtn.css";

export const BackToTopBtn = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBtnVisible(window.scrollY > 76);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {btnVisible ? (
        <button className="backToTopBtn btn" onClick={scrollUp}>
          <Paragraph textKey={"ui_back_to_top_btn"} />
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};
