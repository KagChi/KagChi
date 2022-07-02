import { AppProps } from 'next/app';
import '../styles/index.css';
import 'animate.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
