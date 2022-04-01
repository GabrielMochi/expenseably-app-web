import { extendTheme, Theme } from "@chakra-ui/react";
import styles from "./styles";
import fonts from "./fonts";
import components from "./components";
import colors from "./colors";
import shadows from "./shadows";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

type Extensible<T> = {
  [P in keyof T]: T[P] | { [key: string]: unknown };
};

export type ThemeExtension = DeepPartial<Extensible<Theme>>;

const extension: ThemeExtension = {
  colors,
  shadows,
  fonts,
  styles,
  components,
};

export const theme = extendTheme(extension);
