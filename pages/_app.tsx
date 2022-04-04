import type { AppProps } from "next/app";

import "i18n";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "themes";
import { makeServer } from "mocks/mirage.js";
import UserProvider from "providers/UserProvider";
import AuthProvider from "providers/AuthProvider";
import BanksProvider from "providers/BanksProvider";
import TransactionsProvider from "providers/TransactionsProvider";

if (process.env.NEXT_PUBLIC_LOAD_MOCK_SERVER) {
  makeServer({ environment: "development" });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <BanksProvider>
          <TransactionsProvider>
            <ChakraProvider theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </TransactionsProvider>
        </BanksProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default MyApp;
