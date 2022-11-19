import { AppProps } from "next/app";
import "../styles/index.css";
import "animate.css";
import { ParticlesComponent } from "../components/particles";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ParticlesComponent />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A page for KagChi, a weeb nerd who likes to code and doing backend things."
        />
        <meta property="og:title" content="KagChi" />
        <meta
          name="description"
          content="A page for KagChi, a weeb nerd who likes to code and doing backend things."
        />
        <meta name="keywords" content="KagChi" />
        <meta property="og:url" content="https://kagchi.my.id" />
        <meta
          property="og:description"
          content="A page for KagChi, a weeb nerd who likes to code and doing backend things."
        />
        <meta
          property="og:image"
          content="https://i.kagchi.my.id/c372dc62d9ed77172372deda07a4a58e.png"
        />
        <meta name="theme-color" content="#FFFF00" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
