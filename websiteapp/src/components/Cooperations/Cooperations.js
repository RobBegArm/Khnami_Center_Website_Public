import { Paragraph } from "../UI";
import "./Cooperations.css";

export const Cooperations = () => {
  return (
    <section className="section-cooperations padding--section">
      <div className="cooperations container">
        {/* <!-- cooperations headline --> */}
        <Paragraph textKey={"cooperations_headline"} />
        {/* <!-- cooperations logos --> */}
        <div className="coop-logo-box flex--centered-vertically">
          <img
            className="coop-logo-img"
            src={`${process.env.PUBLIC_URL}/images/cooperations/UNFPA_logo.png`}
            alt="UNFPA Logo"
          />
          <img
            className="coop-logo-img"
            src={`${process.env.PUBLIC_URL}/images/cooperations/ACA_logo.png`}
            alt="ACA Logo"
          />
          <img
            className="coop-logo-img"
            src={`${process.env.PUBLIC_URL}/images/cooperations/FriendsHome_logo.png`}
            alt="Friends Home Logo"
          />
          <img
            className="coop-logo-img"
            src={`${process.env.PUBLIC_URL}/images/cooperations/Promtest_logo.png`}
            alt="Promtest Laboratories Logo"
          />
        </div>
      </div>
    </section>
  );
};
