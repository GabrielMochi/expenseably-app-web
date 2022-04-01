import type { ComponentStyleConfig } from "@chakra-ui/react";

const Progress: ComponentStyleConfig = {
  parts: ["filledTrack"],
  variants: {
    primary: {
      filledTrack: {
        bgImg: "linear-gradient(to right, #005C66 0%, #004952 100%)",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Progress;
