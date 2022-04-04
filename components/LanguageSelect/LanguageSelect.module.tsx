import React, { ReactElement, useEffect, useState } from "react";
import { useTranslation, getI18n } from "react-i18next";
import LanguageSelectElement from "./LanguageSelect.element";

const LanguageSelectModule = (): ReactElement => {
  const { t } = useTranslation();
  const i18n = getI18n();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const onCurrentLanguageChange = (language: string): void => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <LanguageSelectElement
      t={t}
      currentLanguage={currentLanguage}
      onCurrentLanguageChange={onCurrentLanguageChange}
    />
  );
};

export default LanguageSelectModule;
