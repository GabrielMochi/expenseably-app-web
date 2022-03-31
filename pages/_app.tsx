import type { AppProps } from "next/app";

import "i18n";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
