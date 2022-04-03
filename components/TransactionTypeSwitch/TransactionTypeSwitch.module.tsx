import { TransactionType } from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import TransactionTypeSwitchElement from "./TransactionTypeSwitch.element";

type Props = {
  activeTransactionType: TransactionType;
  onTransactionType: (activeTransactionType: TransactionType) => void;
};

const TransactionTypeSwitchModule = ({
  activeTransactionType,
  onTransactionType,
}: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <TransactionTypeSwitchElement
      t={t}
      activeTransactionType={activeTransactionType}
      onTransactionType={onTransactionType}
    />
  );
};

export default TransactionTypeSwitchModule;
