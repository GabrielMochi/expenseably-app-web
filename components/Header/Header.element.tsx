import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import Logo from "components/Logo";
import React, { ReactElement } from "react";
import { MdLogout } from "react-icons/md";

type Props = {
  logout: () => void;
  isLoggingOut: boolean;
};

const HeaderElement = ({ logout, isLoggingOut }: Props): ReactElement => (
  <>
    <Flex
      as="header"
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      h="85px"
      px="20px"
      boxShadow="base"
      bg="white"
      align="center"
      justify="center"
    >
      <Logo />
      <Button
        h="40px"
        variant="ghost"
        pos="absolute"
        right="20px"
        leftIcon={<Icon as={MdLogout} />}
        isLoading={isLoggingOut}
        loadingText="Logout"
        onClick={logout}
      >
        Logout
      </Button>
    </Flex>
    <Box h="85px" />
  </>
);

export default HeaderElement;
