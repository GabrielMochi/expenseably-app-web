import { Button, Flex } from "@chakra-ui/react";
import { TransactionType } from "interfaces/Transaction";
import React, { ReactElement } from "react";
import { TFunction } from "react-i18next";

type Props = {
  t: TFunction;
  activeTransactionType: TransactionType;
  onTransactionType: (activeTransactionType: TransactionType) => void;
};

const TransactionTypeSwitchElement = ({
  t,
  activeTransactionType,
  onTransactionType,
}: Props): ReactElement => (
  <Flex height="40px" align="center">
    <Button
      height="40px"
      isFullWidth
      borderLeftRadius="4px"
      borderRightRadius="0"
      fontWeight="400"
      bg={activeTransactionType === TransactionType.INCOME ? "primary" : "gray.100"}
      color={activeTransactionType === TransactionType.INCOME ? "white" : "gray.500"}
      _hover={{ boxShadow: "none" }}
      _focus={{
        boxShadow: "none",
        bg: activeTransactionType === TransactionType.INCOME ? "primary" : "gray.100",
      }}
      onClick={() => onTransactionType(TransactionType.INCOME)}
    >
      {t("transaction-type.income")}
    </Button>
    <Button
      height="40px"
      isFullWidth
      borderLeftRadius="0"
      borderRightRadius="4px"
      fontWeight="400"
      bg={activeTransactionType === TransactionType.EXPENSE ? "error" : "gray.100"}
      color={activeTransactionType === TransactionType.EXPENSE ? "white" : "gray.500"}
      _hover={{ boxShadow: "none" }}
      _focus={{
        boxShadow: "none",
        bg: activeTransactionType === TransactionType.EXPENSE ? "error" : "gray.100",
      }}
      onClick={() => onTransactionType(TransactionType.EXPENSE)}
    >
      {t("transaction-type.expense")}
    </Button>
  </Flex>
);

export default TransactionTypeSwitchElement;
