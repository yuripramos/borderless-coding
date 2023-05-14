import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";

import "../styles/style.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="coding, mentorship, programming" />
        <meta name="author" content="Yuri Pereira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Borderless Coding</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
