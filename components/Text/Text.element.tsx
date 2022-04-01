import React, { ReactElement } from "react";
import { Text as ChakraText, TextProps } from "@chakra-ui/react";

const TextElement = (props: TextProps): ReactElement => (
  <ChakraText as="p" fontSize="1.6rem" fontWeight="400" lineHeight="2rem" {...props} />
);

export default TextElement;
