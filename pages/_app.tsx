import type { AppProps } from "next/app";

import "i18n";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";
import { makeServer } from "mocks/mirage";
import UserProvider from "providers/UserProvider";
import AuthProvider from "providers/AuthProvider";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
