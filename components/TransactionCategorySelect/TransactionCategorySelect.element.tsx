import { Select } from "@chakra-ui/react";
import { TransactionCategory } from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { transactionCategoryToEmoji, transactionCategoryToLabel } from "utils/transactionUtils";
import { SelectTransactionCategoryOptions } from "./TransactionCategorySelect.module";

type Props = {
  t: TFunction;
  hasACtiveBank: boolean;
  selectedTransactionCategory: SelectTransactionCategoryOptions;
  onTransactionCategoryChange: (
    selectedTransactionCategory: SelectTransactionCategoryOptions,
  ) => void;
};

const TransactionCategorySelectElement = ({
  t,
  hasACtiveBank,
  selectedTransactionCategory,
  onTransactionCategoryChange,
}: Props): ReactElement => (
  <Select
    variant="filled"
    fontSize="1.6rem"
    height="40px"
    width="auto"
    disabled={!hasACtiveBank}
    value={selectedTransactionCategory}
    onChange={(event) =>
      onTransactionCategoryChange(event.target.value as SelectTransactionCategoryOptions)
    }
  >
    <option value="ALL">✅ㅤ{t("transaction-category-select.all")}</option>
    {Object.values(TransactionCategory).map((category) => (
      <option key={category} value={category}>
        {transactionCategoryToEmoji(category)}ㅤ{transactionCategoryToLabel(t, category)}
      </option>
    ))}
  </Select>
);

export default TransactionCategorySelectElement;
