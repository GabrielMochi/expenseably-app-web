import type { AppProps } from "next/app";

import "i18n";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";
import { makeServer } from "mocks/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
