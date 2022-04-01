import type { ComponentStyleConfig } from "@chakra-ui/react";
import colors from "themes/colors";

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      fontSize: "1.6rem",
      height: "40px",
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
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Button;
