import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/layaout.css";
import "../src/components/navbar.css";

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Learning Next</title>
        <meta name="description" content="learning basics of Next 12" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
