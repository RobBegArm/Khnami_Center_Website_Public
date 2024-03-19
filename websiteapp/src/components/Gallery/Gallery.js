import { useState } from "react";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
  IoEllipse,
  IoEllipseOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";

import { getText } from "../../utils";
import "./Gallery.css";
import { Testimonial } from "./Testimonial";

export const Gallery = () => {
  const language = useSelector((state) => state.language.activeLanguage);

  const galleryImgCount = 11;
  const [activeImageNumber, setActiveImageNumber] = useState(1);

  const switchRight = () => {
    setActiveImageNumber(
      activeImageNumber < galleryImgCount ? activeImageNumber + 1 : 1
    );
  };

  const switchLeft = () => {
    setActiveImageNumber(
      activeImageNumber > 1 ? activeImageNumber - 1 : galleryImgCount
    );
  };

  const setImageDirectly = (index) => {
    setActiveImageNumber(index);
  };

  const galleryBulletsArray = Array.from({ length: galleryImgCount });

  const galleryNavBullets = galleryBulletsArray.map((_el, i) => {
    return (
      <li
        className="gallery-nav-bullet"
        id={`gallery_bullet_${i + 1}`}
        key={`key_nav_bullet_${i + 1}`}
        onClick={() => setImageDirectly(i + 1)}
      >
        {activeImageNumber === i + 1 ? (
          <IoEllipse className="gallery-nav-icon" />
        ) : (
          <IoEllipseOutline className="gallery-nav-icon" />
        )}
      </li>
    );
  });

  // Gallery on Touch

  let userTouchX;

  const handleStart = (e) => {
    userTouchX = e.changedTouches[0].clientX;
  };

  const handleEnd = (e) => {
    let slideSize = e.changedTouches[0].clientX - userTouchX;
    if (Math.abs(slideSize) > 50) {
      slideSize > 0 ? switchLeft() : switchRight();
    }
  };

  return (
    <section className="section-gallery padding--section" id="section_gallery">
      {/* <!-- gallery headline --> */}
      <div className="container gallery-headline padding-bot-lg1">
        <h2 className={`heading-secondary language--${language}`}>
          {getText("gallery_headline", language)}
        </h2>
      </div>
      {/* <!-- gallery container --> */}
      <div className="gallery--container gallery grid">
        <div className="gallery-element">
          {/* <!-- gallery image --> */}
          <div
            className={"gallery-img-box shadow--dark--strong"}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
          >
            <picture className="gallery-picture">
              <source
                srcSet={`${process.env.PUBLIC_URL}/images/gallery/Gallery-img-${activeImageNumber}.webp`}
                type="image/webp"
              />
              <img
                srcSet={`${process.env.PUBLIC_URL}/images/gallery/Gallery-img-${activeImageNumber}.webp`}
                className="gallery-img"
                alt={getText("gallery_alt", language)}
              />
            </picture>
          </div>
          {/* <!-- gallery buttons --> */}
          <button className="gallery-btn gallery-btn-left" onClick={switchLeft}>
            <IoChevronBackCircleOutline className="gallery-img-icon shadow--dark--strong" />
          </button>
          <button
            className="gallery-btn gallery-btn-right"
            onClick={switchRight}
          >
            <IoChevronForwardCircleOutline className="gallery-img-icon shadow--dark--strong" />
          </button>
        </div>
        {/* <!-- gallery navigation --> */}
        <nav className="gallery-nav">
          <ul className="gallery-nav-bullets list"> {galleryNavBullets}</ul>
        </nav>
      </div>
      {/* <!-- testimonials container --> */}
      <div className="testimonials container grid grid--2-cols">
        <Testimonial
          lang={language}
          customerName="customerSirush"
          testimonialIndex="1"
        />
        <Testimonial
          lang={language}
          customerName="customerAshot"
          testimonialIndex="2"
        />
        <Testimonial
          lang={language}
          customerName="customerIrina"
          testimonialIndex="3"
        />
        <Testimonial
          lang={language}
          customerName="customerAnahit"
          testimonialIndex="4"
        />
      </div>
    </section>
  );
};
