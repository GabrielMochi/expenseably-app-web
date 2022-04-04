import { Button, HStack } from "@chakra-ui/react";
import { TransactionCategory } from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";
import { transactionCategoryToEmoji, transactionCategoryToLabel } from "utils/transactionUtils";

type Props = {
  t: TFunction;
  activeTransactionCategory: TransactionCategory;
  onTransactionCategory: (activeTransactionCategory: TransactionCategory) => void;
};

const TransactionCategoryGroupElement = ({
  t,
  activeTransactionCategory,
  onTransactionCategory,
}: Props): ReactElement => (
  <HStack wrap="wrap" spacing="12px" justify="center">
    {Object.values(TransactionCategory).map((transactionCategory) => (
      <Button
        bg="gray.100"
        height="40px"
        borderRadius="full"
        key={transactionCategory}
        my="8px"
        color="gray.700"
        px="20px"
        border="2px solid"
        borderColor={transactionCategory === activeTransactionCategory ? "primary" : "transparent"}
        _focus={{ bg: "gray.100" }}
        onClick={() => onTransactionCategory(transactionCategory)}
      >
        {transactionCategoryToEmoji(transactionCategory)}{" "}
        {transactionCategoryToLabel(t, transactionCategory)}
      </Button>
    ))}
  </HStack>
);

export default TransactionCategoryGroupElement;
