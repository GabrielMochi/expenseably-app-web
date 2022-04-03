import React, { ReactElement } from "react";
import TransactionCategoryGroupElement from "./TransactionCategoryGroup.element";
import { TransactionCategory } from "interfaces/Transaction";
import { useTranslation } from "react-i18next";

type Props = {
  activeTransactionCategory: TransactionCategory;
  onTransactionCategory: (activeTransactionCategory: TransactionCategory) => void;
};

const TransactionCategoryGroupModule = ({
  activeTransactionCategory,
  onTransactionCategory,
}: Props): ReactElement => {
  const { t } = useTranslation();
  return (
    <TransactionCategoryGroupElement
      t={t}
      activeTransactionCategory={activeTransactionCategory}
      onTransactionCategory={onTransactionCategory}
    />
  );
};

export default TransactionCategoryGroupModule;
