import { TEXTS_ARMENIAN, TEXTS_ENGLISH, TEXTS_RUSSIAN } from "../texts";

export const unwrap = (object, objectName, fileName) => {
  if (object === undefined) {
    throw new Error(
      `Unwrapping Error in ${fileName}! ${objectName} is undefined!`
    );
  }
  return object;
};

export const getText = (textKey, lang) => {
  const key = unwrap(textKey, "key", "utils");
  const language = getLanguage(lang);
  switch (language) {
    case "en":
      return unwrap(TEXTS_ENGLISH[key], `TEXTS_ENGLISH[${key}]`, "utils.js");
    case "ru":
      return unwrap(TEXTS_RUSSIAN[key], `TEXTS_RUSSIAN[${key}]`, "utils.js");
    case "arm":
      return unwrap(TEXTS_ARMENIAN[key], `TEXTS_ARMENIAN[${key}]`, "utils.js");
    default:
      break;
  }
};

export const getLanguage = (languageProp, fileName) => {
  if (
    !(languageProp === "en" || languageProp === "ru" || languageProp === "arm")
  ) {
    throw new Error(
      `Error in ${fileName}! Wrong prop of ${languageProp} was received!`
    );
  }
  return languageProp;
};
