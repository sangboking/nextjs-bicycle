import Layout from "@components/common/layout";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Layout>
  );
}

export default MyApp;
