import { Button, Flex } from "@chakra-ui/react";
import { Currency } from "interfaces/Transaction";
import React, { ReactElement } from "react";

type Props = {
  activeCurrency: Currency;
  onCurrency: (currency: Currency) => void;
};

const CurrencySwitchElement = ({ activeCurrency, onCurrency }: Props): ReactElement => (
  <Flex height="40px" align="center">
    <Button
      height="40px"
      borderLeftRadius="4px"
      borderRightRadius="0"
      bg={activeCurrency === Currency.USD ? "primary" : "gray.100"}
      color={activeCurrency === Currency.USD ? "white" : "black"}
      _hover={{ boxShadow: "none" }}
      _focus={{
        boxShadow: "none",
        bg: activeCurrency === Currency.USD ? "primary" : "gray.100",
      }}
      onClick={() => onCurrency(Currency.USD)}
    >
      $
    </Button>
    <Button
      height="40px"
      borderLeftRadius="0"
      borderRightRadius="4px"
      bg={activeCurrency === Currency.EUR ? "primary" : "gray.100"}
      color={activeCurrency === Currency.EUR ? "white" : "black"}
      _hover={{ boxShadow: "none" }}
      _focus={{
        boxShadow: "none",
        bg: activeCurrency === Currency.EUR ? "primary" : "gray.100",
      }}
      onClick={() => onCurrency(Currency.EUR)}
    >
      €
    </Button>
  </Flex>
);

export default CurrencySwitchElement;
