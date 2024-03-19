import { IoCheckmarkOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Paragraph } from "../UI";

export const Service = (props) => {
  const { serviceIndex } = props;
  const language = useSelector((state) => state.language.activeLanguage);

  return (
    <div className="services-box grid shadow--dark">
      {
        <Paragraph
          lang={language}
          textKey={`service_${serviceIndex}_headline`}
          additionalClasses={"services-box-header"}
        />
      }
      <div className="services-icon-box">{props.icon}</div>
      <ul className="services--list list">
        <li className="service" key={`service_key_${serviceIndex}_feature_1`}>
          <div className="checkmark">
            <IoCheckmarkOutline className="checkmark-icon" />
          </div>
          <Paragraph textKey={`service_${serviceIndex}_feature_1`} />
        </li>
        <li className="service" key={`service_key_${serviceIndex}_feature_2`}>
          <div className="checkmark">
            <IoCheckmarkOutline className="checkmark-icon" />
          </div>
          <Paragraph textKey={`service_${serviceIndex}_feature_2`} />
        </li>
        <li className="service" key={`service_key_${serviceIndex}_feature_3`}>
          <div className="checkmark">
            <IoCheckmarkOutline className="checkmark-icon" />
          </div>
          <Paragraph textKey={`service_${serviceIndex}_feature_3`} />
        </li>
        <li className="service" key={`service_key_${serviceIndex}_feature_4`}>
          <div className="checkmark">
            <IoCheckmarkOutline className="checkmark-icon" />
          </div>
          <Paragraph textKey={`service_${serviceIndex}_feature_4`} />
        </li>
      </ul>
    </div>
  );
};
