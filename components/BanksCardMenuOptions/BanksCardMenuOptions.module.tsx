import React, { ReactElement } from "react";
import BanksCardMenuOptionsElement from "./BanksCardMenuOptions.element";
import { useTranslation } from "react-i18next";
import Bank from "interfaces/Bank";

type Props = {
  bank: Bank;
  onRenameClick: (bank: Bank) => void;
  onDeleteClick: (bank: Bank) => void;
};

const BanksCardMenuOptionsModule = ({
  bank,
  onRenameClick,
  onDeleteClick,
}: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <BanksCardMenuOptionsElement
      t={t}
      onRenameClick={() => onRenameClick(bank)}
      onDeleteClick={() => onDeleteClick(bank)}
    />
  );
};

export default BanksCardMenuOptionsModule;
