import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type Props = BoxProps & {
  width?: string;
  height?: string;
};

const Logo = ({ width = "200px", height = "40px", ...props }: Props): ReactElement => (
  <Box
    bgImage="/img/expenseably-logo.svg"
    w={width}
    h={height}
    bgRepeat="no-repeat"
    bgSize="contain"
    {...props}
  />
);

export default Logo;
