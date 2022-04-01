import React, { ReactElement } from "react";
import BanksCardMenuOptionsElement from "./BanksCardMenuOptions.element";
import { useTranslation } from "react-i18next";

const BanksCardMenuOptionsModule = (): ReactElement => {
  const { t } = useTranslation();
  return <BanksCardMenuOptionsElement t={t} />;
};

export default BanksCardMenuOptionsModule;
