import { Box, Flex, Icon } from "@chakra-ui/react";
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
  <Flex
    w="100%"
    height="64px"
    align="center"
    border="2px solid"
    borderColor={activeBank?.id === bank.id ? "primary" : "gray.300"}
    borderRadius="12px"
    color={"black"}
    px="12px"
    cursor="pointer"
    fontWeight="700"
    _hover={{ bg: "gray.100" }}
    onClick={() => onBankButtonClick(bank)}
  >
    <Box>
      <Icon
        verticalAlign="middle"
        as={VscCircleFilled}
        w={10}
        h={10}
        color={activeBank?.id === bank.id ? "primary" : "gray.300"}
        mr="12px"
      />
    </Box>
    <Flex flex="1">{bank.name}</Flex>
    <Box>
      <BanksCardMenuOptions bank={bank} />
    </Box>
  </Flex>
);

export default BankElement;
