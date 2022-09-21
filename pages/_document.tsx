import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Ahmed Mohamed" />
        <meta
          name="description"
          content="Events App is a Website that Shows Our Previous and Featured Events."
        />
        <meta name="keywords" content="Events, Festivals, Events App" />
        <meta name="theme-color" content="#f97316e6" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <title>Document</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
