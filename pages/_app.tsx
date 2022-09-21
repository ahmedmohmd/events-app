import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Events App</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
