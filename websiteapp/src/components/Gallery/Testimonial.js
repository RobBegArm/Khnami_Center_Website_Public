import { Fragment } from "react";
import { getLanguage, getText } from "../../utils";
import { Paragraph } from "../UI";

export const Testimonial = (props) => {
  const { lang, customerName, testimonialIndex } = props;
  const language = getLanguage(lang);

  return (
    <div className="testimonial-box">
      <picture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/images/customers/${customerName}.webp`}
          type="image/webp"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/customers/${customerName}.jpg`}
          className="testimonial-img margin-bot--sm"
          alt="Customer Face"
        />
      </picture>
      <Fragment>
        <Paragraph
          textKey={`testimonial_${testimonialIndex}_text`}
          additionalClasses={"testimonial-text margin-bot--sm"}
        />
        <span className={`testimonial-author language--${language}`}>
          {`- ${getText(`testimonial_${testimonialIndex}_author`, language)}`}
        </span>
      </Fragment>
    </div>
  );
};
