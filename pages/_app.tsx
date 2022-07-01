import { AppProps } from 'next/app';
import '../styles/index.css';
import 'animate.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Component {...pageProps} />
      </>
    )
}
