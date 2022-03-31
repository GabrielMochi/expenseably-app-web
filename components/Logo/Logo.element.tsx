import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type Props = {
  width?: string;
  height?: string;
};

const Logo = ({ width = "200px", height = "40px" }: Props): ReactElement => (
  <Box
    bgImage="/img/expenseably-logo.svg"
    w={width}
    h={height}
    bgRepeat="no-repeat"
    bgSize="contain"
  />
);

export default Logo;
