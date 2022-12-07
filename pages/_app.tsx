import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import "../styles/layaout.css";

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Learning Next</title>
        <meta name="description" content="learning basics of Next 12" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
