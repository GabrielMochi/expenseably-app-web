import type { ComponentStyleConfig } from "@chakra-ui/react";

const FormLabel: ComponentStyleConfig = {
  variants: {
    primary: {
      fontSize: "1.6rem",
      lineHeight: "2rem",
      fontWeight: "400",
      color: "primary",
      mb: "12px",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default FormLabel;
