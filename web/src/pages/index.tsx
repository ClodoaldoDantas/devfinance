import Head from 'next/head';
import { Summary } from '../components/Summary';
import { TransactionsTable } from '../components/TransactionsTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | dev.finance</title>
      </Head>

      <Summary />
      <TransactionsTable />
    </>
  );
}
