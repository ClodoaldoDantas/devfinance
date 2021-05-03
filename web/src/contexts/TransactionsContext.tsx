import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useState } from 'react';

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  price: string;
  type: 'income' | 'outcome';
  created_at: string;
  category_id: number;
  category: {
    name: string;
  };
}

interface TransactionInput {
  title: string;
  price: number;
  category_id: number;
  type: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  loadTransactions: () => void;
  createTransaction: (data: TransactionInput) => void;
  importTransactions: (csv: File) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  async function createTransaction(data: TransactionInput) {
    await api.post('transactions', data);
    router.push('/');
  }

  async function loadTransactions() {
    const { data } = await api.get('transactions');
    setTransactions(data);
  }

  async function importTransactions(csv: File) {
    const formData = new FormData();
    formData.append('arquivo', csv);

    await api.post('transactions/import', formData);
    router.push('/');
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
        importTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
