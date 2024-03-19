import { useSelector } from "react-redux";
import { getText } from "../../../utils";

export const Paragraph = (props) => {
  const language = useSelector((state) => state.language.activeLanguage);
  const { textKey, additionalClasses } = props;

  return (
    <p className={`language language--${language} ${additionalClasses || ""}`}>
      {getText(textKey, language)}
    </p>
  );
};
