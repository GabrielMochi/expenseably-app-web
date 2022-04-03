import { Select } from "@chakra-ui/react";
import { TransactionCategory } from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { transactionCategoryToEmoji, transactionCategoryToLabel } from "utils/transactionUtils";
import { SelectTransactionCategoryOptions } from "./TransactionCategorySelect.module";

type Props = {
  t: TFunction;
  selectedTransactionCategory: SelectTransactionCategoryOptions;
  onTransactionCategoryChange: (
    selectedTransactionCategory: SelectTransactionCategoryOptions,
  ) => void;
};

const TransactionCategorySelectElement = ({
  t,
  selectedTransactionCategory,
  onTransactionCategoryChange,
}: Props): ReactElement => (
  <Select
    variant="filled"
    fontSize="1.6rem"
    height="40px"
    value={selectedTransactionCategory}
    onChange={(event) =>
      onTransactionCategoryChange(event.target.value as SelectTransactionCategoryOptions)
    }
  >
    <option value="ALL">✅ All</option>
    {Object.values(TransactionCategory).map((category) => (
      <option key={category} value={category}>
        {transactionCategoryToEmoji(category)} {transactionCategoryToLabel(t, category)}
      </option>
    ))}
  </Select>
);

export default TransactionCategorySelectElement;
