import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguaDetector from "i18next-browser-languagedetector";

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguaDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./locales/en/translation.json"),
      },
      fr: {
        translation: require("./locales/fr/translation.json"),
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
