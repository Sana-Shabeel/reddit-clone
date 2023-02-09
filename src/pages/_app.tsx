import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import type { AppProps } from "next/app";
import Layout from "@/componenets/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
