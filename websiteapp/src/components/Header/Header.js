import { Fragment } from "react";
import {
  IoCallOutline,
  IoCaretDownOutline,
  IoCloseSharp,
  IoMenuSharp,
  IoNavigateOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SmoothScrollTo } from "../../hooks";
import { setLanguage, toggleMenu } from "../../state";
import { getText } from "../../utils";
import { Paragraph } from "../UI";
import "./Header.css";

export const Header = () => {
  const language = useSelector((state) => state.language.activeLanguage);
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => dispatch(toggleMenu());
  const languageSelectHandler = (lang) => dispatch(setLanguage(lang));

  return (
    <Fragment>
      <header className="header-bg" id="home">
        <div className="header container flex--centered-vertically">
          {/* <!-- Header Navigation --> */}
          <div className="header-nav flex--centered-vertically">
            {/* <!-- logo link --> */}
            <a
              href="#home"
              onClick={(e) => SmoothScrollTo(e, "#home")}
              className="btn header-link header-link--home"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/util/logo.png`}
                alt="Khnami Logo"
                className="header-logo-img"
              />
            </a>
            <nav className={`main-nav`}>
              {/* <!-- header nav links --> */}
              <a
                href="#section_services"
                onClick={(e) => SmoothScrollTo(e, "#section_services")}
                className={
                  "btn header-link header-link--services margin-bot--md mobile-nav-link"
                }
              >
                <Paragraph textKey={"header_navigation_link_services"} />
              </a>
              <a
                href="#section_gallery"
                onClick={(e) => SmoothScrollTo(e, "#section_gallery")}
                className={
                  "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
                }
              >
                <Paragraph textKey={"header_navigation_link_gallery"} />
              </a>
              <a
                href="#section_team"
                onClick={(e) => SmoothScrollTo(e, "#section_team")}
                className={
                  "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
                }
              >
                <Paragraph textKey={"header_navigation_link_team"} />
              </a>
              <a
                href="#footer"
                onClick={(e) => SmoothScrollTo(e, "#footer")}
                className={
                  "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
                }
              >
                <Paragraph textKey={"header_navigation_link_contact"} />
              </a>
            </nav>
            {/* <!-- language select dropdown--> */}
            <div className="lang-select-dropdown margin-bot--md">
              <button className="lang-select-dropdown-btn flex--centered header-lang-select">
                <IoCaretDownOutline />
                <Paragraph textKey={"header_navigation_active_language"} />
              </button>
              <div className="lang-select-dropdown-content hidden-content">
                <NavLink
                  className={"lang-select lang-select--arm"}
                  onClick={() => languageSelectHandler("arm")}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/util/ARMflag.svg`}
                    alt="ARM flag"
                    className="flag-img"
                  />
                  <p className="armenian header--lang-select--armenian">
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
          {/* <!-- header contact links --> */}
          <div className="header-contact">
            <div className="header-contact-container flex--centered-vertically">
              <address className="header-address grid">
                {/* <!-- mobile navbar --> */}
                <button className="btn-mobile-nav" onClick={toggleMenuHandler}>
                  {menuIsOpen ? (
                    <IoCloseSharp className="icon-mobile-nav btn--close-nav invisible" />
                  ) : (
                    <IoMenuSharp className="icon-mobile-nav btn--open-nav" />
                  )}
                </button>
                {/* <!-- map location --> */}
                <NavLink
                  to="https://www.google.com/maps/place/%D4%BD%D5%B6%D5%A1%D5%B4%D5%AB+%D5%BA%D5%A1%D5%AC%D5%AB%D5%A1%D5%BF%D5%AB%D5%BE+%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6/@40.1821798,44.438874,17z/data=!3m1!4b1!4m6!3m5!1s0x406abda80d03f0d5:0x2865fddec7b6db21!8m2!3d40.1821757!4d44.4414489!16s%2Fg%2F11y2f9mb1t?entry=ttu"
                  target={"_blank"}
                  className="header-address-box flex--centered-vertically address-link"
                >
                  <IoNavigateOutline className="header-icon" />
                  <div className="header-address-text">
                    <Paragraph textKey={"header_address"} />
                  </div>
                </NavLink>
                {/* <!-- Phone Number  --> */}
                <NavLink
                  to={"tel:+37493577539"}
                  target={"_blank"}
                  className="header-address-box flex--centered-vertically address-link"
                >
                  <IoCallOutline className="header-icon" />
                  <div className="header-address-text">
                    <p className="address-text">
                      {getText("header_phone_number", language)}
                    </p>
                  </div>
                </NavLink>
              </address>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
