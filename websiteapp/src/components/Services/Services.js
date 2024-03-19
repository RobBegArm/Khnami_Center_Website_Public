import {
  IoHeartOutline,
  IoHomeOutline,
  IoMedkitOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { getText } from "../../utils";
import { ExpandableTab, Paragraph } from "../UI";
import { Service } from "./Service";
import "./Services.css";

export const Services = () => {
  const language = useSelector((state) => state.language.activeLanguage);

  return (
    <section
      className="section-services padding--section"
      id="section_services"
    >
      {/* <!-- services headline --> */}
      <div className="container services-headline padding-bot-lg1">
        <h2 className={`heading-secondary language language--${language}`}>
          {getText("services_headline", language)}
        </h2>
      </div>
      {/* <!-- Services grid --> */}
      <div className="services container grid grid--3-cols">
        {/* <!-- Services: accomodation --> */}
        <Service
          serviceIndex="1"
          icon={<IoHomeOutline className="services-main-icon" />}
        />
        {/* <!-- Services: care --> */}
        <Service
          serviceIndex="2"
          icon={<IoHeartOutline className="services-main-icon" />}
        />
        {/* <!-- Services: treatment --> */}
        <Service
          serviceIndex="3"
          icon={<IoMedkitOutline className="services-main-icon" />}
        />
      </div>
      <div className="info-box info-padded">
        <h3>{getText("learn_more_headline_1", language)}</h3>
        <Paragraph textKey={"learn_more_paragraph_1"} />
        <Paragraph textKey={"learn_more_paragraph_2"} />
        <Paragraph textKey={"learn_more_paragraph_3"} />
        <Paragraph textKey={"learn_more_paragraph_4"} />
      </div>
      {/* <!-- Learn More Expendable Tab --> */}
      <ExpandableTab
        content={
          <div className="additional-info-box">
            <div className="info-box">
              <h3>{getText("learn_more_headline_2", language)}</h3>
              <ul className="list additional-info-list">
                <li>
                  <Paragraph textKey={"learn_more_paragraph_5"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_6"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_7"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_8"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_9"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_10"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_11"} />
                </li>
              </ul>
            </div>
            <div className="info-box">
              <h3>{getText("learn_more_headline_3", language)}</h3>
              <ul className="list additional-info-list">
                <li>
                  <Paragraph textKey={"learn_more_paragraph_12"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_13"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_14"} />
                </li>
              </ul>
            </div>
            <div className="info-box">
              <Paragraph textKey={"learn_more_paragraph_15"} />
            </div>
            <div className="info-box">
              <h3>{getText("learn_more_headline_4", language)}</h3>
              <ul className="list additional-info-list">
                <li>
                  <Paragraph textKey={"learn_more_paragraph_16"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_17"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_18"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_19"} />
                </li>
              </ul>
            </div>
            <div className="info-box">
              <h3>{getText("learn_more_headline_5", language)}</h3>
              <ul className="list additional-info-list">
                <li>
                  <Paragraph textKey={"learn_more_paragraph_20"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_21"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_22"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_23"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_24"} />
                </li>
                <li>
                  <Paragraph textKey={"learn_more_paragraph_25"} />
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </section>
  );
};
