import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { useDispatch, useSelector } from "react-redux";
import {
  BackToTopBtn,
  ContactForm,
  Cooperations,
  Footer,
  Gallery,
  Header,
  Hero,
  MobileNav,
  Services,
  Team,
} from "../components";
import { useWindowDimensions } from "../hooks";
import { closeMenu, setLanguage } from "../state";
import { getLanguage, getText } from "../utils";

export const Homepage = (props) => {
  const { lang } = props;
  const language = getLanguage(lang);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLanguage(language));
  }, [dispatch, language]);

  //Prevent scrolling when menu is open
  const menuIsOpen = useSelector((state) => state.menu.isOpen);
  document.querySelector("*").style.overflow = menuIsOpen
    ? "hidden"
    : "inherit";

  const closeMenuHandler = () => dispatch(closeMenu());

  //Calculate Window Width to check if menu should be force closed
  let needToForceCloseMenu = false;
  const { width } = useWindowDimensions();
  if (width >= 993 && menuIsOpen) {
    needToForceCloseMenu = true;
  }

  //Close Menu If Opening Menu First, and then enlarging the view
  useEffect(() => {
    if (needToForceCloseMenu && menuIsOpen) {
      closeMenuHandler();
    }
  });

  return (
    <Fragment>
      <Helmet>
        <title>{getText("seo_document_title", language)}</title>
        <meta
          name="description"
          lang={language}
          content={getText("seo_meta_description", language)}
        />
        <meta
          name="keywords"
          content={getText("seo_meta_keywords", language)}
        />
        <meta
          property="og:title"
          content={getText("seo_document_title", language)}
        />
        <meta property="og:url" content={getText("seo_meta_url", language)} />
        <meta
          property="og:description"
          content={getText("seo_og_description", language)}
        />
        <link rel="canonical" href={getText("seo_meta_url", language)} />
      </Helmet>
      <Header />
      <main>
        <MobileNav />
        <Hero />
        <Services />
        <Gallery />
        <Team />
        <ContactForm />
        <Cooperations />
        <BackToTopBtn />
      </main>
      <Footer />
    </Fragment>
  );
};
