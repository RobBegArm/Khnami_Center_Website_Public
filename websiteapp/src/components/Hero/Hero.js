import { Fragment } from "react";
import { SmoothScrollTo } from "../../hooks";

import { useSelector } from "react-redux";
import { getText } from "../../utils";
import "./Hero.css";

export const Hero = () => {
  const language = useSelector((state) => state.language.activeLanguage);

  return (
    <section className="section-hero padding--section">
      <div className="container hero grid grid--2-cols centered--vertically">
        <div className="hero-text-box grid">
          <Fragment>
            {/* Hero Headline */}
            <h1 className={`heading-primary language--${language}`}>
              {getText("hero_headline", language)}
            </h1>
            {/* Hero Description */}
            <p className="hero-description language--en">
              {getText("hero_description", language)}
            </p>
            {/* <!-- hero cta --> */}
            <a
              href="#section_cta"
              onClick={(e) => SmoothScrollTo(e, "#section_cta")}
              className="btn hero-cta-btn shadow--animated language--en"
            >
              <p>{getText("hero_cta", language)}</p>
            </a>
          </Fragment>
        </div>
        <div className="hero-img-box">
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/util/Personnel1cropped-enhanced.webp`}
              type="image/webp"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/util/Personnel1cropped-enhanced.png`}
              className="hero-img shadow"
              alt={getText("hero_alt", language)}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
