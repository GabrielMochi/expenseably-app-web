import { Box, Icon, chakra, VStack, Flex, Skeleton, Divider, Button } from "@chakra-ui/react";
import Headline from "components/Headline";
import Transaction from "interfaces/Transaction";
import React, { ReactElement } from "react";
import type { TFunction } from "react-i18next";
import { GrTransaction } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import TransactionComponent from "components/Transaction";
import CreateTransactionModal from "components/CreateTransactionModal";
import TransactionsSearchBox from "components/TransactionsSearchBox";

type Props = {
  t: TFunction;
  transactions: Transaction[];
  onAddClick: () => void;
  showSkeleton: boolean;
};

const BankListSkeleton = (): ReactElement => (
  <>
    <Skeleton w="100%" h="80px" borderRadius="12px" speed={4}></Skeleton>
    <Skeleton w="100%" h="80px" borderRadius="12px" mt="12px" speed={4}></Skeleton>
    <Skeleton w="100%" h="80px" borderRadius="12px" mt="12px" speed={4}></Skeleton>
    <Skeleton w="100%" h="80px" borderRadius="12px" mt="12px" speed={4}></Skeleton>
  </>
);

const TransactionsCardElement = ({
  t,
  transactions,
  onAddClick,
  showSkeleton,
}: Props): ReactElement => (
  <Box bg="white" borderRadius="8px" boxShadow="base" p="32px" mb="32px">
    <Flex align="center" justify="space-between">
      <Headline as="h3" display="inline-block">
        <Icon as={GrTransaction} verticalAlign="middle" />
        <chakra.span verticalAlign="middle" ml="12px">
          {t("transactions-card.title")}
        </chakra.span>
      </Headline>
      <Button h="40px" px="20px" onClick={onAddClick} leftIcon={<Icon as={MdAdd} />} rounded="full">
        {t("transactions-card.add-button-label")}
      </Button>
    </Flex>
    <Box mt="32px">
      <TransactionsSearchBox />
    </Box>
    <VStack mt="32px" spacing="12px" divider={<Divider />}>
      {showSkeleton && <BankListSkeleton />}
      {!showSkeleton &&
        transactions.map((transaction) => (
          <TransactionComponent key={transaction.id} transaction={transaction} />
        ))}
    </VStack>
    <CreateTransactionModal />
  </Box>
);

export default TransactionsCardElement;
