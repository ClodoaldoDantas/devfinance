import React from 'react';
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
  createTransaction: (data: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(data: TransactionInput) {
    await api.post('transactions', data);
  }

  async function loadTransactions() {
    const { data } = await api.get('transactions');
    setTransactions(data);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
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
