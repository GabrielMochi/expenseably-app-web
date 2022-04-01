import type { ComponentStyleConfig } from "@chakra-ui/react";
import colors from "themes/colors";

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      fontSize: "1.6rem",
      bg: "primary",
      color: "white",
      _focus: {
        bg: "primary",
      },
      _hover: {
        boxShadow: "md",
      },
      _disabled: {
        _hover: {
          bg: `${colors?.primary} !important`,
        },
      },
    },
    ghost: {
      fontSize: "1.6rem",
      color: "primary",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
