import type { ThemeExtension } from "themes";
import colors from "./colors";

const styles: ThemeExtension["styles"] = {
  global: {
    html: {
      fontSize: "62.5%",
    },
    body: {
      color: "black",
      fontSize: "1.6rem",
      lineHeight: "2rem",
      bgColor: (colors as Record<string, string>)?.secondary,
      width: "100%",
      height: "100vh",
      overflowY: "scroll",
      overflowX: "hidden",
    },
  },
};

export default styles;
