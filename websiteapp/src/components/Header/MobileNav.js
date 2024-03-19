import { useDispatch, useSelector } from "react-redux";
import { SmoothScrollTo } from "../../hooks";
import { closeMenu } from "../../state";
import { Paragraph } from "../UI";

export const MobileNav = () => {
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  const closeMenuHandler = () => dispatch(closeMenu());

  const calculateScrollTop = () => {
    return window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  return (
    menuIsOpen && (
      <nav
        className={"main-nav mobile-nav main-nav--open"}
        style={{ top: `${calculateScrollTop()}px` }}
      >
        {/* <!-- header nav links --> */}
        <a
          href="#home"
          onClick={(e) => {
            SmoothScrollTo(e, "#home");
            closeMenuHandler();
          }}
          className={
            "btn header-link header-link--services margin-bot--md mobile-nav-link"
          }
        >
          <Paragraph textKey={"mobile_navigation_link_home"} />
        </a>
        <a
          href="#section_services"
          className={
            "btn header-link header-link--services margin-bot--md mobile-nav-link"
          }
          onClick={(e) => {
            SmoothScrollTo(e, "#section_services");
            closeMenuHandler();
          }}
        >
          <Paragraph textKey={"header_navigation_link_services"} />
        </a>
        <a
          href="#section_gallery"
          onClick={(e) => {
            SmoothScrollTo(e, "#section_gallery");
            closeMenuHandler();
          }}
          className={
            "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
          }
        >
          <Paragraph textKey={"header_navigation_link_gallery"} />
        </a>
        <a
          href="#section_team"
          onClick={(e) => {
            SmoothScrollTo(e, "#section_team");
            closeMenuHandler();
          }}
          className={
            "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
          }
        >
          <Paragraph textKey={"header_navigation_link_team"} />
        </a>
        <a
          href="#footer"
          onClick={(e) => {
            SmoothScrollTo(e, "#footer");
            closeMenuHandler();
          }}
          className={
            "btn header-link header-link--gallery margin-bot--md mobile-nav-link"
          }
        >
          <Paragraph textKey={"header_navigation_link_contact"} />
        </a>
      </nav>
    )
  );
};
