import { Box, Icon, chakra, VStack, Flex, IconButton, Skeleton } from "@chakra-ui/react";
import CreateBankModal from "components/CreateBankModal";
import DeleteBankModal from "components/DeleteBankModal";
import Headline from "components/Headline";
import RenameBankModal from "components/RenameBankModal";
import Bank from "interfaces/Bank";
import BankComponent from "components/Bank";
import React, { ReactElement } from "react";
import type { TFunction } from "react-i18next";
import { BsBank2 } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

type Props = {
  t: TFunction;
  onAddClick: () => void;
  banks: Bank[];
  showSkeleton: boolean;
};

const BankListSkeleton = (): ReactElement => (
  <>
    <Skeleton w="100%" h="64px" speed={4} borderRadius="12px"></Skeleton>
    <Skeleton w="100%" h="64px" mt="12px" speed={4} borderRadius="12px"></Skeleton>
  </>
);

const BanksCardElement = ({ t, onAddClick, banks, showSkeleton }: Props): ReactElement => (
  <Box bg="white" borderRadius="8px" boxShadow="base" p="32px">
    <Flex align="center" justify="space-between">
      <Headline as="h3" display="inline-block">
        <Icon as={BsBank2} verticalAlign="middle" />
        <chakra.span verticalAlign="middle" ml="12px">
          {t("banks-card.title")}
        </chakra.span>
      </Headline>
      <IconButton
        variant="ghost"
        h="auto"
        p="4px"
        aria-label={t("banks-card.add-label")}
        onClick={onAddClick}
      >
        <Icon as={MdAdd} w={10} h={10} />
      </IconButton>
    </Flex>
    <VStack mt="32px" spacing="12px">
      {showSkeleton && <BankListSkeleton />}
      {banks.map((bank) => (
        <BankComponent key={bank.id} bank={bank} />
      ))}
    </VStack>
    <RenameBankModal />
    <DeleteBankModal />
    <CreateBankModal />
  </Box>
);

export default BanksCardElement;
