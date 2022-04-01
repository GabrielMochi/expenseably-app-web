import { Box, Flex, Progress } from "@chakra-ui/react";
import Logo from "components/Logo";
import React, { ReactElement } from "react";

type Props = {
  isLoading?: boolean;
  showLoginForm?: boolean;
};

const SplashScreenElement = ({ isLoading, showLoginForm }: Props): ReactElement => (
  <Flex
    pos="absolute"
    top="0"
    left="0"
    w="100vw"
    height="100vh"
    justify="center"
    align="center"
    zIndex="42"
    backdropFilter="blur(5px)"
  >
    {isLoading && (
      <Box textAlign="center" maxW="300px">
        <Logo width="300px" height="60px" />
        <Progress w="256px" mt="20px" mx="auto" isIndeterminate borderRadius="full" />
      </Box>
    )}
    {showLoginForm && <></>}
  </Flex>
);

export default SplashScreenElement;
