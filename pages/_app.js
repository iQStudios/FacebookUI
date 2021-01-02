import React from "react";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Facebook</title>
        <link
          href="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"
          rel="shortcut icon"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
