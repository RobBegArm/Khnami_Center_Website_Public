import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { Paragraph } from "../UI";

import { getText } from "../../utils";
import "./ContactForm.css";

export const ContactForm = () => {
  const language = useSelector((state) => state.language.activeLanguage);

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();
  const patientNameInputRef = useRef();
  const patientAgeInputRef = useRef();
  const patientDiagnosisInputRef = useRef();
  const contactPersonInputRef = useRef();
  const contactNumberInputRef = useRef();
  const contactMailInputRef = useRef();

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await emailjs.sendForm(
        "new_mailing_service",
        "form_submission_template",
        formRef.current,
        //not available in public version
        "PUBLIC_KEY_GOES_HERE"
      );
      // console.log(response);
      if (response.status === 200) {
        swal({
          title: getText("contact_form_success_response_title", language),
          text: getText("contact_form_success_response_message", language),
          icon: "success",
          button: "Ok",
        });
        e.target.reset();
        setIsLoading(false);
      }
    } catch (error) {
      swal({
        title: getText("contact_form_error_response_title", language),
        text: `${getText("contact_form_error_response_message", language)} | ${
          error.message
        }`,
        icon: "error",
        button: "Ok",
      });
      // console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <section className="section-cta padding--section" id="section_cta">
      {/* <!-- cta box --> */}
      <div className="container cta-box flex-column shadow--dark--strong">
        {/* <!-- cta text --> */}
        <div className="cta-text-box margin-bot--md">
          <Paragraph
            textKey={"contact_form_headline"}
            additionalClasses={"cta-headline margin-bot--md"}
          />
          <Paragraph
            textKey={"contact_form_description"}
            additionalClasses={"cta-description margin-bot--md"}
          />
        </div>
        <form
          className="cta-form grid grid--3-cols"
          name="book-consultation"
          onSubmit={formSubmitHandler}
          ref={formRef}
        >
          {/* <!-- patient name input --> */}
          <div className="form-element">
            <label htmlFor="patient_name">
              <Paragraph textKey={"contact_form_patient_name_label"} />
            </label>
            <input
              className={`txtPlcInput ${isLoading ? "disabled-input" : ""}`}
              id="patient_name"
              name="patient_name"
              type="text"
              placeholder={getText(
                "contact_form_patient_name_placeholder",
                language
              )}
              minLength={"3"}
              maxLength={"60"}
              disabled={isLoading}
              ref={patientNameInputRef}
              required
            />
          </div>
          {/* <!-- patient age input --> */}
          <div className="form-element">
            <label htmlFor="patient_age">
              <Paragraph textKey={"contact_form_patient_age_label"} />
            </label>
            <input
              className={`txtPlcInput ${isLoading ? "disabled-input" : ""}`}
              id="patient_age"
              name="patient_age"
              type="number"
              placeholder="44"
              min={"18"}
              max={"140"}
              disabled={isLoading}
              ref={patientAgeInputRef}
              required
            />
          </div>
          {/* <!-- patient diagnosis input --> */}
          <div className="form-element">
            <label htmlFor="patient_diagnosis">
              <Paragraph textKey={"contact_form_patient_diagnosis_label"} />
            </label>
            <input
              className={`txtPlcInput ${isLoading ? "disabled-input" : ""}`}
              id="patient_diagnosis"
              name="patient_diagnosis"
              type="text"
              placeholder={getText(
                "contact_form_patient_diagnosis_placeholder",
                language
              )}
              minLength={"3"}
              maxLength={"60"}
              disabled={isLoading}
              ref={patientDiagnosisInputRef}
              required
            />
          </div>
          {/* <!-- contact name input --> */}
          <div className="form-element">
            <label htmlFor="contact_name">
              <Paragraph textKey={"contact_form_contact_person_label"} />
            </label>
            <input
              className={`txtPlcInput ${isLoading ? "disabled-input" : ""}`}
              id="contact_name"
              name="contact_name"
              type="text"
              placeholder={getText(
                "contact_form_contact_person_placeholder",
                language
              )}
              minLength={"3"}
              maxLength={"60"}
              disabled={isLoading}
              ref={contactPersonInputRef}
              required
            />
          </div>
          {/* <!-- contact phone number input --> */}
          <div className="form-element">
            <label htmlFor="contact_number">
              <Paragraph textKey={"contact_form_contact_number_label"} />
            </label>
            <input
              className={isLoading ? "disabled-input" : ""}
              id="contact_number"
              name="contact_number"
              type="tel"
              placeholder="099445566"
              minLength={"6"}
              maxLength={"20"}
              pattern="([0]{1}[1-9]{2}[0-9]{6})|([+]{1}[0-9]{7})|([+]{1}[0-9]{8})|([+]{1}[0-9]{9})|([+]{1}[0-9]{10})|([+]{1}[0-9]{11})"
              disabled={isLoading}
              ref={contactNumberInputRef}
              required
            />
          </div>
          {/* <!-- contact email input --> */}
          <div className="form-element">
            <label htmlFor="contact_email">
              <Paragraph textKey={"contact_form_contact_mail_label"} />
            </label>
            <input
              className={isLoading ? "disabled-input" : ""}
              id="contact_email"
              name="contact_email"
              type="email"
              placeholder="mail@mail.com"
              minLength={"3"}
              maxLength={"60"}
              disabled={isLoading}
              ref={contactMailInputRef}
              required
            />
          </div>
          {/* <!-- submit form --> */}
          <div className="btn--form-box">
            <button
              type="submit"
              className="btn btn--form"
              disabled={isLoading}
            >
              <p
                className={`language--${language} ${
                  isLoading ? "disabled-input" : ""
                }`}
              >
                {isLoading
                  ? getText("contact_form_btn_loading_label", language)
                  : getText("contact_form_btn_label", language)}
              </p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
