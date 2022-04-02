import {
  Box,
  Icon,
  chakra,
  VStack,
  Flex,
  IconButton,
  Skeleton,
  Divider,
  Button,
} from "@chakra-ui/react";
import BanksCardMenuOptions from "components/BanksCardMenuOptions";
import DeleteBankModal from "components/DeleteBankModal";
import Headline from "components/Headline";
import RenameBankModal from "components/RenameBankModal";
import Bank from "interfaces/Bank";
import React, { ReactElement } from "react";
import type { TFunction } from "react-i18next";
import { BsBank2 } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

type Props = {
  t: TFunction;
  onAddClick: () => void;
  banks: Bank[];
  showSkeleton: boolean;
  activeBank: Bank | undefined;
  onBankButtonClick: (bank: Bank) => void;
  onRenameClick: (bank: Bank) => void;
  isRenameModalOpen: boolean;
  onRenameModalClose: () => void;
  bankSelectedToBeRenamed: Bank | undefined;
  onDeleteClick: (bank: Bank) => void;
  isDeleteModalOpen: boolean;
  onDeleteModalClose: () => void;
  bankSelectedToBeDeleted: Bank | undefined;
};

const BankListSkeleton = (): ReactElement => (
  <>
    <Skeleton w="100%" h="80px" speed={4}></Skeleton>
    <Skeleton w="100%" h="80px" mt="12px" speed={4}></Skeleton>
  </>
);

const BanksCardElement = ({
  t,
  onAddClick,
  banks,
  showSkeleton,
  activeBank,
  onBankButtonClick,
  onRenameClick,
  isRenameModalOpen,
  onRenameModalClose,
  bankSelectedToBeRenamed,
  onDeleteClick,
  isDeleteModalOpen,
  onDeleteModalClose,
  bankSelectedToBeDeleted,
}: Props): ReactElement => (
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
    <VStack mt="32px" spacing="12px" divider={<Divider />}>
      {showSkeleton && <BankListSkeleton />}
      {banks.map((bank) => (
        <Flex key={bank.id} w="100%" align="center">
          <Flex flex="1" mr="12px">
            <Button
              variant="ghost"
              height="64px"
              isFullWidth
              px="0"
              color="black"
              justifyContent="left"
              leftIcon={
                <Icon
                  verticalAlign="middle"
                  as={VscCircleFilled}
                  color={activeBank?.id === bank.id ? "primary" : "gray.300"}
                  mr="12px"
                />
              }
              onClick={() => onBankButtonClick(bank)}
            >
              {bank.name}
            </Button>
          </Flex>
          <Box>
            <BanksCardMenuOptions
              bank={bank}
              onRenameClick={onRenameClick}
              onDeleteClick={onDeleteClick}
            />
          </Box>
        </Flex>
      ))}
    </VStack>
    {bankSelectedToBeRenamed && (
      <RenameBankModal
        isOpen={isRenameModalOpen}
        onClose={onRenameModalClose}
        bank={bankSelectedToBeRenamed}
      />
    )}
    {bankSelectedToBeDeleted && (
      <DeleteBankModal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        bank={bankSelectedToBeDeleted}
      />
    )}
  </Box>
);

export default BanksCardElement;
