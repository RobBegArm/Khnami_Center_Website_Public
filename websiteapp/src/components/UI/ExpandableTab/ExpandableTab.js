import { Fragment, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Paragraph } from "../Paragraph";
import "./ExpandableTab.css";

export const ExpandableTab = (props) => {
  const [dropdownTabOpen, setDropdownTabOpen] = useState(false);

  const toggleTab = () => {
    setDropdownTabOpen(!dropdownTabOpen);
  };

  const { content } = props;

  return (
    <div className="expandable-tab container">
      <button className="expand-button btn" onClick={toggleTab}>
        {dropdownTabOpen ? (
          <Fragment>
            <BsChevronUp className="expand-chevron" />
            <Paragraph textKey={"ui_learn_more_btn_hide"} />
          </Fragment>
        ) : (
          <Fragment>
            <BsChevronDown className="expand-chevron" />
            <Paragraph textKey={"ui_learn_more_btn_expand"} />
          </Fragment>
        )}
      </button>
      <div
        className={`dropdown-content ${
          dropdownTabOpen ? "dropdown-content-open" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};
