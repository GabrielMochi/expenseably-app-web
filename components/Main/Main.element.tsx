import React, { ReactElement, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type Props = { children?: ReactNode };

const MainElement = ({ children }: Props): ReactElement => (
  <Box as="main" p="32px">
    {children}
  </Box>
);

export default MainElement;
