import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import BanksCardMenuOptions from "components/BanksCardMenuOptions";
import Bank from "interfaces/Bank";
import React, { ReactElement } from "react";
import { VscCircleFilled } from "react-icons/vsc";

type Props = {
  bank: Bank;
  activeBank: Bank | undefined;
  onBankButtonClick: (bank: Bank) => void;
};

const BankElement = ({ bank, activeBank, onBankButtonClick }: Props): ReactElement => (
  <Flex w="100%" align="center">
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
      <BanksCardMenuOptions bank={bank} />
    </Box>
  </Flex>
);

export default BankElement;
