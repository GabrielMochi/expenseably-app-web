import { Input, InputProps } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const FormFieldElement = (props: InputProps): ReactElement => (
  <Input height="40px" fontSize="1.6rem" _focus={{ borderColor: "primary" }} {...props} />
);

export default FormFieldElement;
