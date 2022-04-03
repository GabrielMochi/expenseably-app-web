import React, { TransactionCategory } from "interfaces/Transaction";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import TransactionCategorySelectElement from "./TransactionCategorySelect.element";

export type SelectTransactionCategoryOptions = keyof typeof TransactionCategory | "ALL";

type Props = {
  selectedTransactionCategory: SelectTransactionCategoryOptions;
  onTransactionCategoryChange: (
    selectedTransactionCategory: SelectTransactionCategoryOptions,
  ) => void;
};

const TransactionCategorySelectModule = ({
  selectedTransactionCategory,
  onTransactionCategoryChange,
}: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <TransactionCategorySelectElement
      t={t}
      selectedTransactionCategory={selectedTransactionCategory}
      onTransactionCategoryChange={onTransactionCategoryChange}
    />
  );
};

export default TransactionCategorySelectModule;
