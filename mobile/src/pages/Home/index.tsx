import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { useTransactions } from '../../contexts/TransactionsContext';

export function Home() {
  const { loadTransactions } = useTransactions();

  useFocusEffect(() => {
    loadTransactions();
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Summary />
      <TransactionsTable />
    </SafeAreaView>
  );
}
