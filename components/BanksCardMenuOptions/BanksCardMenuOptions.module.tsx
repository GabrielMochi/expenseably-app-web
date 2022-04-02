import React, { ReactElement } from "react";
import BanksCardMenuOptionsElement from "./BanksCardMenuOptions.element";
import { useTranslation } from "react-i18next";
import Bank from "interfaces/Bank";
import useBanks from "hooks/useBanks";

type Props = { bank: Bank };

const BanksCardMenuOptionsModule = ({ bank }: Props): ReactElement => {
  const { t } = useTranslation();
  const { setBankSelectedToBeRenamed, setBankSelectedToBeDeleted } = useBanks();

  const onRenameClick = (): void => {
    setBankSelectedToBeRenamed(bank);
  };

  const onDeleteClick = (): void => {
    setBankSelectedToBeDeleted(bank);
  };

  return (
    <BanksCardMenuOptionsElement
      t={t}
      onRenameClick={onRenameClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default BanksCardMenuOptionsModule;
