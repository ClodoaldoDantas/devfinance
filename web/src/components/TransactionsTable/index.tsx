import { useEffect } from 'react';
import { useTransactions } from '../../contexts/TransactionsContext';
import { formatCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';
import styles from './styles.module.scss';

export function TransactionsTable() {
  const { transactions, loadTransactions } = useTransactions();

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <div className="container">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'outcome' && '-'}
                  {formatCurrency(Number(transaction.price))}
                </td>
                <td>{transaction.category.name}</td>
                <td>{formatDate(transaction.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
