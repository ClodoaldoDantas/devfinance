import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { format } from 'date-fns';
import { useTransactions } from '../../contexts/TransactionsContext';
import { formatCurrency } from '../../utils/currency';
import { styles } from './styles';
import { theme } from '../../theme';

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const { colors } = theme;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem</Text>

      <FlatList
        data={transactions}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text
              style={[
                styles.transactionPrice,
                { color: item.type === 'income' ? colors.green : colors.red },
              ]}
            >
              {item.type === 'outcome' && '-'}
              {formatCurrency(Number(item.price))}
            </Text>

            <View style={styles.transactionInfo}>
              <Text style={styles.transactionText}>{item.category.name}</Text>
              <Text style={styles.transactionText}>
                {format(new Date(item.created_at), 'dd/MM/yyyy')}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
