import { Select } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";

type Props = {
  t: TFunction;
  currentLanguage: string;
  onCurrentLanguageChange: (currentLanguage: string) => void;
};

const LanguageSelectElement = ({
  t,
  currentLanguage,
  onCurrentLanguageChange,
}: Props): ReactElement => (
  <Select
    variant="filled"
    fontSize="1.6rem"
    height="40px"
    width="auto"
    value={currentLanguage}
    onChange={(event) => onCurrentLanguageChange(event.target.value)}
  >
    <option value="en">🇬🇧 {t("idioms.en")}</option>
    <option value="fr">🇫🇷 {t("idioms.fr")}</option>
  </Select>
);

export default LanguageSelectElement;
