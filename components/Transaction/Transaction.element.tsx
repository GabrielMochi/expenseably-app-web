import React, { ReactElement } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  currencyToLabel,
  transactionCategoryToEmoji,
  transactionCategoryToLabel,
  transactionTypeToLabel,
} from "utils/transactionUtils";
import dayjs from "dayjs";
import { TFunction } from "react-i18next";
import Transaction, { TransactionType } from "interfaces/Transaction";

type Props = {
  t: TFunction;
  transaction: Transaction;
};

const TransactionElement = ({ t, transaction }: Props): ReactElement => (
  <Flex key={transaction.id} w="100%" px="12px" py="6px" align="center">
    <Flex align="center" minW="128px">
      <Box fontSize="20px">{transactionCategoryToEmoji(transaction.category)}</Box>
      <Box ml="12px">
        <Box fontWeight="500">{transactionCategoryToLabel(t, transaction.category)}</Box>
        <Box
          fontSize="12px"
          mt="4px"
          color={transaction.type === TransactionType.INCOME ? "success" : "error"}
        >
          {transactionTypeToLabel(t, transaction.type)}
        </Box>
      </Box>
    </Flex>
    <Box flex="1" fontSize="14px" color="gray" px="20px">
      {transaction.description}
    </Box>
    <Box>
      <Box fontWeight="700">
        {currencyToLabel(transaction.currency)} {transaction.amount}
      </Box>
      <Box mt="4px" fontSize="12px">
        {dayjs(transaction.createdAt).format(t("transactions-card.date-format"))}
      </Box>
    </Box>
    <Box>{/* menu goes here */}</Box>
  </Flex>
);

export default TransactionElement;
