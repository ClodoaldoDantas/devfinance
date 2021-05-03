import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { TransactionsProvider } from '../contexts/TransactionsContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
      <Header />
      <Component {...pageProps} />
    </TransactionsProvider>
  );
}

export default MyApp;
