import { useTransactions } from '../../contexts/TransactionsContext';
import { formatCurrency } from '../../utils/currency';
import styles from './styles.module.scss';

export function Summary() {
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

  return (
    <div className={styles.summary}>
      <div className="container">
        <div className={styles.summaryList}>
          <div className={styles.summaryItem}>
            <div>
              <span>Entradas</span>
              <img src="/income.svg" alt="Income" />
            </div>
            <strong>{formatCurrency(summary.income)}</strong>
          </div>

          <div className={styles.summaryItem}>
            <div>
              <span>Saídas</span>
              <img src="/outcome.svg" alt="Outcome" />
            </div>
            <strong>{formatCurrency(summary.outcome)}</strong>
          </div>

          <div className={`${styles.summaryItem} ${styles.total}`}>
            <div>
              <span>Total</span>
              <img src="/total.svg" alt="Total" />
            </div>
            <strong>{formatCurrency(summary.total)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
