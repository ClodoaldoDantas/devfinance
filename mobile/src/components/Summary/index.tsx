import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { theme } from '../../theme';
import { useTransactions } from '../../contexts/TransactionsContext';
import { formatCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';
import { styles } from './styles';

export function Summary() {
  const { colors } = theme;
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += Number(transaction.price);
        acc.total += Number(transaction.price);
      } else {
        acc.outcome += Number(transaction.price);
        acc.total -= Number(transaction.price);
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  const incomeTransactions = transactions.filter(
    transaction => transaction.type === 'income'
  );

  const outcomeTransactions = transactions.filter(
    transaction => transaction.type === 'outcome'
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.summaryList}
      >
        <View style={styles.summaryItem}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryHeaderTitle}>Entradas</Text>
            <Image source={require('../../assets/income.png')} />
          </View>

          <Text style={styles.summaryValue}>
            {formatCurrency(summary.income)}
          </Text>

          {incomeTransactions.length > 0 && (
            <Text style={styles.summaryDate}>
              Última entrada dia{' '}
              {formatDate(new Date(incomeTransactions[0].created_at))}
            </Text>
          )}
        </View>

        <View style={styles.summaryItem}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryHeaderTitle}>Saídas</Text>
            <Image source={require('../../assets/outcome.png')} />
          </View>

          <Text style={styles.summaryValue}>
            {formatCurrency(summary.outcome)}
          </Text>

          {outcomeTransactions.length > 0 && (
            <Text style={styles.summaryDate}>
              Última entrada dia{' '}
              {formatDate(new Date(outcomeTransactions[0].created_at))}
            </Text>
          )}
        </View>

        <View
          style={[
            styles.summaryItem,
            { backgroundColor: colors.green, marginRight: 0 },
          ]}
        >
          <View style={styles.summaryHeader}>
            <Text style={[styles.summaryHeaderTitle, { color: colors.white }]}>
              Total
            </Text>
            <Image source={require('../../assets/total.png')} />
          </View>

          <Text style={[styles.summaryValue, { color: colors.white }]}>
            {formatCurrency(summary.total)}
          </Text>

          {transactions.length > 0 && (
            <Text style={[styles.summaryDate, { color: colors.white }]}>
              Última entrada {formatDate(new Date(transactions[0].created_at))}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
