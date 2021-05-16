import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

import { Routes } from './src/routes';
import { TransactionsProvider } from './src/contexts/TransactionsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TransactionsProvider>
      <Routes />
      <StatusBar backgroundColor="#28431f" style="light" />
    </TransactionsProvider>
  );
}
