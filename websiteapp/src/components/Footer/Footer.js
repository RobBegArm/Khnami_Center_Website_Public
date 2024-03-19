import { IoCaretDownOutline, IoLogoFacebook } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { SmoothScrollTo } from "../../hooks";
import { setLanguage } from "../../state";
import { getText } from "../../utils";
import { Paragraph } from "../UI";
import "./Footer.css";

export const Footer = () => {
  const language = useSelector((state) => state.language.activeLanguage);
  const dispatch = useDispatch();

  const languageSelectHandler = (lang) => dispatch(setLanguage(lang));

  let year = new Date().getFullYear().toString();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-content grid">
        {/* <!-- facebook --> */}
        <div className="footer-item social-media-box flex-column padding-top--sm">
          <Paragraph
            textKey={"footer_headline_facebook"}
            additionalClasses={"footer-headline center-text"}
          />
          <div className="facebook-link-box flex--centered">
            <NavLink
              to="https://www.facebook.com/Khnamicenter"
              target={"_blank"}
              className="social-media-link"
            >
              <IoLogoFacebook />
            </NavLink>
          </div>
        </div>
        {/* <!-- logo and copyright --> */}
        <div className="footer-item footer-logo-and-copyright flex-column">
          <div className="footer-logo-box">
            <a
              href="#home"
              className="btn footer-link--home"
              onClick={(e) => SmoothScrollTo(e, "#home")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/util/logo.png`}
                alt="Khnami Logo"
                className="footer-logo-img"
              />
            </a>
          </div>
          <div className="footer-copyright-box">
            <p className={`copyright language language--${language}`}>
              &copy; {year} {getText("footer_copyright", language)}
            </p>
          </div>
        </div>
        {/* <!-- adress --> */}
        <div className="footer-item footer-contact flex-column padding-top--sm">
          <Paragraph
            textKey={"footer_headline_contact"}
            additionalClasses={"footer-headline"}
          />
          <Paragraph
            textKey={"footer_address_line_1"}
            additionalClasses={"footer-contact-address"}
          />
          <Paragraph
            textKey={"footer_address_line_2"}
            additionalClasses={"footer-contact-address"}
          />
          <Paragraph
            textKey={"footer_address_phone"}
            additionalClasses={"footer-contact-phone"}
          />
          <Paragraph
            textKey={"footer_address_email"}
            additionalClasses={"footer-contact-email"}
          />
        </div>
        {/* <!-- language select --> */}
        <div className="footer-item footer-lang-select flex-column padding-top--sm">
          <Paragraph
            textKey={"footer_btn_language"}
            additionalClasses={"footer-headline"}
          />
          {/* <!-- language select dropdown--> */}
          <div className="lang-select-dropdown margin-bot--md">
            <button className="lang-select-dropdown-btn flex--centered">
              {language === "en" && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/UKflag.svg`}
                  alt="UK flag"
                  className="flag-img"
                />
              )}
              {language === "ru" && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/RUflag.svg`}
                  alt="RU flag"
                  className="flag-img"
                />
              )}
              {language === "arm" && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/ARMflag.svg`}
                  alt="ARM flag"
                  className="flag-img"
                />
              )}
              <IoCaretDownOutline />
            </button>
            <div className="lang-select-dropdown-content footer--lang-select-dropdown-content hidden-content">
              <NavLink
                className={"lang-select lang-select--arm"}
                onClick={() => languageSelectHandler("arm")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/ARMflag.svg`}
                  alt="ARM flag"
                  className="flag-img"
                />
                <p className="armenian footer--lang-select--armenian">
                  Հայերեն
                </p>
              </NavLink>
              <NavLink
                className={"lang-select lang-select--ru"}
                onClick={() => languageSelectHandler("ru")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/RUflag.svg`}
                  alt="RU flag"
                  className="flag-img"
                />
                <p>Русский</p>
              </NavLink>
              <NavLink
                className={"lang-select lang-select--en"}
                onClick={() => languageSelectHandler("en")}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/util/UKflag.svg`}
                  alt="UK flag"
                  className="flag-img"
                />
                <p>English</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
